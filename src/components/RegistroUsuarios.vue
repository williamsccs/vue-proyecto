<template>
  <div class="container">
    <div class="content">
      <p>Registro Usuarios</p>
      <p>Nombre</p>
      <input type="text" v-model="nombre">
      <p>Apellido</p>
      <input type="text" v-model="apellido">
      <p>Correo</p>
      <input type="email" v-model="correo">
      <p>Clave</p>
      <input type="password" v-model="clave">
      <h1></h1>
      <button @click="validar" class="btn btn-primary">Sign Up</button>
    </div>
  </div>


</template>

<script>
export default {
  name: 'RegistroUsuarios',
  data() {
    return {
      nombre: "",
      apellido: "",
      correo: "",
      clave: ""

    };
  },
  methods: {
    validar() {
      if (this.nombre && this.apellido && this.correo && this.clave) {
        // Si todo esta bien hacer login
        alert("todos los campos presentes, falta validarlos, pero digamos que estas registrado :D")
        console.log("todos los datos estan")
      }
      else {
        //aqui van las demas validaciones
        alert("Faltan Campos")
        console.log("faltan campos")
      }
    }
  },
  computed: {

  }
}

</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin-left: 0.5em !important;
}

button {
  display: inline-block;
}

.content {
  height: 100%;
  width: 50%;
  align-self: center;
  background-color: yellowgreen;
  color: black;
  margin-left: 25%;
  margin-bottom: 50px;
}
</style>