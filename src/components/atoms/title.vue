<template>
  <div class="title">{{title}}<span v-if="required">*</span> </div>
</template>

<script>
export default {
  name: "Vtitle",
  props: {
    title: { type: String, default: "" },
    required: { type: Boolean, default: false }
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin: 0 10px 0 0;
  font-weight: 700;
  span{
    color: red;
  }
}
</style>