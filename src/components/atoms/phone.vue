<template>
  <div class="string">
    <Vtitle :title="data.title" :required="isRequred"></Vtitle>
    <div>
      <span v-if="isError" class="error">{{error}}</span>
      <ElementInput v-model="value" @change="handlerChange" />
    </div>
  </div>
</template>

<script>
import { Input as ElementInput } from "element-ui";
import { validation, baseMixin } from "./mixins";

export default {
  name: "Vphone",
  components: { ElementInput },
  mixins: [validation, baseMixin]
};
</script>

<style lang="scss" scoped>
@import "../../assets/app.scss";
</style>