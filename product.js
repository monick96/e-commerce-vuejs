app.component("product", {
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
        <badge :product="product"></badge>
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
        <button :disabled="product.stock == 0" @click="sendToCart">Add to cart</button>
    </section>
    `,
    props:["product"],
    emits:["sendtocart"],
    setup(props,context) {
        const productState = reactive({
            activeImage:0
        });
        //desestructuring para no tener que estar agregando el props.product en todos los lugares donde se usaban como product
        const {product} = props;

        function sendToCart() {
            context.emit("sendtocart",product)
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

        return{
            ...toRefs(productState),//= a product: productState.product
            // ...toRefs(cartState),
            //functions
            applyDiscount,
            sendToCart
        };
    }
});