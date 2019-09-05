<template>
  <div class="multiple__wrap">
    <div class="multiple">
      <div class="multiple__item" v-for="(item, index) in list" :key="item.code + index">
        <component
          :is="getComponentName(item)"
          :data="item"
          :checkValidate="isValidate"
          @change="handlerChange($event, index)"
        />
        <ElementButton @click="deleteItem(index)" type="primary">Delete</ElementButton>
      </div>
    </div>
    <ElementButton @click="addItem" type="primary">Add</ElementButton>
  </div>
</template>

<script>
import { Button as ElementButton } from "element-ui";

export default {
  name: "Multiple",
  components: { ElementButton },
  props: {
    data: { type: Object, required: true, default: () => {} },
    checkValidate: { type: Boolean, default: false }
  },
  data() {
    return {
      list: [],
      default: {}
    };
  },
  computed: {
    isValidate() {
      return this.checkValidate;
    }
  },
  created() {
    this.list.push(this.data);
    this.createTemplate();
  },
  methods: {
    handlerChange(event, index) {
      this.list[index].value = event;
      this.saveInStorage();
    },
    saveInStorage() {
      const value = this.list.map(item => item.value);
      this.$store.commit("SAVE_IN_STORAGE", {
        code: this.data.code,
        value
      });
    },
    createTemplate() {
      this.default = Object.assign({}, this.data);
    },
    getComponentName(item) {
      const prefix = "V";
      if (!item.type) return prefix + "string";
      return prefix + item.type;
    },
    addItem() {
      this.list.push(Object.assign({}, this.default));
    },
    deleteItem(index) {
      this.list.splice(index, 1);
      this.saveInStorage();
    }
  }
};
</script>

<style lang="scss" scoped>
.multiple {
  display: flex;
  flex-direction: column;
  &__item {
    display: flex;
    justify-content: space-between;
    margin: 5px 5px 5px 0;
  }
}
</style>