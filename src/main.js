import './assets/main.css'

// import VueFire from 'vuefire'
// import firebase from 'firebase/app'
// import 'firebase/firestore'
//
// Vue.use(VueFire)
// firebase.initializeApp({
//     projectId: 'YOUR_PROJECT_ID',
//     databaseURL: 'YOUR_DB_URL'
// })
// export const db = firebase.firestore()

import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import { store } from '@/store'

createApp(App).use(router).use(store).mount('#app')


