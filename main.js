//import Product from './product.js';
const {createApp} = Vue;
//version option API
const app = createApp({
    //data() todo lo que contiene data corresponde a un proxy, todo lo que contiene data es observado por vue para reaccionar y ejecutar cuando alguna propiedad cambie
    data(){
        return{
            cartOpen:false,
            cart:[],
        }
    },
    methods:{   
    }
});
//app.component('product', Product);
app.mount("#app")