import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// Create reactive data store
const store = Vue.observable({
  cart: {
    // items: [{ id: 1, cantidad:2 }],
    items: [],
    add(item) {
      store.cart.items.push(item)
    }
  },
  productos: {
    productos: [
      {
        id: 1,
        nombre: "Sushi",
        foto: "sushy.jpg",
        precio: 4550.1234,
        descripcion: "Lindo sushi comestible",
        detalles: "aqui van mas detalles del sushi",
        disponible: true
      },
      {
        id: 2,
        nombre: "Helado",
        foto: "icecream.jpg",
        precio: 849.99,
        descripcion: "Hermoso helado Frio",
        detalles: "aqui van mas detalles del helado",
        disponible: true
      },
      {
        id: 3,
        nombre: "Hamburguesa",
        foto: "burguer.jpg",
        precio: 1750,
        descripcion: "Preciosa hamburguesa caliente",
        detalles: "aqui van mas detalles dela hamburguesa",
        disponible: true
      },
      {
        id: 4,
        nombre: "Esta no debe verse",
        foto: "iphone13.png",
        precio: 1000,
        descripcion: "Preciosa hamburguesa caliente",
        detalles: "aqui van mas detalles del iphone 13",
        disponible: false
      },
    ],

  }
})

// Make Store global

Vue.prototype.$store = store

new Vue({
  render: h => h(App),
}).$mount('#app')
