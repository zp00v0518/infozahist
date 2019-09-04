<template>
  <div class="person">
    <template v-for="item in attributes">
      <component :is="getComponentName(item)" :key="item.code" v-if="!item.multiple" :data="item" />
      <Multiple v-else :key="item.code" :data="item" />
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Multiple from "./Multiple";

export default {
  name: "Person",
  components: { Multiple },
  created() {
    // console.log(this.attributes);
  },
  computed: {
    ...mapState({
      attributes: state => state.person.attributes
    })
  },
  methods: {
    getComponentName(item) {
      const prefix = "V";
      if (!item.type) return prefix + "string";
      return prefix + item.type;
    }
  }
};
</script>

<style scoped lang="scss">
.person{
  max-width: 300px;
}
</style>
