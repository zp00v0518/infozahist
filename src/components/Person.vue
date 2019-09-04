<template>
  <div class="hello">hello</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Person",
  created() {
    console.log(this.attributes);
  },
  computed: {
    ...mapState({
      attributes: state => state.person.attributes
    })
  }
};
</script>

<style scoped lang="scss">
</style>
