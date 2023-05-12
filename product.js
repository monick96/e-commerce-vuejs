
app.component("product",{
    template:/* vue-html*/
    `
    <section class="product">
        <div class="product__thumbnails">
            <div v-for="(image,index) in product.images" :key="image.thumbnail" class="thumb" :class="{active: activeImage === index}" :style="{backgroundImage: 'url(' +product.images[index].thumbnail +')'}" @click="activeImage = index"></div>
        </div>
        <div class="product__image">
            <img :src="product.images[activeImage].image" alt="product.name">
        </div>
    </section>
    <section class="description">
        <h4>{{product.name.toUpperCase()}} {{product.stock === 0 ? "😿" : "😎"}}</h4>
        <span class="badge new" v-if="product.new"> New</span>
        <span class="badge offer" v-if="product.offer">Offer</span>
        <p class="description__status" v-if="product.stock > 10">Unidades disponibles✨</p>
        <p class="description__status" v-else-if="product.stock == 10">⚠️Quedan pocas unidades⚠️</p>
        <p class="description__status" v-else-if="product.stock >=2">⚠️el producto esta proximo a agotarse😱⚠️</p>
        <p class="description__status" v-else-if="product.stock ==1">⚠️Ultima unidad😱⚠️</p>
        <p class="description__status" v-else>⚠️Agotado😭⚠️</p>
        <p class="description__price">{{new Intl.NumberFormat("es-AR", { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(product.price)}}</p>
        <p class="description__content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia velit aspernatur voluptatibus harum illo corporis nam, a commodi est doloremque vero autem hic nulla, cum non excepturi iusto, fugit voluptate!
        </p>
        <div class="discount">
            <span>Discount code</span>
            <input type="text" placeholder="Enter your code..." @keyup.enter="applyDiscount($event)">
        </div>
        <button :disabled="product.stock == 0" @click="addToCart">Add to cart</button>
    </section>
    `,
    data() {
        return {
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
            discountCodes:["commerce50","commerce20"]
        }
    },
    methods: {
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
})
// const Product = {
    
// };
// export default Product;





