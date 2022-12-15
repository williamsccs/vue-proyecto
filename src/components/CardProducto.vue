<template>
    <div class="container">
        <div class="content">
            <!-- <p>Card Producto</p> -->
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="getImgUrl(foto)" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ nombre }}</h5>
                    <!-- <p class="card-text">id: {{ id }}</p> -->
                    <p class="card-text">{{ descripcion }}</p>
                    <p class="card-text">Precio: {{ precio | redondear }}$ </p>
                    <p class="card-text">Cantidad: {{ cantidad }}$ </p>
                    <p class="card-text">Subtotal: {{ subTotal | redondear }} </p>
                    <a class="btn btn-primary" @click="hover = true" @mouseleave="hover = false">Detalles</a>
                    <a class="btn btn-secondary" v-on:click="quitar">-</a>
                    <a class="btn btn-primary" v-on:click="agregar">+</a>
                    <!-- <a class="btn btn-primary" @click="$store.cart.add({ id, cantidad })">Agregar</a> -->
                    <a class="btn btn-primary" @click="agregarAlCarrito">Agregar</a>
                </div>
            </div>
            <InformacionProducto v-if="hover" :id="id" />
        </div>

    </div>


</template>

<script>

import InformacionProducto from './InformacionProducto.vue';


export default {
    name: "CardProducto",
    props: {
        id: Number,
        nombre: String,
        foto: String,
        precio: Number,
        descripcion: String,
        detalles: String,
    },
    data() {
        return {
            cantidad: 0,
            subTotal: 0,
            hover: false
        };
    },
    methods: {
        agregar() {
            this.cantidad += 1;
            this.subTotal1();
        },
        quitar() {
            if (this.cantidad >= 1) {
                this.cantidad -= 1;
                this.subTotal1();
            }
        },
        subTotal1() {
            this.subTotal = this.cantidad * this.$props.precio;
        },
        getImgUrl(foto) {
            return require("../assets/" + foto);
        },
        handleClick() {
            this.$emit("click", this.id);
        },
        agregarAlCarrito() {
            if (this.cantidad > 0) {

                this.$store.cart.add({ id: this.id, cantidad: this.cantidad })
                console.log("Se agrego")
            }
            else {
                console.log("no se agrego nada")
            }
        }
    },
    filters: {
        redondear: (subTotal) => {
            return subTotal.toFixed(2);
        }
    },
    computed: {},
    components: { InformacionProducto }
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
    width: 0%;
    align-self: center;
    background-color: yellowgreen;
    color: black;
    margin-left: 25%;
    margin-bottom: 50px;
}
</style>