<template>
  <div class="string">
    <Vtitle :title="data.title" :required="isRequred"></Vtitle>
    <div>
      <span v-if="isError" class="error">{{error}}</span>
      <ElementSelect
        v-model="value"
        :placeholder="'Select'"
        @change="handlerChange"
        :filterable="isAutocomplete"
        :no-match-text="'no data'"
        :no-data-text="'no data'"
        :remote="isAutocomplete"
        :remote-method="remoteMethod"
      >
        <ElementOption
          v-for="(item, index) in choices"
          :key="index"
          :label="item.title"
          :value="item.id"
        ></ElementOption>
      </ElementSelect>
    </div>
  </div>
</template>

<script>
import { Select as ElementSelect, Option as ElementOption } from "element-ui";
import { validation, baseMixin } from "./mixins";

const enumTypes = {
  ImportanceValue: [
    { id: 1, title: "Важливо" },
    { id: 2, title: "Нормально" },
    { id: 3, title: "Дуже важливо" }
  ],
  JobPositionValue: [
    // ієрархічний список
    { id: 1, title: "Аграрний сектор" },
    { id: 2, title: "Тракторист", parentId: 1 },
    { id: 7, title: "Проджект менеджер", parentId: 6 },
    { id: 5, title: "Програміст", parentId: 4 },
    { id: 8, title: "Офіс менеджер", parentId: 6 },
    { id: 3, title: "Фермер", parentId: 1 },
    { id: 4, title: "IT" },
    { id: 6, title: "Менеджмент", parentId: 4 }
  ]
};

export default {
  name: "Venum",
  components: { ElementSelect, ElementOption },
  mixins: [validation, baseMixin],
  data() {
    return {
      choices: []
    };
  },
  created() {
    this.choices = this.isAutocomplete ? [] : enumTypes[this.data.enumType];
    // this.choices =  enumTypes[this.data.enumType];
  },
  computed: {
    // choices() {
    //   return enumTypes[this.data.enumType] || [];
    // },
    isAutocomplete() {
      return this.data.enumType === "JobPositionValue";
    }
  },
  methods: {
    remoteMethod(value) {
      const lowValue = value.toLowerCase();
      const list = enumTypes[this.data.enumType];
      const temper = list.filter(item => {
        const lowTitle = item.title.toLowerCase();
        return lowTitle.includes(lowValue);
      });
      this.choices = temper;
      return temper;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/app.scss";
</style>