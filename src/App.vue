<template>
  <Person />
</template>

<script>
import Person from "./components/Person.vue";

export default {
  name: "app",
  components: {
    Person
  }
};
</script>

<style lang="scss">
@import "./assets/app.scss";
</style>
