<template>
  <div class="home">
    <section class="home-content">
      <div class="home-content-title-bar">
        <p>
          THE FIRST
          <span>ONLINE STREAMING MOVIE SEARCH ENGINE</span>
        </p>
      </div>
      <div class="home-content-description-bar">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni libero
        eius veritatis impedit? Suscipit error, necessitatibus quis quae officia
        ipsam, nemo sit voluptatem minima a voluptate ipsum alias! Fugit,
        nostrum!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam neque
        dignissimos vitae qui minus, ipsum dicta dolorum animi expedita
        consequuntur rem, iure debitis aut earum nostrum! Sapiente officiis odio
        debitis?
      </div>
    </section>
    <section class="home-filter">
      <input
        @keyup="moviesFilter"
        v-model="moviesFilterResult"
        type="text"
        placeholder="Arama"
      />
      <select class="home-filter-arrangement">
        <option value="new-old">Yeniden-Eskiye</option>
        <option value="old-new">Eskiden-Yeniye</option>
        <option value="big-small">Büyükten-Küçüğe</option>
        <option value="small-big">Küçükten-Büyüğe</option>
      </select>
    </section>

    <section class="home-movie">
      <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "HomeView",
  components: {
    MovieCard,
  },
  setup() {
    const movies = ref([]);

    const dataLoad = async () => {
      await fetch("http://localhost:3000/movies") // default GET
        .then((res) => res.json())
        .then((data) => (movies.value = data));
    };

    dataLoad();

    const moviesFilterResult = ref("");
    const moviesFilter = () => {
      console.log(moviesFilterResult);
    };

    return {
      movies,
      moviesFilter,
      moviesFilterResult,
    };
  },
};
</script>

<style lang="scss">
.home-content {
  display: flex;
  justify-content: space-between;
  &-title-bar {
    color: #fac000;
    width: 450px;
    font-size: 45px;
    font-weight: 600;
    line-height: 1.1;

    span {
      color: white;
    }
  }

  &-description-bar {
    margin-top: 45px;
    margin-bottom: 0;
    width: 450px;
    font-size: 12px;
    font-weight: 300;
    color: gray;
    line-height: 1.5;
  }
}
.home-movie {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}
.home-filter {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  input {
    background-color: rgb(255, 255, 255);
    border: 1px solid #ccc;
    padding: 4px 50px 4px 4px;
    border-radius: 4px;
  }
  &::after {
    content: "";
    display: flex;
    position: absolute;
    background-image: url("../assets/search-icon.svg");
    width: 20px;
    height: 20px;
    background-size: 20px;
    background-repeat: no-repeat;
    margin-top: 2px;
    margin-left: 170px;
  }
  ::placeholder {
    padding-left: 4px;
    font-size: 12px;
  }
  &-arrangement {
    padding: 4px 10px;
    font-size: 12px;
  }
}
</style>
