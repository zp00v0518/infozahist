<script>
const part_func_name = "GetValidate";

export default {
  watch: {
    checkValidate: function(newValue) {
      if (newValue) {
        this.getValidate();
      }
    },
    data:{
      deep: true,
      handler: function(newValue){
        this.value = newValue.value
      }
    }
  },
  methods: {
    getValidate() {
      const { validation } = this.data;
      const self = this;
      if (validation) {
        const flag = Object.keys(validation).some(key => {
          const nameFunction = key + part_func_name;
          if (self[nameFunction]) {
            return !self[nameFunction](validation[key]);
          } else {
            console.log(`Перевірка на ${key} не передбачена`);
            return false;
          }
        });
        if (flag) {
          this.isError = true;
          this.$emit("validation", !flag);
          return;
        }
      }
    },
    ["required" + part_func_name](check) {
      return check && this.value !== 0? Boolean(this.value) : true;
    },
    ["email" + part_func_name](check) {
      return check ? Boolean(this.value) : true;
    },
    ["pattern" + part_func_name](pattern) {
      const regexp = new RegExp(pattern);
      return regexp.test(this.value)
    }
  }
};
</script>