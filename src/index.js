import VueDraggableResizableTs from './components/vue-draggable-resizable-ts.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueDraggableResizableTs', VueDraggableResizableTs)
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

VueDraggableResizableTs.install = install

export default VueDraggableResizableTs
