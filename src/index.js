// Import vue component
import component from './vue-simple-context-menu.vue';

// install function executed by app.use()
export function install (app) {
  if (install.installed) return;
  install.installed = true;
  app.component('VueSimpleContextMenu', component);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default component;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
