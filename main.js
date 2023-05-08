const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            product: {
                name:"Camera",
                price: 400_000,
                stock:500,
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
            },
            activeImage: 0,
            cartOpen:true,
            cart:[
                {
                    name:"Camera",
                    price: 400_000,
                    stock:500,
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
                },
                {
                    name:"Camera PL",
                    price: 500_000,
                    stock:10,
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
                },
                {
                    name:"Camera Kodak",
                    price: 300_000,
                    stock:10,
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
                },
                {
                    name:"Camera Kodak",
                    price: 300_000,
                    stock:10,
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
                }
            ]
            
        }
    }
});

app.mount("#app")