app.component("badge", {
    template: 
    `
    <span class="badge new" v-if="product.new"> New</span>
    <span class="badge offer" v-if="product.offer">Offer</span>
    `,
    props:["product"]
});