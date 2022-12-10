<template>
    <div class="container">
        <div class="content">
            <p>Card Producto</p>
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="../assets/iphone13.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ nombre }}</h5>
                    <p class="card-text">{{ descripcion }}</p>
                    <p class="card-text">Precio: {{ precio | redondear }}$ </p>
                    <p class="card-text">Cantidad: {{ cantidad }}$ </p>
                    <p class="card-text">Subtotal: {{ subTotal | redondear}} </p>
                    <a class="btn btn-primary">Detalles</a>
                    <a class="btn btn-secondary" v-on:click="quitar">-</a>
                    <a class="btn btn-primary" v-on:click="agregar">+</a>
                    <a class="btn btn-primary">Agregar</a>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: 'CardProducto',
    props: {
        nombre: String,
        foto: String,
        precio: Number,
        descripcion: String,
        detalles: String,

    },
    data() {
        return {
            cantidad: 0,
            subTotal: 0
        };
    },
    methods: {
        agregar() {
            this.cantidad += 1
            this.subTotal1()
        },
        quitar() {
            if (this.cantidad >= 1) {
                this.cantidad -= 1
                this.subTotal1()
            }
        },
        subTotal1() {
            this.subTotal = this.cantidad * this.$props.precio
        }

    },
    filters: {
       redondear:(subTotal)=>{
        return subTotal.toFixed(2);
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
    width: 80%;
    align-self: center;
    background-color: yellowgreen;
    color: black;
    margin-left: 25%;
    margin-bottom: 50px;
}
</style>