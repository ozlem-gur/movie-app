<template>
  <Header />
  <Container>
    <router-view />
  </Container>
</template>
<script>
import Header from "@/components/Header.vue";
import Container from "@/components/Container.vue";
export default {
  components: {
    Header,
    Container,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap");

body {
  background-color: #000000;
  margin: 0;
}
#app {
  font-family: "Inter", sans-serif;

  color: #2c3e50;
}
</style>
