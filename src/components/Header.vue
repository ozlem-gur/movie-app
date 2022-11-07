<template>
  <header class="header">
    <Container class="header-container">
      <div class="header-container-logo">
        <router-link to="/">
          <img src="../assets/logo.svg" alt="Imdb logo" />
        </router-link>
      </div>
      <div class="header-container-search">
        <input
          @keyup.enter="searchMovie"
          v-model="movieSearchKeyword"
          type="text"
          placeholder="Arama"
        />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "@/components/Container.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Container,
  },
  setup() {
    const movieSearchKeyword = ref("");
    const router = useRouter();

    const searchMovie = () => {
      router.push({
        path: "movie-search",
        query: {
          keyword: movieSearchKeyword.value,
        },
      });
    };

    return { movieSearchKeyword, searchMovie };
  },
};
</script>

<style lang="scss">
.header {
  padding-top: 16px;
  padding-bottom: 16px;

  background-color: #121212;
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-logo {
      width: 64px;
      height: 32px;
      img {
        width: 64px;
        height: 32px;
        border-radius: 5px;
      }
    }
    &-search {
      position: relative;

      input {
        background-color: rgb(255, 255, 255);
        border: 1px solid #ccc;
        font-size: 13px;
        padding: 8px 75px 8px 8px;
        border-radius: 4px;
      }
      &::after {
        content: "";
        display: flex;
        position: absolute;
        background-image: url("../assets/search-icon.svg");
        width: 21px;
        height: 21px;
        background-size: 21px;
        background-repeat: no-repeat;
        top: 6px;
        left: 192px;
      }
    }
  }
}
</style>
