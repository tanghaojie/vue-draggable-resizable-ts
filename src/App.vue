<template>
  <div
    style="background-color: rgba(50, 50, 50, 0.2); width: 600px; height: 600px"
  >
    <vue3-draggable-resizable :parent="true" :lockAspectRatio="false">
      <div style="background-color: green; height: 100%; width: 100%">
        <span style="color: white; text-align: center">
          vue3-draggable-resizable
        </span>
      </div>
    </vue3-draggable-resizable>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vue3DraggableResizable from './components/vue3-draggable-resizable.vue'

export default defineComponent({
  name: 'App',
  components: {
    vue3DraggableResizable,
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
