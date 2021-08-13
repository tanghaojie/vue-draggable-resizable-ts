<template>
  <div class="container">
    <vueDraggableResizableTs :w="100" :h="100">
      <div class="content">full drag and resize</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :initialPosition="'mm'"
    >
      <div class="content">parent drag and resize</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :minHeight="50"
      :minWidth="50"
      :maxWidth="150"
      :maxHeight="150"
    >
      <div class="content">min/max width/height</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :resizable="false"
      :initialPosition="'mm'"
    >
      <div class="content">drag only</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :draggable="false"
      :initialPosition="'mm'"
    >
      <div class="content">resize only</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :dragHandle="'.header'"
      :initialPosition="'mm'"
      style="background-color: darkgreen; color: white"
    >
      <div class="header" style="background-color: gray">drag only here</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :axis="'x'"
      :initialPosition="'mm'"
    >
      <div class="content">X axis drag</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :axis="'y'"
      :initialPosition="'mm'"
    >
      <div class="content">Y axis drag</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="'auto'"
      :h="'auto'"
      :initialPosition="'mm'"
    >
      <div style="padding: 10px; background-color: darkgreen; color: white">
        auto size
      </div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :resizeAreaSize="15"
      :initialPosition="'mm'"
      class="showResizeArea"
    >
      <div class="content">
        <div style="padding: 15px">change resize area size</div>
      </div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="50"
      :lockAspectRatio="true"
      :initialPosition="'mm'"
    >
      <div class="content">lock aspect ratio</div>
    </vueDraggableResizableTs>
  </div>

  <div class="grid-container">
    <vueDraggableResizableTs :parent="true" :w="100" :h="100" :grid="[20, 20]">
      <div class="content">grid 20*20</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs :parent="true" :w="100" :h="100" :x="25" :y="50">
      <div class="content">offset 25*50</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :initialPosition="'tm'"
    >
      <div class="content">top center</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :initialPosition="'tr'"
    >
      <div class="content">top right</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :initialPosition="'ml'"
    >
      <div class="content">middle left</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :initialPosition="'mm'"
    >
      <div class="content">middle center</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :initialPosition="'mr'"
    >
      <div class="content">middle right</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :initialPosition="'bl'"
    >
      <div class="content">bottom left</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :initialPosition="'bm'"
    >
      <div class="content">bottom center</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      :parent="true"
      :w="100"
      :h="100"
      :initialPosition="'br'"
    >
      <div class="content">bottom right</div>
    </vueDraggableResizableTs>
  </div>

  <div class="container">
    <vueDraggableResizableTs
      class="showResizeArea"
      :parent="true"
      :w="100"
      :h="100"
      :handles="['tr', 'mr', 'br', 'bm', 'bl']"
      :initialPosition="'mm'"
    >
      <div class="content">right and bottom resize only</div>
    </vueDraggableResizableTs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vueDraggableResizableTs from './components/vue-draggable-resizable-ts.vue'

export default defineComponent({
  name: 'App',
  components: {
    vueDraggableResizableTs,
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
  display: flex;
  flex-wrap: wrap;
}

.container {
  margin: 20px 0 0 20px;

  background-color: rgba(50, 50, 50, 0.2);
  width: 200px;
  height: 200px;
  flex-grow: 0;
  flex-shrink: 0;
}

.grid-container {
  margin: 20px 0 0 20px;
  background-color: rgba(50, 50, 50, 0.2);
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      0% 0% / 20px 20px,
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 20px 20px;
  width: 200px;
  height: 200px;
  flex-grow: 0;
  flex-shrink: 0;
}

.content {
  height: 100%;
  width: 100%;
  background-color: darkgreen;
  color: white;
}

.showResizeArea > div {
  opacity: 1 !important;
}
</style>
