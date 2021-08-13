## Vue3 + typescript Component for draggable and resizable elements, with no dependencies.

## Install and basic usage

```bash
$ npm install --save vue-draggable-resizable-ts
```

Register the component

```js
import { createApp } from 'vue'
import App from './App.vue'

import vueDraggableResizableTs from 'vue-draggable-resizable-ts'
import 'vue-draggable-resizable-ts/dist/VueDraggableResizableTs.css'

const app = createApp(App)

app.component('vue-draggable-resizable-ts', vueDraggableResizableTs)

app.mount('#app')
```

```js
<vue-draggable-resizable-ts style="background-color:green">
  test
</vue-draggable-resizable-ts>
```
