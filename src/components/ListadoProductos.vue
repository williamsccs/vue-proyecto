<template>
    <div class="container">
        <div class="content">
            <p>Listado Productos</p>
            <div v-for="(producto, index) in $store.productos.productos" :key="index">
                <div v-if="producto.disponible">
                    <CardProducto :id="producto.id" :nombre="producto.nombre" :foto="producto.foto"
                        :precio="producto.precio" :descripcion="producto.descripcion" :detalles="producto.detalles" />
                </div>


            </div>
            <h2>Carrrito ({{ $store.cart.items.length }} items)</h2>
            <button class="btn btn-primary" @click="falta">Comprar</button>
        </div>
    </div>

</template>

<script>
import CardProducto from './CardProducto.vue';

export default {
    name: "ListadoProductos",
    data() {
        return {

        };
    },
    methods: {
        falta() {
            alert("todavia no esta desarrollada esta parte, espere uno dias :D")
        }
    },
    computed: {},
    components: { CardProducto }
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
    width: 70%;
    align-self: center;
    background-color: purple;
    color: black;
    margin-left: 25%;
    margin-bottom: 50px;
}
</style>