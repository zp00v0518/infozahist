<template>
  <div class="string">
    <Vtitle :title="data.title" :required="isRequred"></Vtitle>
    <div>
      <span v-if="isError" class="error">{{error}}</span>
      <InputNumber v-model="value" @change="handlerChange" :precision="100" :step="0.1" />
    </div>
  </div>
</template>

<script>
import { InputNumber } from "element-ui";
import { validation, baseMixin } from "./mixins";

export default {
  name: "Vfloat",
  components: {
    InputNumber
  },
  mixins: [validation, baseMixin]
};
</script>

<style lang="scss" scoped>
@import "../../assets/app.scss";
</style>