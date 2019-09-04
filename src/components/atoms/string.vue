<template>
  <div class="string">
    <Vtitle :title="data.title" :required="data.validation.required"></Vtitle>
    <div>
      <span v-if="isError" class="error">{{error}}</span>
      <ElementInput v-model="value" />
    </div>
  </div>
</template>

<script>
import { Input as ElementInput } from "element-ui";
const part_func_name = 'GetValidate';

export default {
  name: "Vstring",
  components: {
    ElementInput
  },
  props: {
    data: { type: Object, required: true },
    checkValidate: { type: Boolean, default: false }
  },
  data() {
    return {
      value: "",
      error: "Поле не пройшло перевірку",
      isError: false
    };
  },
  watch: {
    checkValidate: function(newValue) {
      this.getValidate();
    }
  },
  created() {
    // console.log(this.data);
  },
  methods: {
    getValidate() {
      const { validation } = this.data;
      const self = this;
      if (validation) {
        const flag = !Object.keys(validation).some(key => {
          const nameFunction = key + part_func_name;
          if (self[nameFunction]) {
            return !self[nameFunction](validation[key]);
          } else {
            console.log(`Перевірка на ${key} не передбачена`);
            return false;
          }
        });
        this.$emit('validation', flag)
      }
    },
    ['required' + part_func_name](value){
      return value;
    }
  }
};
</script>

<style lang="scss" scoped>
.string {
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.error {
  color: red;
}
</style>