<template>
    <div class="container">
        <div class="content">
            <p>Listado Productos</p>
            <div v-for="(producto, index) in productos" :key="index">
                <div v-if="producto.disponible">
                    <CardProducto :nombre="producto.nombre" :foto="producto.foto" :precio="producto.precio" :descripcion="producto.descripcion" :detalles="producto.detalles"/>
                    
                </div>
                

            </div>
            <button class="btn-primary">Comprar</button>
        </div>
    </div>

</template>

<script>
import CardProducto from './CardProducto.vue';

export default{
    name: "ListadoProductos",
    data() {
        return {
            productos:[
                {
                    nombre:"Sushi",
                    foto:"./",
                    precio:1000.1234,
                    descripcion:"Lindo sushi comestible",
                    detalles:"aqui van mas detalles",
                    disponible:true
                },
                {
                    nombre:"Helado",
                    foto:"../assets/iphone13.png",
                    precio:1000.99,
                    descripcion:"Hermoso helado Frio",
                    detalles:"aqui van mas detalles",
                    disponible:true
                },
                {
                    nombre:"Hamburguesa",
                    foto:"../assets/iphone13.png",
                    precio:1000,
                    descripcion:"Preciosa hamburguesa caliente",
                    detalles:"aqui van mas detalles",
                    disponible:true
                },
                {
                    nombre:"Esta no debe verse",
                    foto:"../assets/iphone13.png",
                    precio:1000,
                    descripcion:"Preciosa hamburguesa caliente",
                    detalles:"aqui van mas detalles",
                    disponible:false
                },
            ]
        };
    },
    methods: {},
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
    width: 50%;
    align-self: center;
    background-color: purple;
    color: black;
    margin-left: 25%;
    margin-bottom: 50px;
}
</style>