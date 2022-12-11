<template>
    <div class="container">
        <div class="content">
            <p>Informacion Producto</p>
            <p>detalles: {{ findDetails(id) }}</p>
        </div>
    </div>


</template>

<script>

export default {
    name: 'InformacionProducto',
    props: {
        id: Number,

    },
    data() {
        return {

        };
    },
    methods: {
        findDetails(id2) {
            //let array=[]
            let item = this.$store.productos.productos.find(item => item.id === id2);
            return item.detalles
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

.content {
    height: 100%;
    width: 50%;
    align-self: center;
    background-color: green;
    color: black;
    margin-left: 25%;
    margin-bottom: 50px;
    padding-bottom: 50px;
}
</style>