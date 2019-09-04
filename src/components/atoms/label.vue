<template>
  <div class="label">label</div>
</template>

<script>
export default {
  name: "Vlabel",
  props: {
    label: { type: String, default: "" },
    required: { type: Boolean, default: false }
  }
};
</script>