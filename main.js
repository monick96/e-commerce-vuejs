//composition API version
const {createApp, ref} = Vue;

const app = createApp({
    setup(){
        const product = ref({
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
        offer:true
        });
        const activeImage = ref(0);
        const cartOpen = ref(false);
        const cart = ref([]);
        const discountCodes = ref(["commerce50","commerce20"])
        function applyDiscount(event){
            const discountCodeIndex = discountCodes.indexOf(event.target.value)
            if (discountCodeIndex >= 0){
                product.value.price *= 50/100
                discountCodes.splice(discountCodeIndex,1);
            }
        }

        setTimeout(() => {
            activeImage.value = 1
        }, 2000);

        return{
            product,
            activeImage,
            cartOpen,
            cart,
            //functions
            applyDiscount
        };

    }
});
app.mount("#app")