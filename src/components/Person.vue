<template>
  <div class="person">
    <template v-for="item in attributes">
      <component
        :is="getComponentName(item)"
        :key="item.code"
        v-if="!item.multiple"
        :data="item"
        :checkValidate="checkValidate"
        @validation="handlerValidation"
        @change="handlerChange"
      />
      <Multiple v-else :key="item.code" :data="item" :checkValidate="checkValidate" />
    </template>
    <ElementButton @click="handlerClick" type="primary" style="margin-top: 15px;">{{btnName}}</ElementButton>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Button as ElementButton } from "element-ui";
import Multiple from "./Multiple";
import { getComponentName } from "../plugins";

export default {
  name: "Person",
  components: { Multiple, ElementButton },
  data() {
    return {
      btnName: "Зберігти",
      checkValidate: false,
      isValidatiaon: true
    };
  },
  computed: {
    ...mapState({
      attributes: state => state.person.attributes
    })
  },
  methods: {
    getComponentName,
    handlerClick() {
      this.checkValidate = true;
      this.$nextTick(() => {
        if (this.isValidatiaon) {
          console.log(this.$store.state.storage.data);
        } else {
          this.isValidatiaon = true;
          this.checkValidate = false;
        }
      });
    },
    handlerValidation(value) {
      this.isValidatiaon = value;
    },
    handlerChange() {
      this.checkValidate = false;
    }
  }
};
</script>

<style scoped lang="scss">
.person {
  max-width: 400px;
}
</style>
