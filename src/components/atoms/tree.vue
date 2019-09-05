<template>
  <div class="string">
    <div>
      <ElementSelect
        v-model="value"
        :placeholder="'Select'"
        :no-match-text="'no data'"
        :no-data-text="'no data'"
      >
        <ElementOption
          v-for="(item, index) in choices"
          :key="index"
          :label="item.title"
          :value="item.id"
        ></ElementOption>
      </ElementSelect>
    </div>
  </div>
</template>

<script>
import { Select as ElementSelect, Option as ElementOption } from "element-ui";

export default {
  name: "Vtree",
  components: { ElementSelect, ElementOption },
  props: {
    choices: { type: Array }
  },
  data() {
    return {
      value: ""
    };
  },
  created() {
    console.log(this.choices);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/app.scss";
</style>