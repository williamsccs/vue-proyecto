<template>
    <div class="container">
        <div class="content">
          <p>Registro Usuarios</p>
          <p>Nombre</p>
          <input type="text">
          <p>Apellido</p>
          <input type="text">
          <p>Correo</p>
          <input type="email">
          <p>Clave</p>
          <input type="password">
        </div>
    </div>


</template>

<script>
export default{
    name: 'RegistroUsuarios',
    data(){
        return{

        };
    },
    methods:{

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