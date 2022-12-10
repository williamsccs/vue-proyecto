<template>
    <div class="container">
        <div class="content">
            <p>Login Usuarios</p>

            <p>Inicie Sesion</p>
            <p>Correo</p>
            <input type="text">
            <p>Clave</p>
            <input type="password">
            <button>Sign In</button>
        </div>
    </div>


</template>

<script>
export default{
    name: 'LoginUsuarios',
    data(){
        return{
            email:'',
            pass:''

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
    background-color: red;
    color: black;
    margin-left: 25%;
    margin-bottom: 50px;
}
</style>