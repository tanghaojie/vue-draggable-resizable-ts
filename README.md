## Vue3 Component for draggable and resizable elements, with no dependencies.

> Vue3 + typescript

### Base on [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable)

## Install and basic usage

```bash
$ npm install --save vue3-ts-draggable-resizable
```

Register the component

```js
import { createApp } from 'vue'
import App from './App.vue'

import Vue3DraggableResizable from 'vue3-ts-draggable-resizable'
import 'vue3-ts-draggable-resizable/dist/Vue3DraggableResizable.css'

const app = createApp(App)

app.component('vue3-draggable-resizable', Vue3DraggableResizable)

app.mount('#app')
```

```js
<vue3-draggable-resizable style="background-color:green">
  test
</vue3-draggable-resizable>
```
