<script>
export default {
  props: {
    data: { type: Object, required: true },
    checkValidate: { type: Boolean, default: false }
  },
  data() {
    return {
      value: null,
      error: "Поле не пройшло перевірку",
      isError: false
    };
  },
  computed: {
    isRequred() {
      const { validation } = this.data;
      return validation ? validation.required : validation;
    }
  },
  methods: {
    handlerChange(value) {
      this.isError = false;
      this.$store.commit("SAVE_IN_STORAGE", {
        code: this.data.code,
        value: this.value
      });
      this.$emit("change", this.value);
    }
  }
};
</script>