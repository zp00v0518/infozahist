<template>
  <div class="string">
    <Vtitle :title="data.title" :required="isRequred"></Vtitle>
    <div>
      <span v-if="isError" class="error">{{error}}</span>
      <ElementSwitch v-model="value" @change="handlerChange" />
    </div>
  </div>
</template>

<script>
import { Switch as ElementSwitch } from "element-ui";
import { validation, baseMixin } from "./mixins";

export default {
  name: "Vstring",
  components: { ElementSwitch },
  mixins: [validation, baseMixin]
};
</script>
