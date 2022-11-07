<template>
  <div class="search-word">
    <h1>
      Aranılan Kelime: <span>{{ keyword }}</span>
    </h1>
  </div>
  <section class="movie-card-search">
    <MovieCard
      v-for="searchMovie in searchMovies"
      :key="searchMovie.imdbID"
      :movie="searchMovie"
    />
  </section>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import MovieCard from "@/components/MovieCard.vue";
export default {
  name: "MovieSearchView",
  components: {
    MovieCard,
  },
  setup() {
    const route = useRoute();
    const keyword = computed(() => {
      return route.query.keyword;
    });

    const searchMovies = ref([]);

    const searchData = async () => {
      await fetch(`http://www.omdbapi.com/?apikey=e546c797&s=${keyword.value}`)
        .then((res) => res.json())
        .then((data) => {
          searchMovies.value = data.Search;
          console.log(data.Search);
        });
    };

    searchData();

    return { searchMovies, keyword };
  },
};
</script>

<style lang="scss">
.search-word {
  margin-top: 30px;
  margin-bottom: 30px;
  color: #ffff;
  font-weight: 600;
  h1 {
    font-size: 24px;
  }
  span {
    color: #fac000;
  }
}
.movie-card-search {
  display: flex;
  flex-wrap: wrap;
}
</style>
