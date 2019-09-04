import Vue from 'vue';
/* eslint-disable no-useless-escape */

const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Look in subdirectories
  false,
  /\.*?.vue$/
);

requireComponent.keys().forEach(fileName => {
  if (fileName !== './index.js') {
    // Get the component config
    const componentConfig = requireComponent(fileName);
    // Get the component name
    const componentName = fileName.split('.')[1].substr(1);
    // Globally register the component
    Vue.component('V' + componentName, componentConfig.default || componentConfig);
  }
});