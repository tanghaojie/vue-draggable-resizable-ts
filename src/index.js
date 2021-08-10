import Vue3DraggableResizable from './components/vue3-draggable-resizable.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('Vue3DraggableResizable', Vue3DraggableResizable)
}

const plugin = {
  install,
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

Vue3DraggableResizable.install = install

export default Vue3DraggableResizable
