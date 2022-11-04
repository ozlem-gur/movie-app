<template>
  <div
    :style="{
      backgroundImage: 'url(' + movie.image + ')',
    }"
    class="movie-card"
  >
    <div class="movie-card-content">
      <div class="movie-card-content-year">{{ movie.year }}</div>
      <div class="movie-card-content-title">
        {{ movie.title }}
      </div>
      <div class="movie-card-content-point">
        <div class="movie-card-content-point-imdb">
          <img src="../assets/logo.svg" alt="imdbpoint logo" />
          {{ movie.imdbpoint }}
        </div>
        <div class="movie-card-content-point-tomato">
          <img src="../assets/tomato-icon.svg" alt="tomato icon" />
          {{ movie.tomatopoint }}
        </div>
      </div>

      <div class="movie-card-content-type">
        {{ movie.type }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCardComponent",
  props: ["movie"],
  setup(props) {},
};
</script>

<style lang="scss">
.movie-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 250px;
  width: 165px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 25px;
  margin-right: 25px;
  border-radius: 4px;
  overflow: hidden;

  &-content {
    background-color: rgba(black, 0.5);
    backdrop-filter: blur(5px);
    width: 165px;
    height: 22%;
    padding: 8px;

    &-year {
      color: #fac000;
      font-size: 9px;
      font-weight: 200;
      margin-bottom: 3px;
    }
    &-title {
      color: #ffffff;
      font-size: 11px;
      font-weight: 400;
      margin-bottom: 3px;
    }
    &-point {
      display: flex;
      align-items: center;
      margin-bottom: 3px;

      &-imdb {
        display: flex;
        align-items: center;
        font-weight: 200;
        color: #ccc;
        font-size: 9px;
        margin-right: 12px;

        img {
          width: 22px;
          height: 11px;
          margin-right: 4px;
        }
      }
      &-tomato {
        font-size: 10px;
        color: #ccc;
        font-weight: 200;
        img {
          width: 10px;
          height: 10px;
        }
      }
    }
    &-type {
      font-size: 9px;
      color: #ccc;
      font-weight: 200;
      margin-bottom: 4px;
    }
  }
}
</style>
