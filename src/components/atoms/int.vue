<template>
  <div class="string">
    <Vtitle :title="data.title" :required="isRequred"></Vtitle>
    <div>
      <span v-if="isError" class="error">{{error}}</span>
      <InputNumber v-model="value" @change="handlerChange" />
    </div>
  </div>
</template>

<script>
import { InputNumber } from 'element-ui';
import { validation, baseMixin } from "./mixins";

export default {
  name: "Vint",
  components: {
    InputNumber
  },
  mixins: [validation, baseMixin]
};
</script>
