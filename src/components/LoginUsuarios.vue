<template>
    <div class="container">
        <div class="content">
            <p>Login Usuarios</p>

            <p>Inicie Sesion</p>
            <p>Correo</p>
            <input type="text" v-model="email">
            <p>Clave</p>
            <input type="password" v-model="pass">
            <h1></h1>
            <button @click="validarDatos" class="btn btn-primary">Sign In</button>

        </div>
    </div>


</template>

<script>


export default {
    name: 'LoginUsuarios',
    data() {
        return {
            email: '',
            pass: '',

        };
    },
    methods: {
        //TODO: Agregar validaciones del formato de correo y la clave
        validarDatos() {
            if (this.email && this.pass) {
                //hacer login
                alert("correo y clave presentes, falta validarlos, pero digamos que iniciaras sesion :D")
                console.log("los dos campos estan, falta validar formato");

            }
            else {
                if (!this.email) {
                    // ingrese el correo
                    console.log("ingrese el correo")
                    alert("ingrese el correo")
                }
                if (!this.pass) {
                    //ingrese la pass
                    alert("falta la pass")
                    console.log("falta la pass")
                }

            }
        },

    },
    computed: {

    },
    components: {

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
    background-color: red;
    color: black;
    margin-left: 25%;
    margin-bottom: 50px;
}
</style>