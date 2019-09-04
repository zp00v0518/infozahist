<template>
  <div class="string">
    <ElementInput v-model="value" />
  </div>
</template>

<script>
import { Input as ElementInput } from "element-ui";

export default {
  name: "Vstring",
  components: {
    ElementInput
  },
  props: {
    data: { type: Object, required: true }
  },
  data() {
    return {
      value: ""
    };
  },
  created() {
    console.log(this.data);
  }
};
</script>    