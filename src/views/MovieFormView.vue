<template>
  <section class="movie-form">
    <div class="movie-form-inputs">
      <input v-model="movieForm.Title" type="text" readonly />
      <input v-model="movieForm.Year" type="text" readonly />
      <input v-model="movieForm.Poster" type="text" readonly />
      <input v-model="movieForm.imdbRating" type="text" readonly />
      <input v-model="movieForm.Genre" type="text" readonly />
    </div>
    <label class="movie-form-tomato-point">
      <p class="movie-form-tomato-point-text">Tomato Puanı:</p>
      <input
        v-model="movieForm.tomatoPoint"
        type="text"
        placeholder="0-100 arasında bir sayı giriniz."
      />
    </label>
    <button @click="saveMovie" class="movie-form-save">KAYDET</button>
  </section>
</template>

<script>
import { computed, reactive } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "MovieFormView",
  setup() {
    const movieForm = reactive({
      Title: "",
      Poster: "",
      Year: "",
      imdbRating: "",
      tomatoPoint: "",
      Genre: "",
    });

    const route = useRoute();
    const router = useRouter();
    const imdbID = computed(() => {
      return route.params.imdbID;
    });

    const formData = async () => {
      await fetch(`https://www.omdbapi.com/?apikey=e546c797&i=${imdbID.value}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          movieForm.Title = data.Title;
          movieForm.Year = data.Year;
          movieForm.Poster = data.Poster;
          movieForm.imdbRating = data.imdbRating;
          movieForm.Genre = data.Genre;
        });
    };
    formData();

    const saveMovie = function () {
      const tomatoPointNumber = Number(movieForm.tomatoPoint);

      if (0 <= tomatoPointNumber && tomatoPointNumber <= 100) {
        movieFormJsonData();

        router.push({
          path: "/",
        });
      } else {
        alert("Lütfen 0-100 arasında bir değer giriniz!");
      }
    };

    const movieFormJsonData = function () {
      const movieFormData = {
        Title: movieForm.Title,
        Poster: movieForm.Poster,
        Year: movieForm.Year,
        imdbRating: movieForm.imdbRating,
        tomatoPoint: `${movieForm.tomatoPoint}%`,
        ImdbID: imdbID.value,
        Genre: movieForm.Genre,
      };

      fetch(`http://localhost:3000/movies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movieFormData),
      });
    };

    //https://www.omdbapi.com/?apikey=e546c797&i=tt0372784

    return { imdbID, movieForm, saveMovie, movieFormJsonData };
  },
};
</script>

<style lang="scss">
.movie-form {
  display: flex;
  flex-direction: column;
  input {
    color: #ffff;
    height: 42px;
    border: 1px solid #444;
    border-radius: 6px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
    font-weight: 500;
    outline: none !important;
    margin-bottom: 15px;
    background-color: #121212;
  }
  &-inputs {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  &-tomato-point {
    display: flex;
    flex-direction: column;
    &-text {
      color: white;
      margin-top: 40px;
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: 600;
    }
  }
  &-save {
    color: #444;
    background-color: #fac000;
    border: 1px solid #fac000;
    padding: 10px 15px;
    border-radius: 8px;
    margin-top: 20px;
    font-weight: 600;
  }
}
</style>
