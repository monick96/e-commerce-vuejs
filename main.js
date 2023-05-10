const {createApp} = Vue;
//version option API
const app = createApp({
    //data() todo lo que contiene data corresponde a un proxy, todo lo que contiene data es observado por vue para reaccionar y ejecutar cuando alguna propiedad cambie
    data(){
        return{
            product: {
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
            activeImage: 0,
            cartOpen:false,
            cart:[],
            discountCodes:["commerce50","commerce20"]
        }
    },
    methods:{
        applyDiscount(event){
            const discountCodeIndex = this.discountCodes.indexOf(event.target.value)
            if (discountCodeIndex >= 0){
                this.product.price *= 50/100
                this.discountCodes.splice(discountCodeIndex,1);
            }
        },
        addToCart(){
            const prodIndex = this.cart.findIndex(prod=> prod.name === this.product.name)
            if(prodIndex>= 0){
                this.cart[prodIndex].quantity += 1;
            }else{
                this.cart.push(this.product)
            }
            this.product.stock-=1
            
        }
    }
});

app.mount("#app")