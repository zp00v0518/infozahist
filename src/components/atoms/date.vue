<template>
  <div class="string">
    <Vtitle :title="data.title" :required="isRequred"></Vtitle>
    <div>
      <span v-if="isError" class="error">{{error}}</span>
      <ElementDate v-model="value" @change="handlerChange" />
    </div>
  </div>
</template>

<script>
import { DatePicker as ElementDate } from 'element-ui';
import { validation, baseMixin } from "./mixins";

export default {
  name: "Vstring",
  components: {
    ElementDate
  },
  mixins: [validation, baseMixin]
};
</script>
