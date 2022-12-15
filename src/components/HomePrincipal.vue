<template>
    <div class="container">
        <div class="content">
            <a type="button" class="btn btn-primary" @click="register" v-if="registered">Sign Up</a>
            <a type="button" class="btn btn-primary" v-else @click="register">Sign In</a>
            <LoginUsuarios v-if="registered" />
            <RegistroUsuarios v-else />
        </div>
    </div>


</template>

<script>

import LoginUsuarios from './LoginUsuarios.vue';
import RegistroUsuarios from './RegistroUsuarios.vue';

export default {
    name: "HomePrincipal",
    data() {
        return {
            registered: false
        };
    },
    methods: {
        register() {
            this.registered = !this.registered
        }
    },
    computed: {},
    components: { LoginUsuarios, RegistroUsuarios }
}

</script>

<style scoped>
a {
    color: #42b983;
    margin-top: 20px;
    margin-bottom: 20px;

}

label {
    margin-left: 0.5em !important;
}

.content {
    height: 100%;
    width: 70%;
    align-self: center;
    background-color: green;
    color: black;
    margin-left: 25%;
    margin-bottom: 50px;
    padding-bottom: 50px;
}
</style>