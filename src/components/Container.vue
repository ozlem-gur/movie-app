<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ContainerComponent",
};
</script>

<style>
.container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}
</style>
