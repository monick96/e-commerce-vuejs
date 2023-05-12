const {createApp,ref,reactive, toRefs} = Vue;
//reactive para agrupar toda la info en un solo estado
//como data(), reactive() contiene propiedades reactivas
//con reactive()


const app = createApp({
    setup(){
        const productState = reactive({
            product:{
                name:"Camera",
                price: 400_000,
                stock:12,
                content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia velit aspernatur voluptatibus harum illo corporis nam, a commodi est doloremque vero autem hic nulla, cum non excepturi iusto, fugit voluptate",
                images:[ 
                    {
                        image:"https://i01.appmifile.com/webfile/globalimg/products/m/mi-360-home-security-camera-2k/overview_01.jpg",
                        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtnXJ0k6SlzdgmVQVgGz3PcdBcxRTUpjaZQ&usqp=CAU"
                    },
                    {
                        image:"https://upload.wikimedia.org/wikipedia/commons/4/4f/YI_1080P_Home_Camera_Photo.jpg",
                        thumbnail:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGddu3MsmzENjoU7NU2fnFU9Uk-mBK1GOinw&usqp=CAU",
                    }
            ],
            new:false,
            offer:true,
            quantity:1
            },
            activeImage:0
        });
        //desestructuring para no tener que estar agregando el productState en todos los lugares donde se usaban como product
        const {product} = productState;
        
        

        const cartState = reactive({
            cartOpen:false,
            cart:[]
        });
        //desestructuring para no tener que estar agregando el cartState en todos los lugares donde se usaban como cart
        const {cart} = cartState;
        
        function addToCart () {
            const prodIndex = cart.findIndex(prod=> prod.name === product.name)
            
            if(prodIndex>= 0){
                cart[prodIndex].quantity += 1;
            }else{
                cart.push(product)
            }
            product.stock-=1
        }
        //queda como referencia
        const discountCodes = ref(["commerce50","commerce20"])

        function applyDiscount(event){
            const discountCodeIndex = discountCodes.value.indexOf(event.target.value)
            if (discountCodeIndex >= 0){
                product.price *= 50/100
                discountCodes.value.splice(discountCodeIndex,1);
            }
        }



        // setTimeout(() => {
        //     activeImage.value = 1
        // }, 2000);

        return{
            ...toRefs(productState),//= a product: productState.product
            ...toRefs(cartState),
            //functions
            addToCart,
            applyDiscount
        };

    }
})
app.mount("#app")