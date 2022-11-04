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
    <section class="home-movie">
      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
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
      await fetch("http://localhost:3000/movies")
        .then((res) => res.json())
        .then((data) => (movies.value = data));
    };

    dataLoad();

    return {
      movies,
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
  margin-top: 90px;
}
</style>
