import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './assets/global.scss'
import {tooltip} from "@/directives/tooltip";


const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
.directive('tooltip', tooltip)
.use(vuetify)
.mount('#app')
