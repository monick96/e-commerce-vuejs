const {createApp,ref,reactive, toRefs} = Vue;
//reactive para agrupar toda la info en un solo estado
//como data(), reactive() contiene propiedades reactivas
//con reactive()


const app = createApp({
    setup(){
        
        //desestructuring para no tener que estar agregando el productState en todos los lugares donde se usaban como product
        //const {product} = productState;
        
        const cartState = reactive({
            cartOpen:false,
            cart:[]
        });
        //desestructuring para no tener que estar agregando el cartState en todos los lugares donde se usaban como cart
        const {cart} = cartState;


        // setTimeout(() => {
        //     activeImage.value = 1
        // }, 2000);

        return{
            ...toRefs(cartState),
        };

    }
})
app.mount("#app")