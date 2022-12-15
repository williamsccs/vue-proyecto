<template>
    <div class="container">
        <div class="content">
            <p>CarritoProductos</p>
            <!-- <li v-for="(item, i) in $store.cart.items" :key="i">Nombre: {{ findTitle(item.id) }} - Cant: {{item.cantidad}}</li> -->
            <table>
                <tbody :style="{ 'background-color': 'red', 'text-align': 'center' }" v-for="(row, name) in data"
                    v-bind:key="name">

                </tbody>
                <tr>
                    <!-- <th v-for="(ro, selected) in row" v-bind:key="selected">{{ selected }}</th> -->
                    <th>Nombre</th>
                    <th>Cantidad</th>
                </tr>
                <tr v-for="(row, index) in data" :key="index"
                    :style="{ 'background-color': (index % 2 === 0) ? 'gray' : 'darkgray', 'color': (index % 2 === 0) ? 'blue' : 'blue' }">
                    <!-- <td v-for="(ro, k) in row" :key="k"> {{ ro }}</td> -->
                    <td v-for="(ro, k) in row" :key="k">{{ findName(k, ro) }}</td>
                </tr>
            </table>

        </div>
    </div>


</template>

<script>
export default {
    name: 'CarritoProductos',

    data() {
        return {
            data: this.$store.cart.items,
            background: "gray",
            background2: "darkgray",
            font1: "darkgray",
            font2: "blue",
            colortitle: "red",

        }
    },
    methods: {
        findTitle(id2) {
            //let array=[]
            let item = this.$store.productos.productos.find(item => item.id === id2);
            return item.nombre
        },
        findName(k, id2) {
            console.log("valor de k:" + k)
            console.log("valor de id2:" + id2)
            if (k === 'id') {
                console.log("entro al if")
                let item = this.$store.productos.productos.find(item => item.id === id2);
                console.log("item.nombre: " + item.nombre)
                return item.nombre
            }
            else {
                //console.log("el else devuelve: " + this.$store.cart.items[this.$store.cart.items.length-1].cantidad)
                //return this.$store.cart.items[1].cantidad
                return id2
            }
        }
    },
    computed: {

    },
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
    height: 200px;
    width: 70%;
    align-self: center;
    background-color: blue;
    color: red;
    margin-left: 25%;
    margin-bottom: 50px;
}

table,
td,
th {
    border: 1px solid black;
    /* text-align : center; */
}

table {
    border-collapse: collapse;
    width: 60%;
    margin-left: 20%;
}

td,
h1 {
    text-align: center;
}
</style>