import { Data } from "../interfaces/data.interface";

 const data:Data[] = [
    {
        name_page:"Celulares",
        brands:["Samsung","Motorola","SONY"],
        rate:[1,10000],
        listProduct:[
            {
                id:1,
                name:'IPHONE 13',
                sales:234,
                percentage_reduce:10,
                price:10999,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Apple",
                review:"Aprovecha al máximo su pantalla de 6,1 pulgadas y no pierdas detalle de tus redes sociales y aplicaciones favoritas. Elegante, fino, más ligero y pequeño, es decir, casi un modelo PRO. El Iphone 12 es mucho más potente que generaciones anteriores gracias a su conectividad 5G, y para mayor seguridad cuenta con reconocimiento facial 3D. Tiene doble cámara con mejor lente y mayor apertura, el sensor principal es de 12 MP, el gran angular también es de 12 MP y los videos te quedarán increíbles ya que podrás grabar en 4K Dolby Vision, esto significa más detalle, colores más vivos y mayor contraste.",
                images:[
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704908387098.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704908387295.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704908387507.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704908387732.jpg"
              ],
              details:{
                manufactured:"apple",
                product_weight:"300g",
                dimensions:"320 x 480",
                Country_of_origin:"China",
                color:"Verde",
                memory:"64gb",
                back_camera: "12 mp",
                front_camera:"12 + 12 mp",       
                special_characteristics:"Ninguna",
                included_components:"Cargador",
                battery:"5000 mah",
            },
            comments_review:[
                { 
                    id:"1",
                    username:"ana",
                    comment:"Muy buen producto",
                    punctuation:5,
                },
                {
                    id:"2",
                    username:"jose",
                    comment:"Muy buen producto",
                    punctuation:5,
                },
                {
                    id:"3",
                    username:"kevin",
                    comment:"Muy buen producto",
                    punctuation:4,
                },
            ]
            },
            { 
                id:2,
                name:'SAMSUNG A33',
                sales:200,
                percentage_reduce:15,
                price:6499,
                review_number:3,
                average_review:"3",
                half_payment:"paypal",
                brand:"SAMSUNG",
                review:"Samsung A33: Cuenta con una pantalla de 6.4” HD+ que te cautivará. Cámara cuádruple para capturar tus momentos más importantes y con la mejor nitidez posible. Su procesador Octa- Core con Android 12 te ofrece un teléfono estable y poderoso. Poder para seguir en movimiento, con su batería de 5000mAh.",
                images:[
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704904921698.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704904921465.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704904922027.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704904922279.jpg",
                ],
                details:{
                    manufactured:"Samsung",
                    product_weight:"400g",
                    dimensions:"300 x 480",
                    Country_of_origin:"China",
                    color:"Negro",
                    memory:"128gb",
                    back_camera: "13 mp",
                    front_camera:"48 + 8 + 5 + 2 mp",       
                    special_characteristics:"Ninguna",
                    included_components:"Cargador",
                    battery:"5000 mah",
                },
                comments_review:[
                    {
                        id:"1",
                        username:"ana",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"2",
                        username:"jose",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"3",
                        username:"kevin",
                        comment:"Muy buen producto",
                        punctuation:4,
                    },
                ]
            },
            { 
                id:3,
                name:'SAMSUNG A34',
                sales:400,
                percentage_reduce:20,
                price:6599,
                review_number:5,
                average_review:"4",
                half_payment:"paypal",
                brand:"SAMSUNG",
                review:"El nuevo Samsung A34 cuenta con cámara triple para capturar tus mejores momentos. Con Android 13 y batería de 5000 mAh te ofrece un teléfono único para tu vida diaria. Disfruta tus series y videos a través de su pantalla 6.6",
                images:[
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685494503277.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685494503452.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685494503679.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685494503869.jpg",
                ],
                details:{
                    manufactured:"Samsung",
                    product_weight:"300g",
                    dimensions:"380 x 480",
                    Country_of_origin:"China",
                    color:"Negro",
                    memory:"128gb",
                    back_camera: "13 mp",
                    front_camera:"48 + 8 + 5 mp",       
                    special_characteristics:"Ninguna",
                    included_components:"Cargador",
                    battery:"5000 mah",
                },
                comments_review:[
                    {
                        id:"1",
                        username:"ana",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"2",
                        username:"jose",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"3",
                        username:"kevin",
                        comment:"Muy buen producto",
                        punctuation:4,
                    },
                ]
            },
            { 
                id:4,
                name:'SAMSUNG A54',
                sales:200,
                percentage_reduce:25,
                price:9599,
                review_number:2,
                average_review:"4",
                half_payment:"paypal",
                brand:"SAMSUNG",
                review:"Nuevo Samsung A54. Disfruta tu contenido favorito con su pantalla de 6.4 Con una gran cámara para capturar los momentos más importantes de tu vida. Su procesador Octa- Core, Android 13 y batería de 5000mAh, tendrás un teléfono estable y poderoso.",
                images:[
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685406707438.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685406707901.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685406708125.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685406708311.jpg",
                ],
                details:{
                    manufactured:"Samsung",
                    product_weight:"350g",
                    dimensions:"380 x 480",
                    Country_of_origin:"China",
                    color:"Negro",
                    memory:"128gb",
                    back_camera: "32 mp",
                    front_camera:"50 + 12 + 5 mp",       
                    special_characteristics:"Ninguna",
                    included_components:"Cargador",
                    battery:"5000 mah",
                },
                comments_review:[
                    {
                        id:"1",
                        username:"juan",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"2",
                        username:"jose",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"3",
                        username:"kevin",
                        comment:"Muy buen producto",
                        punctuation:4,
                    },
                ]
            },
            { 
                id:5,
                name:'MOTOROLA M5S',
                sales:120,
                percentage_reduce:5,
                price:5599,
                review_number:3,
                average_review:"4",
                half_payment:"paypal",
                brand:"MOTOROLA",
                review:"Ponlo en el modo que tú quieras con su cámara cuádruple de 64 MP que llevará tus fotos al nivel más alto en claridad y color. Tus selfies de 13 MP serán increíblemente nítidas. Cuenta con luz ambiental de 360 grados y modo antiparpadeo que reduce la fatiga de tus ojos. Envuelve tus sentidos con sus altavoces duales.",
                images:[
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704907005793.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704907006210.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704907006426.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704907006680.jpg",
                ],
                details:{
                    manufactured:"Motorola",
                    product_weight:"280g",
                    dimensions:"380 x 480",
                    Country_of_origin:"China",
                    color:"Azul",
                    memory:"128gb",
                    back_camera: "13 mp",
                    front_camera:"64 + 8 + 2 + 2 mp",       
                    special_characteristics:"Ninguna",
                    included_components:"Cargador",
                    battery:"5000 mah",
                },
                comments_review:[
                    {
                        id:"1",
                        username:"juan",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"2",
                        username:"jose",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"3",
                        username:"marisol",
                        comment:"Muy genial producto",
                        punctuation:2,
                    },
                ]
            },
            { 
                id:6,
                name:'MOTOROLA A2',
                sales:120,
                percentage_reduce:10,
                price:2599,
                review_number:3,
                average_review:"4",
                half_payment:"paypal",
                brand:"MOTOROLA",
                review:"Visualiza tus contenidos favoritos con su grandiosa pantalla de 6.52”. Cuenta con batería de alta capacidad por lo que puedes usarlo sin preocupaciones. Captura y revive tus momentos favoritos con tu nuevo Xiaomi Redmi A2.",
                images:[
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704910476155.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704910476629.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704910476812.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1704910477072.jpg",
                ],
                details:{
                    manufactured:"Motorola",
                    product_weight:"280g",
                    dimensions:"340 x 480",
                    Country_of_origin:"China",
                    color:"Negro",
                    memory:"32gb",
                    back_camera: "5 mp",
                    front_camera:"8 mp",       
                    special_characteristics:"Ninguna",
                    included_components:"Cargador",
                    battery:"5000 mah",
                },
                comments_review:[
                    {
                        id:"1",
                        username:"juan",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"2",
                        username:"jose",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"3",
                        username:"marisol",
                        comment:"Muy genial producto",
                        punctuation:2,
                    },
                ]
            },
            { 
                id:7,
                name:'SAMSUNG A04E',
                sales:320,
                percentage_reduce:15,
                price:3299,
                review_number:5,
                average_review:"4",
                half_payment:"paypal",
                brand:"SAMSUNG",
                review:"Samsung A04E te lleva a otra galaxia con su pantalla de 6.5. Con una gran cámara capturar los momentos más importantes de tu vida. Su procesador Octa- Core con Android 12 te ofrece un teléfono estable y poderoso. Mantente en movimiento, con su batería de 5000mAh.",
                images:[
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1687480831082.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1687480831435.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1687480831690.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1687480832096.jpg",
                ],
                details:{
                    manufactured:"Samsung",
                    product_weight:"280g",
                    dimensions:"340 x 460",
                    Country_of_origin:"China",
                    color:"Cobre",
                    memory:"128gb",
                    back_camera: "5 mp",
                    front_camera:"13 + 2 mp",       
                    special_characteristics:"Ninguna",
                    included_components:"Cargador",
                    battery:"5000 mah",
                },
                comments_review:[
                    {
                        id:"1",
                        username:"Rubens",
                        comment:"Hay mejores",
                        punctuation:5,
                    },
                    {
                        id:"2",
                        username:"jose",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"3",
                        username:"Marisol",
                        comment:"Muy genial producto",
                        punctuation:2,
                    },
                ]
            },
            { 
                id:8,
                name:'SAMSUNG A02S',
                sales:120,
                percentage_reduce:25,
                price:2299,
                review_number:2,
                average_review:"2",
                half_payment:"paypal",
                brand:"SAMSUNG",
                review:"Este teléfono responde a las exigencias de la vida diaria. Disfruta tus fotos y videos con su pantalla de 6.5 pulgadas. Con una asombrosa cámara triple y una gran batería de 5000mAh.",
                images:[
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685405865331.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685405864774.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685405865611.jpg",
                    "https://eco-mcp-assets-prod.s3.us-east-1.amazonaws.com/public/1685405865831.jpg",
                ],
                details:{
                    manufactured:"Samsung",
                    product_weight:"280g",
                    dimensions:"340 x 460",
                    Country_of_origin:"China",
                    color:"Negro",
                    memory:"64gb",
                    back_camera: "5 mp",
                    front_camera:"13 + 2 + 2 mp",       
                    special_characteristics:"Ninguna",
                    included_components:"Cargador",
                    battery:"5000 mah",
                },
                comments_review:[
                    {
                        id:"1",
                        username:"Rubens",
                        comment:"Hay mejores",
                        punctuation:5,
                    },
                    {
                        id:"2",
                        username:"jose",
                        comment:"Muy buen producto",
                        punctuation:5,
                    },
                    {
                        id:"3",
                        username:"Marisol",
                        comment:"Muy genial producto",
                        punctuation:2,
                    },
                ]
            }
        ]
    },
    {
        name_page:"Motocicletas",
        brands:["Honda","Yamaha","Ducati","Harley Davidson"],
        rate:[1,10000],
        listProduct:[
            {
                id:99977778,
                name:"2022 Harley-Davidson® Fat Bob® 114 Black",
                sales:10,
                price:6556,
                review_number:5,
                average_review:"3",
                half_payment:"paypal",
                brand:"Harley Davidson",
                images:[
                  "https://cdn.room58.com/2023/01/10/24106a33e1d40837e899bc0855a35798_38086e80a46ab42a.png",
                  "https://cdn.room58.com/2023/01/10/24106a33e1d40837e899bc0855a35798_38086e80a46ab42a.png"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      battery:"5000 mah",
                      
                  },
                  comments_review:[]
              },
            {
                id:65678878,
                name:"2022 Harley-Davidson® Fat Bob® 114 Black",
                sales:10,
                price:5556,
                review_number:5,
                average_review:"3",
                half_payment:"paypal",
                brand:"Harley Davidson",
                images:[
                  "https://cdn.room58.com/2023/01/10/24106a33e1d40837e899bc0855a35798_38086e80a46ab42a.png",
                  "https://cdn.room58.com/2023/01/10/24106a33e1d40837e899bc0855a35798_38086e80a46ab42a.png"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      battery:"5000 mah",
                  },
                  comments_review:[]
              },
            {
                id:65677798,
                name:"2022 Harley-Davidson® Fat Bob® 114 Black",
                sales:10,
                price:4556,
                review_number:5,
                average_review:"3",
                half_payment:"paypal",
                brand:"Harley Davidson",
                images:[
                  "https://cdn.room58.com/2023/01/10/4d2596f5203aae086db4ad02dd58ae5b_8d38a6da76a5a3c5.png",
                  "https://cdn.room58.com/2023/01/10/4d2596f5203aae086db4ad02dd58ae5b_8d38a6da76a5a3c5.png"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"320 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      battery:"5000 mah",
                  },
                  comments_review:[]
            
              },
            {
              id:6561515,
              name:"Motocicleta Honda 2021",
              sales:10,
              price:4556,
              review_number:4,
              average_review:"3",
              half_payment:"paypal",
              brand:"Honda",
              images:[
                "https://www.motonline.com.br/noticia/wp-content/uploads/2021/11/2021-rebel-500-gallery-05-2400xauto-800x420.jpg",
                "https://www.motonline.com.br/noticia/wp-content/uploads/2021/11/2021-rebel-500-gallery-05-2400xauto-800x420.jpg"
              ],
                details:{
                    manufactured:"Honda",
                    product_weight:"300g",
                    dimensions:"320 x 480",
                    Country_of_origin:"Corea",
                    color:"white",
                    memory:"",
                    special_characteristics:"Ninguna",
                    included_components:"",
                    battery:"5000 mah",
                },
                comments_review:[]
        
            },
            {
                id:65615159,
                name:"Motocicleta Honda 2021",
                sales:30,
                price:5556,
                review_number:2,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/10/moto-para-viajar-nova-honda-nt-1100-6.jpg",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/10/moto-para-viajar-nova-honda-nt-1100-6.jpg"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                      battery:"5000 mah"
                  },
                  comments_review:[]
            
            },
            {
                id:75651579,
                name:"Motocicleta Honda 2021",
                sales:5,
                price:10556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                  },
                  comments_review:[]
            },
            {
                id:95651579,
                name:"Motocicleta Honda 2021",
                sales:14,
                price:1056,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                  },
            
            },
            {
                id:88651579,
                name:"Motocicleta Honda 2021",
                sales:14,
                price:10056,
                review_number:0,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/08/honda-cb-200-x-1.png"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                  },
                  comments_review:[]
            },
            {
                id:75615159,
                name:"Motocicleta Honda 2021",
                sales:30,
                price:5556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Honda",
                images:[
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/10/moto-para-viajar-nova-honda-nt-1100-6.jpg",
                  "https://www.motonline.com.br/noticia/wp-content/uploads/2021/10/moto-para-viajar-nova-honda-nt-1100-6.jpg"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                  },
                  comments_review:[]
            },
            {
                id:75625159,
                name:"Yamaha Xtz 125cc 2023",
                sales:30,
                price:5556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Yamaha",
                images:[
                  "https://http2.mlstatic.com/D_NQ_NP_817737-MLV54151941646_032023-O.webp",
                  "https://http2.mlstatic.com/D_NQ_NP_817737-MLV54151941646_032023-O.webp"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                
                  },
                  comments_review:[]
            },
            {
                id:97777159,
                name:"Yamaha Xtz 125cc 2022",
                sales:30,
                price:6556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Yamaha",
                images:[
                  "https://http2.mlstatic.com/D_NQ_NP_2X_819508-MLV53688585552_022023-F.webp",
                  "https://http2.mlstatic.com/D_NQ_NP_2X_819508-MLV53688585552_022023-F.webp"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                
                  },
                  comments_review:[]
            },
            {
                id:77775159,
                name:"Yamaha Xtz 125cc 2022",
                sales:30,
                price:6556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Yamaha",
                images:[
                  "https://http2.mlstatic.com/D_NQ_NP_2X_819508-MLV53688585552_022023-F.webp",
                  "https://http2.mlstatic.com/D_NQ_NP_2X_819508-MLV53688585552_022023-F.webp"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                
                  },
                  comments_review:[]
            },
            {
                id:99665159,
                name:"Ducati Panigale V4 2022",
                sales:30,
                price:6556,
                review_number:4,
                average_review:"3",
                half_payment:"paypal",
                brand:"Ducati",
                images:[
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg",
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                
                  },
                  comments_review:[]
            },
            {
                id:99825188,
                name:"Ducati Panigale V4 2022",
                sales:20,
                price:6556,
                review_number:3,
                average_review:"3",
                half_payment:"paypal",
                brand:"Ducati",
                images:[
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg",
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                
                  },
                  comments_review:[]
            },
            {
                id:99825889,
                name:"Ducati Panigale V4 2020",
                sales:10,
                price:6556,
                review_number:2,
                average_review:"3",
                half_payment:"paypal",
                brand:"Ducati",
                images:[
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg",
                  "https://motos-b60.kxcdn.com/sites/default/files/ducati-panigale-v4-2022.jpg"
                ],
                  details:{
                      manufactured:"Honda",
                      product_weight:"300g",
                      dimensions:"620 x 480",
                      Country_of_origin:"Corea",
                      color:"white",
                      memory:"",
                      special_characteristics:"Ninguna",
                      included_components:"",
                
                  },
                  comments_review:[]
            },
        ]
    },
]


export {data};

