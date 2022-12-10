<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <CarritoProductos></CarritoProductos>
    <InformacionProducto></InformacionProducto>
    <ListadoProductos></ListadoProductos>
    <LoginUsuarios></LoginUsuarios>
    <RegistroUsuarios></RegistroUsuarios>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CarritoProductos from './components/CarritoProductos.vue';
import InformacionProducto from './components/InformacionProducto.vue';
import ListadoProductos from './components/ListadoProductos.vue';
import LoginUsuarios from './components/LoginUsuarios.vue';
import RegistroUsuarios from './components/RegistroUsuarios.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    CarritoProductos,
    InformacionProducto,
    ListadoProductos,
    LoginUsuarios,
    RegistroUsuarios
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
