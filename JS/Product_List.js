const products = [
     // T-Shirts
     { id: 1, name: 'Men White Cotton Tee', price: 1499, category: 'T-Shirts', image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/626758/02/mod01/fnd/IND/fmt/png/DOWNTOWN-Relaxed-Fit-Unisex-Relaxed-Fit-Tee' },
     { id: 2, name: 'Women White Cotton Tee', price: 1499, category: 'T-Shirts', image: 'https://handcmediastorage.blob.core.windows.net/productimages/FP/FPPMA001-N01-130694-800px-1040px.jpg' },
     { id: 3, name: 'Graphic Printed Tee', price: 699, category: 'T-Shirts', image: 'https://images.bewakoof.com/t540/men-s-white-graphic-printed-t-shirt-541236-1662718510-2.jpg' },
     { id: 4, name: 'Oversized Retro Tee', price: 799, category: 'T-Shirts', image: 'https://www.caelumgreene.com/cdn/shop/files/Joah-Brown-Oversized-Vintage-Tee-Fog-Details-Front-2_800x.jpg?v=1700038077' },
     { id: 5, name: 'Color Block Tee', price: 649, category: 'T-Shirts', image: 'https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,w_800,c_scale/v1/NA/Style/ECOMM/X3RP22KC4M2-JBLK' },
     { id: 6, name: 'Tie-Dye Tee', price: 899, category: 'T-Shirts', image: 'https://i.pinimg.com/originals/b7/60/09/b76009c34a20a20c0a2fe521c1048f32.png' },
     { id: 7, name: 'Striped Casual Tee', price: 599, category: 'T-Shirts', image: 'https://i.pinimg.com/originals/53/8c/0e/538c0e2d92f138dc31a13b6dc2602fba.jpg' },
     { id: 8, name: 'Slim Fit Crew Neck Tee', price: 749, category: 'T-Shirts', image: 'https://i.pinimg.com/originals/ff/92/b8/ff92b80497a94498e1c14924deb338c1.jpg' },
     { id: 9, name: 'V-Neck Summer Tee', price: 549, category: 'T-Shirts', image: 'https://static.zara.net/photos/2023/V/0/1/p/4424/154/800/2/w/375/4424154800_2_1_1.jpg?ts=1671619743780' },
     { id: 10, name: 'Longline Urban Tee', price: 799, category: 'T-Shirts', image: 'https://i.pinimg.com/originals/60/2e/11/602e112fce3bd80eabc3853f5532f43b.jpg' },
     { id: 11, name: 'Pocketed Basic Tee', price: 499, category: 'T-Shirts', image: 'https://thedailylab.co/cdn/shop/files/Screenshot2023-06-02at3.19.48PM_1500x.png?v=1688442424' },
     { id: 12, name: 'Halloween Printed Tees', price: 1927, category: 'T-Shirts', image: 'https://i.etsystatic.com/44225587/r/il/603740/6322989657/il_1588xN.6322989657_3vrr.jpg' },
     { id: 13, name: 'Valentine’s Day Shirts', price: 999, category: 'T-Shirts', image: 'https://th.bing.com/th/id/OIP.2WppdrcL19narWELioGdngHaJ2?rs=1&pid=ImgDetMain' },
     { id: 14, name: 'Athletic Fit Tee', price: 2999, category: 'T-Shirts', image: 'https://cdn.shopify.com/s/files/1/1860/2387/files/Crew_Neck-type.jpg?v=1723010734' },

     // Shirts
     { id: 15, name: 'Slim Fit Formal Shirt', price: 2850, category: 'Shirts', image: 'https://images.hawesandcurtis.com/tr:q-80/SE/SEPMA021-G01-128612-800px-1040px.jpg' },
     { id: 16, name: 'Floral Print Casual Shirt', price: 849, category: 'Shirts', image: 'https://images.bestsellerclothing.in/data/vero-moda/26-apr-2023/224087303_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto&dpr=1.2' },
     { id: 17, name: 'Plaid Checkered Shirt', price: 749, category: 'Shirts', image: 'https://i.pinimg.com/originals/dc/90/39/dc9039ee1086fd9a4bf1af4ca2f039e0.jpg' },
     { id: 18, name: 'Denim Button-Up Shirt', price: 1299, category: 'Shirts', image: 'https://th.bing.com/th/id/OIP.lhKPDDnSg3RZ8CxgIYyC1AHaJ3?rs=1&pid=ImgDetMain' },
     { id: 19, name: 'Mandarin Collar Shirt', price: 899, category: 'Shirts', image: 'https://th.bing.com/th/id/OIP.fGInC1RnHHMB2f57LmqNJAHaJ3?rs=1&pid=ImgDetMain' },
     { id: 20, name: 'Short Sleeve Cuban Shirt', price: 799, category: 'Shirts', image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-men/default/dwf67a2697/3610563/3610563-01-2.jpg?sw=768&sh=1152&sm=fit' },
     { id: 175, name: 'Linen Summer Shirt', price: 1199, category: 'Shirts', image: 'https://th.bing.com/th/id/OIP.qAVHxaRHIxWQGGvbH1F8lQHaLH?rs=1&pid=ImgDetMain' },
     { id: 179, name: 'Men Satin Shirt', price: 1599, category: 'Shirts', image: 'https://5.imimg.com/data5/ECOM/Default/2023/5/311730980/PK/AH/RF/8135616/ri38702-3-1000x1000.webp' },
     { id: 230, name: 'Women Satin Shirt', price: 1599, category: 'Shirts', image: 'https://5.imimg.com/data5/SELLER/Default/2021/11/GB/PL/XH/141441699/women-party-wear-shirt-1000x1000.jpg' },
     { id: 231, name: 'Pinstriped Office Shirt', price: 1049, category: 'Shirts', image: 'https://welbornecorporateuniforms.com.au/wp-content/uploads/2019/02/JK_462_Gunmetal-468x610.jpg' },
     { id: 234, name: 'Ombre Dyed Shirt', price: 1099, category: 'Shirts', image: 'https://www.jiomart.com/images/product/500x630/469369925_bluewhite/ombre-dyed-slim-fit-shirt-model-469369925_bluewhite-0-202301081734.jpg' },
         
     //Jeans
     { id: 21, name: 'Skinny Fit Stretch Jeans', price: 1399, category: 'Jeans', image: 'https://i2.wp.com/thejeansblog.com/wp-content/uploads/2015/12/topman-spray-on-skinny-jeans.jpg?resize=800%2C1087&ssl=1' },
     { id: 22, name: 'Ripped Distressed Jeans', price: 1499, category: 'Jeans', image: 'https://d1it09c4puycyh.cloudfront.net/920x1300/catalog/product/8/9/89WG-10193-BLUE_2.jpg' },
     { id: 23, name: 'High-Waisted Mom Jeans', price: 1299, category: 'Jeans', image: 'https://images.bestsellerclothing.in/data/vero-moda/20-sep-2024/173691101_g4.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto&dpr=1.2' },
     { id: 24, name: 'Slim Fit Black Jeans', price: 1399, category: 'Jeans', image: 'https://cottonking.com/cdn/shop/files/D42930-1_88013664-d1d4-487d-8a96-1e9c96c5f376.jpg?v=1706687011' },
     { id: 25, name: 'Boyfriend Relaxed Jeans', price: 1499, category: 'Jeans', image: 'https://opt.moovweb.net/?quality=90&img=https%3A%2F%2Fcontent.jjill.com%2Fproduct%2F273701%2F273701_6GM_SIDE.jpg%3Fimpolicy%3Dpdp-main' },
     { id: 26, name: 'Straight-Leg Vintage Jeans', price: 1599, category: 'Jeans', image: 'https://theclothingfactory.in/cdn/shop/files/TCF17-10-2472966CINES092.jpg?v=1730703048' },
     { id: 27, name: 'Bootcut Blue Jeans', price: 1299, category: 'Jeans', image: 'https://images.bestsellerclothing.in/data/JJ/13-feb-2024/116372301_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto' },
     { id: 28, name: 'Cropped Ankle Jeans', price: 1199, category: 'Jeans', image: 'https://www.globalrepublic.in/cdn/shop/products/1_1_7a938ceb-3c52-4331-92ec-9f243114a54c.webp?v=1716546471' },
     { id: 29, name: 'Flare Stretchable Jeans', price: 1699, category: 'Jeans', image: 'https://www.globalrepublic.in/cdn/shop/products/ML08-2307-LT-BLUE_1.jpg?v=1716538846' },
     { id: 30, name: 'Acid-Wash Skinny Jeans', price: 1399, category: 'Jeans', image: 'http://demo.quemalabs.com/shopapp/fashion/wp-content/uploads/sites/3/2015/08/image1xxl-102-1.jpg' },

     // Trousers
     { id: 31, name: 'Slim-Fit Chinos', price: 1299, category: 'Trousers', image: 'https://www.urbanofashion.com/cdn/shop/files/chino-cream_-_02.png?v=1725765209' },
     { id: 32, name: 'Cargo Utility Pants', price: 1499, category: 'Trousers', image: 'https://saintjones.in/cdn/shop/files/Baggy_Utility_Pants-10_pockets_Light_Grey_-_St.Jones-3829172.jpg?v=1727176337' },
     { id: 33, name: 'Wide-Leg Palazzo Trousers', price: 1399, category: 'Trousers', image: 'https://twinbirds.co.in/cdn/shop/products/1801-WIDELEGPALAZZO-SWEETCORN.jpg?v=1681808189&width=1090' },
     { id: 34, name: 'High-Waisted Paperbag Pants', price: 1499, category: 'Trousers', image: 'https://www.rw-co.com/on/demandware.static/-/Sites-Rwco-master-catalog/default/dwe615ecdb/images/xlarge/rwco_460082_275_0.jpg' },
     { id: 35, name: 'Cropped Ankle Trousers', price: 1299, category: 'Trousers', image: 'https://imgshopimages.lbb.in/catalog/product/r/p/rpat002-pic014.jpg' },
     { id: 36, name: 'Pleated Formal Pants', price: 1599, category: 'Trousers', image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/28542052/2024/3/27/73362fc9-a5f3-4662-92e7-18401e43be261711548012836DENNISONMenSmartTaperedFitEasyWashPleatedTrousers1.jpg' },
     { id: 37, name: 'Jogger-Style Trousers', price: 1199, category: 'Trousers', image: 'https://images.meesho.com/images/products/435069828/eynit_512.webp' },
     { id: 38, name: 'Stretchable Corduroy Pants', price: 1499, category: 'Trousers', image: 'https://bananaclub.co.in/cdn/shop/files/TanCorduroyPants_1_04294743-1fd3-43a9-9c18-ed1e415fff04.jpg?v=1727528352' },
     { id: 39, name: 'Textured Linen Pants', price: 1399, category: 'Trousers', image: 'https://www.ottwaythelabel.com/cdn/shop/products/brownpantsmen-2.jpg?v=1669233532&width=1600' },
     { id: 40, name: 'Tailored Workwear Pants', price: 1699, category: 'Trousers', image: 'https://cdn.shopify.com/s/files/1/0423/3576/4634/files/front_view_close-up_of_Pant_Project_olive_green_stretchable_trousers_310x.jpg?v=1726636678' },

     // Jackets
     { id: 41, name: 'Classic Denim Jacket', price: 1999, category: 'Jackets', image: '' },
     { id: 42, name: 'Faux Leather Biker Jacket', price: 2999, category: 'Jackets', image: '' },
     { id: 43, name: 'Quilted Winter Puffer Jacket', price: 2499, category: 'Jackets', image: '' },
     { id: 44, name: 'Oversized Hooded Jacket', price: 2299, category: 'Jackets', image: '' },
     { id: 45, name: 'Cropped Bomber Jacket', price: 1799, category: 'Jackets', image: '' },
     { id: 46, name: 'Longline Trench Coat', price: 3499, category: 'Jackets', image: '' },
     { id: 47, name: 'Fleece Zip-Up Jacket', price: 1599, category: 'Jackets', image: '' },
     { id: 48, name: 'Reversible Casual Jacket', price: 1999, category: 'Jackets', image: '' },
     { id: 49, name: 'Varsity Letterman Jacket', price: 1899, category: 'Jackets', image: '' },
     { id: 50, name: 'Wool-Blend Double-Breasted Coat', price: 3999, category: 'Jackets', image: '' },

     // Hoodies & Sweatshirts
     { id: 51, name: 'Pullover Fleece Hoodie', price: 1299, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 52, name: 'Zip-Up Sports Hoodie', price: 1499, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 53, name: 'Oversized Graphic Hoodie', price: 1599, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 54, name: 'Color Block Hoodie', price: 1399, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 55, name: 'Cropped Sweatshirt', price: 1199, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 56, name: 'Ribbed Hem Crewneck Sweatshirt', price: 1299, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 57, name: 'Tie-Dye Pullover Hoodie', price: 1499, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 58, name: 'Embroidered Logo Sweatshirt', price: 1599, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 59, name: 'Kangaroo Pocket Hoodie', price: 1499, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 60, name: 'Thermal Knit Hoodie', price: 1699, category: 'Hoodies & Sweatshirts', image: '' },
     { id: 180, name: 'Spring Pastel Hoodies', price: 1599, category: 'Hoodies & Sweatshirts', image: '' },

     // Shorts
     { id: 81, name: 'Classic Denim Shorts', price: 999, category: 'Shorts', image: '' },
     { id: 82, name: 'High-Waisted Mom Shorts', price: 1199, category: 'Shorts', image: '' },
     { id: 83, name: 'Linen Drawstring Shorts', price: 899, category: 'Shorts', image: '' },
     { id: 84, name: 'Athletic Track Shorts', price: 799, category: 'Shorts', image: '' },
     { id: 85, name: 'Paperbag Belted Shorts', price: 1099, category: 'Shorts', image: '' },
     { id: 86, name: 'Pleated Formal Shorts', price: 1299, category: 'Shorts', image: '' },
     { id: 87, name: 'Cuffed Roll-Up Shorts', price: 999, category: 'Shorts', image: '' },
     { id: 88, name: 'Ripped Casual Shorts', price: 1199, category: 'Shorts', image: '' },
     { id: 89, name: 'Utility Cargo Shorts', price: 1299, category: 'Shorts', image: '' },
     { id: 90, name: 'Satin Lounge Shorts', price: 999, category: 'Shorts', image: '' },

     // Activewear
     { id: 101, name: 'Moisture-Wicking Tank Top', price: 799, category: 'Activewear', image: '' },
     { id: 102, name: 'Compression Fit Leggings', price: 1299, category: 'Activewear', image: '' },
     { id: 103, name: 'Mesh Insert Sports Bra', price: 999, category: 'Activewear', image: '' },
     { id: 104, name: 'Lightweight Running Shorts', price: 699, category: 'Activewear', image: '' },
     { id: 105, name: 'Fleece Lined Track Pants', price: 1499, category: 'Activewear', image: '' },
     { id: 106, name: 'Reflective Windbreaker', price: 1999, category: 'Activewear', image: '' },
     { id: 107, name: 'High-Impact Sports Bra', price: 1299, category: 'Activewear', image: '' },
     { id: 108, name: 'Ribbed Yoga Set', price: 1999, category: 'Activewear', image: '' },
     { id: 109, name: 'Seamless Workout Tee', price: 899, category: 'Activewear', image: '' },
     { id: 110, name: 'Gym Stringer Vest', price: 699, category: 'Activewear', image: '' },
     { id: 176, name: 'Patriotic Print Tops', price: 1099, category: 'Activewear', image: '' },

     // Sleepwear
     { id: 111, name: 'Cotton Pajama Set', price: 1299, category: 'Sleepwear', image: '' },
     { id: 112, name: 'Satin Nightgown', price: 1999, category: 'Sleepwear', image: '' },
     { id: 113, name: 'Flannel Sleep Shirt', price: 999, category: 'Sleepwear', image: '' },
     { id: 114, name: 'Fleece Lounge Pants', price: 1199, category: 'Sleepwear', image: '' },
     { id: 115, name: 'Silk Camisole Set', price: 2499, category: 'Sleepwear', image: '' },
     { id: 116, name: 'Graphic Print Night Tee', price: 899, category: 'Sleepwear', image: '' },
     { id: 117, name: 'Short-Sleeve Pajama Dress', price: 1399, category: 'Sleepwear', image: '' },
     { id: 118, name: 'Velvet Robe Set', price: 1799, category: 'Sleepwear', image: '' },
     { id: 119, name: 'Button-Up Pajama Shirt', price: 1099, category: 'Sleepwear', image: '' },
     { id: 120, name: 'Thermal Long Johns', price: 1299, category: 'Sleepwear', image: '' },


     // Winterwear
     { id: 131, name: 'Cable Knit Sweater', price: 1499, category: 'Winterwear', image: '' },
     { id: 132, name: 'Turtleneck Pullover', price: 1599, category: 'Winterwear', image: '' },
     { id: 133, name: 'Woolen Overcoat', price: 3499, category: 'Winterwear', image: '' },
     { id: 134, name: 'Sherpa Lined Hoodie', price: 2299, category: 'Winterwear', image: '' },
     { id: 135, name: 'Knitted Cardigan', price: 1899, category: 'Winterwear', image: '' },
     { id: 136, name: 'Fleece Joggers', price: 1399, category: 'Winterwear', image: '' },
     { id: 137, name: 'Chunky Oversized Scarf', price: 899, category: 'Winterwear', image: '' },
     { id: 138, name: 'Beanie and Gloves Set', price: 999, category: 'Winterwear', image: '' },
     { id: 139, name: 'Fur-Lined Ankle Boots', price: 2499, category: 'Winterwear', image: '' },
     { id: 140, name: 'Thermal Base Layer', price: 1299, category: 'Winterwear', image: '' },
     { id: 171, name: 'Christmas Themed Sweaters', price: 1799, category: 'Winterwear', image: '' },
     { id: 232, name: 'Halloween Sweaters', price: 4999, category: 'Winterwear', image: 'https://cdn.shopify.com/s/files/1/0826/1673/products/HalloweenSweater-FallSweatshirt-HalloQueenSweatshirt-BrightandCatchy-874102_1024x1024.jpg?v=1662188461' },

     // Accessories
     { id: 141, name: 'Leather Crossbody Bag', price: 1999, category: 'Accessories', image: '' },
     { id: 142, name: 'Fedora Hat', price: 899, category: 'Accessories', image: '' },
     { id: 143, name: 'Chunky Knit Scarf', price: 699, category: 'Accessories', image: '' },
     { id: 144, name: 'Metal Frame Sunglasses', price: 1499, category: 'Accessories', image: '' },
     { id: 145, name: 'Minimalist Gold Necklace', price: 1299, category: 'Accessories', image: '' },
     { id: 146, name: 'Studded Leather Belt', price: 799, category: 'Accessories', image: '' },
     { id: 147, name: 'Faux Leather Wallet', price: 999, category: 'Accessories', image: '' },
     { id: 148, name: 'Hoop Earrings Set', price: 699, category: 'Accessories', image: '' },
     { id: 249, name: 'Chain Earrings Set', price: 899, category: 'Accessories', image: 'https://img.east2global.com/imgs/goods/2023/04/19/dfb53c70-64e9-4f77-b6df-6c17d27897ce.jpg' },
     { id: 150, name: 'Crystal Embellished Hair Clip', price: 599, category: 'Accessories', image: '' },
     { id: 235, name: 'Classic Analog Watch', price: 2499, category: 'Accessories', image: 'https://th.bing.com/th/id/OIP.xNRabvaOMeyfPQudXlZxFQHaHa?rs=1&pid=ImgDetMain' },
     { id: 166, name: 'Crystal Embellished Clutch', price: 1599, category: 'Accessories', image: 'https://cdnc.lystit.com/photos/b044-2014/04/16/gedebe-green-crystal-embellished-clutch-product-1-19250465-2-204529044-normal.jpeg' },
     { id: 168, name: 'Silk Pocket Square', price: 499, category: 'Accessories', image: 'https://www.studiosuits.com/cdn/shop/files/harristweedscotgreensuitlok_3_1445x.jpg?v=1703054025' },
     { id: 169, name: 'Cocktail Party Necklace', price: 899, category: 'Accessories', image: 'https://blingvine.com/cdn/shop/articles/katherine_pearl_necklace_set_1500x.JPG?v=1636563598' },
     { id: 172, name: 'Summer Straw Hats', price: 899, category: 'Accessories', image: 'https://i.pinimg.com/736x/2b/d1/45/2bd145aa8d7590626ba1ac7203883dd6.jpg' },

     // Footwear
     { id: 151, name: 'White Leather Sneakers', price: 2999, category: 'Footwear', image: '' },
     { id: 152, name: 'Suede Loafers', price: 2199, category: 'Footwear', image: '' },
     { id: 153, name: 'Chunky Platform Boots', price: 3499, category: 'Footwear', image: '' },
     { id: 154, name: 'Slip-On Canvas Shoes', price: 1299, category: 'Footwear', image: '' },
     { id: 155, name: 'Open-Toe Block Heels', price: 1799, category: 'Footwear', image: '' },
     { id: 156, name: 'Flip-Flop Sandals', price: 499, category: 'Footwear', image: '' },
     { id: 157, name: 'Strappy Gladiator Flats', price: 1299, category: 'Footwear', image: '' },
     { id: 158, name: 'Embellished Pumps', price: 2399, category: 'Footwear', image: '' },
     { id: 159, name: 'Lace-Up Hiking Boots', price: 2799, category: 'Footwear', image: '' },
     { id: 160, name: 'Knitted Slip-On Shoes', price: 1499, category: 'Footwear', image: '' },
     { id: 170, name: 'Stiletto Heels', price: 2599, category: 'Footwear', image: 'https://i.pinimg.com/originals/31/6e/67/316e677a11e40837bdf200bbb74422eb.jpg' },
     { id: 174, name: 'Fall Leather Boots', price: 2999, category: 'Footwear', image: '' },
 
     //Blazer
     { id: 162, name: 'Velvet Blazer', price: 2499, category: 'Coat & Blazers', image: 'https://i.pinimg.com/originals/35/02/b6/3502b66530ca528fcdbe843feddc9233.jpg' },
     { id: 173, name: 'Rainproof Trench Coats', price: 2499, category: 'Coat & Blazers', image: 'https://i2.wp.com/www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw87995f50/hi-res/OUR0027LST_MODEL_FRONT.jpg?strip=all' },
     { id: 189, name: 'Classic Black Blazer', price: 3299, category: 'Coat & Blazers', image: 'https://pictures.kartmax.in/live/sites/9s145MyZrWdIAwpU0JYS/product-images/classic_black_texture_blazer_1698409701as2787948_3.jpg' },
     { id: 190, name: 'Slim Fit Grey Blazer', price: 2799, category: 'Coat & Blazers', image: 'https://coolcolors.in/cdn/shop/files/BZ122-3_4.jpg?v=1708522662&width=1200' },
     { id: 191, name: 'Formal Navy Blazer', price: 6999, category: 'Coat & Blazers', image: 'https://fashioncurves.in//storage/media/Jd1G2CnrhdGbpVST5wy536AAWr82ggdHRuMcj4cT.jpg' },
     { id: 192, name: 'Wool Trench Coat', price: 4599, category: 'Coat & Blazers', image: 'https://img.joomcdn.net/42515f71c189012aed004b865a79e8c123152a97_original.jpeg' },
     { id: 193, name: 'Checkered Blazer', price: 2499, category: 'Coat & Blazers', image: 'https://www.bonsoir.co.in/cdn/shop/products/Brown_Check-Tweed-Blazer.jpg?crop=center&height=1200&v=1730118578&width=823' },
     { id: 194, name: 'Double-Breasted Trench Coat', price: 3999, category: 'Coat & Blazers', image: 'https://cdn18.nnnow.com/web-images/medium/styles/PNPYRJGB2S2/1703575970169/4.jpg' },
     { id: 196, name: 'Casual Linen Blazer', price: 3499, category: 'Coat & Blazers', image: 'https://i.etsystatic.com/6811060/r/il/f0a548/6152353021/il_1588xN.6152353021_2ovc.jpg' },
     { id: 195, name: 'Charcoal Textured Blazer', price: 4695, category: 'Coat & Blazers', image: 'https://assets.ajio.com/medias/sys_master/root/20240718/M6zU/669833331d763220fada9c99/-473Wx593H-461622460-grey-MODEL.jpg' },

     //Gown
     { id: 163, name: 'Satin Maxi Gown', price: 3499, category: 'Gown', image: 'https://i.etsystatic.com/18771955/r/il/5d4471/3111873082/il_1140xN.3111873082_igq5.jpg' },
     { id: 197, name: 'Off-Shoulder Evening Gown', price: 4799, category: 'Gown', image: 'https://www.umelondon.com/cdn/shop/products/strapless-floral-ball-gown-953095.jpg?v=1698168074&width=800' },
     { id: 201, name: 'Velvet Ball Gown', price: 5599, category: 'Gown', image: 'https://i.pinimg.com/736x/9e/c6/0d/9ec60d68c30a188c9b8b9cd5d83833ab.jpg' },
     { id: 202, name: 'A-Line Chiffon Gown', price: 4199, category: 'Gown', image: 'https://i.pinimg.com/736x/db/7c/f9/db7cf98259678a5a4f6c9fe7d1de359c.jpg' },
     { id: 203, name: 'Mermaid Fit Gown', price: 4899, category: 'Gown', image: 'https://alyceparis.com/cdn/shop/products/7055_IVORY-SILVER_1_2000x.jpg?v=1668880791' },
     { id: 204, name: 'Sequin Lycra Gown', price: 5699, category: 'Gown', image: 'https://www.koskii.com/cdn/shop/files/koskii-gold-sequins-lycra-designer-gown-gnrm0036003_gold_1_1_720x.jpg?v=1722854710' },
     { id: 205, name: 'Lace Bridal Gown', price: 9999, category: 'Gown', image: 'https://dy9ihb9itgy3g.cloudfront.net/products/11865/y3190/y3190_ivory-honey__.740.webp' },
     { id: 206, name: 'Ruffled Gown with Train', price: 6399, category: 'Gown', image: 'https://i.pinimg.com/736x/35/13/7a/35137aef3ed4100989ed07c90a0299ae.jpg' },
     { id: 207, name: 'High-Slit Evening Gown', price: 4299, category: 'Gown', image: 'https://diggzprom.com/cdn/shop/files/0012656_f1468_530x@2x.jpg?v=1726064914' },
     { id: 208, name: 'Floral Embroidered Gown', price: 4999, category: 'Gown', image: 'http://goddiva.co.uk/cdn/shop/products/rzEQqaHF-15217.jpg?v=1693909944' },

     // Ethnic Wear
     { id: 91, name: 'Embroidered Kurta Set', price: 2499, category: 'Ethnic Wear', image: 'https://th.bing.com/th/id/OIP.kiUNZvLhlwMMMKSfIUErBAHaLH?w=640&h=960&rs=1&pid=ImgDetMain' },
     { id: 209, name: 'Silk Dhoti Set', price: 3499, category: 'Ethnic Wear', image: 'https://th.bing.com/th/id/OIP.cJ2r9Ktrk-GagGj1ln1iGQHaLH?rs=1&pid=ImgDetMain' },
     { id: 229, name: 'Green Sequined Layered Kurta', price: 3199, category: 'Ethnic Wear', image: 'https://absolutelydesi.com/wp-content/uploads/2023/05/VASTRAMAY-Men-s-Green-Sequined-Layered-Kurta-1.jpg' },
     { id: 92, name: 'Anarkali Gown', price: 2999, category: 'Ethnic Wear', image: 'https://i.pinimg.com/originals/e3/b9/e0/e3b9e0a0b5ba838bab755e345587fb96.jpg' },
     { id: 210, name: 'Printed Pathani Suit', price: 2699, category: 'Ethnic Wear', image: 'https://www.parivarceremony.com/media/catalog/product/cache/62408a38a401bb86dbe3ed2f017b539f/p/1/p1039mw53.jpg' },
     { id: 93, name: 'Cotton Printed Saree', price: 1799, category: 'Ethnic Wear', image: 'https://cdn.sareeka.com/image/cache/data2021/cotton-floral-print-printed-saree-185662-1000x1375.jpg' },
     { id: 211, name: 'Classic Sherwani', price: 5999, category: 'Ethnic Wear', image: 'https://th.bing.com/th/id/OIP.n2HzHJGv6sOYCLqtTUufYwHaKL?w=1000&h=1375&rs=1&pid=ImgDetMain' },
     { id: 94, name: 'Banarasi Silk Dupatta', price: 1499, category: 'Ethnic Wear', image: 'https://www.dupattabazaar.com/cdn/shop/files/DB3839BOG_4_1024x1024.jpg?v=1687778202' },
     { id: 99, name: 'Jacket Style Sherwani', price: 4999, category: 'Ethnic Wear', image: 'https://manyavar.scene7.com/is/image/manyavar/Manyavar2470_05-12-2022-08-05?wid=1244' },
     { id: 95, name: 'Brocade Lehenga Set', price: 3999, category: 'Ethnic Wear', image: 'https://i.pinimg.com/originals/c6/ca/b2/c6cab2afc1c2e898440d64b033ebb71b.jpg' },
     { id: 212, name: 'Cotton Asymmetric Kurta', price: 2199, category: 'Ethnic Wear', image: 'https://th.bing.com/th/id/OIP.sWtn-MdOxk20WoGen6nrBgHaLH?w=1500&h=2250&rs=1&pid=ImgDetMain' },
     { id: 96, name: 'Kurta with Churidar Pants', price: 2299, category: 'Ethnic Wear', image: 'https://www.biba.in/on/demandware.static/-/Sites-biba-product-catalog/default/dw13be5abb/images/aw23/skdasrtd2802eaw23turq_7.jpg' },
     { id: 215, name: 'Traditional Angrakha', price: 3299, category: 'Ethnic Wear', image: 'https://th.bing.com/th/id/OIP.sHjRWzM-VnoTW7-h_lXg5AHaLF?rs=1&pid=ImgDetMain' },
     { id: 97, name: 'Angrakha Style Tunic', price: 1899, category: 'Ethnic Wear', image: 'https://i.etsystatic.com/27398764/r/il/7d4237/3770486273/il_794xN.3770486273_evvk.jpg' },
     { id: 214, name: 'Linen Kurta Pajama', price: 1999, category: 'Ethnic Wear', image: 'https://www.rajwadi.com/image/cache/data/linen-fabric-kurta-pajama-18286-800x1100.jpg' },
     { id: 98, name: 'Floral Palazzo Suit', price: 2599, category: 'Ethnic Wear', image: 'https://cdn.shopify.com/s/files/1/0182/1471/5470/products/SAJAWAT-735A_650x.jpg?v=1571717774' },
     { id: 213, name: 'Velvet Embroidered Sherwani', price: 7999, category: 'Ethnic Wear', image: 'https://manyavar.scene7.com/is/image/manyavar/I02_IMGL8297_16-02-2022-16-40:650x900' },
     { id: 100, name: 'Handwoven Jute Saree', price: 1999, category: 'Ethnic Wear', image: 'https://assets0.mirraw.com/images/6822148/image_zoom.jpeg?1551878677' },
     { id: 216, name: 'Kasbah Kurta with Stole', price: 2399, category: 'Ethnic Wear', image: 'https://i.pinimg.com/736x/1f/cd/64/1fcd64eb00c2f45be5382ebc44c59f52.jpg' },
     { id: 100, name: 'Long Kurti', price: 1599, category: 'Ethnic Wear', image: 'https://i.pinimg.com/originals/96/5f/67/965f67b1596b88899e9df7b7c409e52a.jpg' },
     { id: 217, name: 'Kashmiri Embroidered Kurta', price: 3599, category: 'Ethnic Wear', image: 'https://th.bing.com/th/id/OIP.Lpa7-Y8Ahw3mp43hfGYeFgHaLH?w=1500&h=2250&rs=1&pid=ImgDetMain' },
     
     //Swimwear
     { id: 121, name: 'High-Waisted Bikini Set', price: 1499, category: 'Swimwear', image: 'https://thewearness.com/cdn/shop/products/197highwaistbikiniblack_1024x1024.jpg?v=1681403178' },
     { id: 122, name: 'One-Shoulder Swimsuit', price: 1999, category: 'Swimwear', image: 'https://images-static.nykaa.com/media/catalog/product/5/2/527f8a1NYKDB00014986_BLACK_03.jpg' },
     { id: 218, name: 'Quick-Dry Swim Shorts', price: 999, category: 'Swimwear', image: 'https://yooto.online/cdn/shop/products/35baca255f325061dd38129858de2928_307802ac-1515-4b5c-87ef-c871ba9547e2_800x800_crop_center@2x.jpg?v=1709456668' },
     { id: 123, name: 'Mesh Panel Monokini', price: 1799, category: 'Swimwear', image: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2020/07/14/source-img/20200714201418_5f0da19acb350.jpg?impolicy=high' },
     { id: 219, name: 'Striped Board Shorts', price: 1099, category: 'Swimwear', image: 'https://m.media-amazon.com/images/I/9137xY-s2qL._AC_SY879_.jpg' },
     { id: 124, name: 'Board Shorts', price: 999, category: 'Swimwear', image: 'https://www.animal.co.uk/cdn/shop/files/053638_bla_animal_brett_recycled_mens_boardshorts_anl_ecom_lifestyle_ss23_01_696x.jpg?v=1692271176' },
     { id: 125, name: 'Tankini Top and Bottom', price: 1599, category: 'Swimwear', image: 'https://d1flfk77wl2xk4.cloudfront.net/Assets/24/409/XXL_p0209740924.jpg' },
     { id: 126, name: 'Crochet Beach Cover-Up', price: 1299, category: 'Swimwear', image: 'https://www.thebeachcompany.in/cdn/shop/files/Blue_1_800x.jpg?v=1717138745' },
     { id: 220, name: 'Printed Swim Trunks', price: 899, category: 'Swimwear', image: 'https://www.thebeachcompany.in/cdn/shop/files/SD_03_T28_7994M_E4_X_EC_1_800x.jpg?v=1686742418' },
     { id: 127, name: 'Racerback Swim Dress', price: 1899, category: 'Swimwear', image: 'https://m.media-amazon.com/images/I/719AwTDmo9L._AC_SY741_.jpg' },
     { id: 221, name: 'Colorblock Swim Briefs', price: 299, category: 'Swimwear', image: 'https://www.internationaljock.com/v3/prld.xlg?partno=78969&width=498&view=img1' },
     { id: 128, name: 'Cut-Out Swimsuit', price: 1699, category: 'Swimwear', image: 'https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/707139s.jpg' },
     { id: 129, name: 'Swim Trunks', price: 899, category: 'Swimwear', image: 'https://www.shoplasc.com/v3/prld.xlg?partno=17127&width=498&view=img1' },
     { id: 222, name: 'Tropical Print Swimwear', price: 999, category: 'Swimwear', image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/408376898/HZ/QK/WH/6641902/3-pcs-swim-curve-plus-tropical-print-push-up-bikini-swimsuit-with-shrug-1000x1000.jpg' },
     { id: 130, name: 'Bandeau Bikini Top', price: 1199, category: 'Swimwear', image: 'https://cdnd.lystit.com/photos/2012/03/08/seafolly-orchid-seafolly-tea-rose-long-line-bandeau-bikini-top-product-1-3031247-636526010.jpeg' },
     
     // Dresses
     { id: 61, name: 'Floral Maxi Dress', price: 1799, category: 'Dresses', image: 'https://i.pinimg.com/originals/6b/78/73/6b7873b3f0f2d21e4676ca0ddb0996ee.jpg' },
     { id: 223, name: 'Long Linen Robe', price: 9297, category: 'Dresses', image: 'https://i.etsystatic.com/14068707/r/il/5b5b8c/2587363438/il_1588xN.2587363438_6sqg.jpg' },
     { id: 62, name: 'Satin Slip Dress', price: 1999, category: 'Dresses', image: 'https://i.pinimg.com/originals/84/d4/cd/84d4cdacaf26844ff01b9ce87abd674f.jpg' },
     { id: 63, name: 'Off-Shoulder Cocktail Dress', price: 2499, category: 'Dresses', image: 'https://th.bing.com/th/id/OIP.ADPfT4X3ERh-YCtfW-8G2QHaLH?rs=1&pid=ImgDetMain' },
     { id: 64, name: 'Bodycon Evening Dress', price: 2299, category: 'Dresses', image: 'https://th.bing.com/th/id/OIP.BYDw8l7InUQH5ylRaEFvOgHaJ4?rs=1&pid=ImgDetMain' },
     { id: 224, name: 'Kimono Style Robe', price: 2499, category: 'Dresses', image: 'https://i.shgcdn.com/9026793a-16c7-40d7-af8e-9d7bdf19756a/-/format/auto/-/preview/3000x3000/-/quality/lighter/' },
     { id: 65, name: 'Puff-Sleeve Mini Dress', price: 1599, category: 'Dresses', image: 'https://images.urbndata.com/is/image/Anthropologie/4130729390008_049_b?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=640' },
     { id: 225, name: 'Longline Shirt Dress', price: 1799, category: 'Dresses', image: 'https://www.andindia.com/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_ANDIndia/default/dw16514117/images/hires/SS22/AND-S24AV193TCP-BLACK-(7)NEW.jpg?sw=1300&sh=1950&sm=fit' },
     { id: 66, name: 'Wrap Tie-Waist Dress', price: 1899, category: 'Dresses', image: 'https://i.pinimg.com/originals/9e/23/c6/9e23c687285eba5a93f67037feafae60.jpg' },
     { id: 67, name: 'Lace A-Line Dress', price: 2599, category: 'Dresses', image: 'https://th.bing.com/th/id/OIP.fZzEAVUSR-26r5lVRiTazQAAAA?rs=1&pid=ImgDetMain' },
     { id: 68, name: 'Denim Shirt Dress', price: 1799, category: 'Dresses', image: 'https://i.pinimg.com/originals/a2/21/e1/a221e1cafbc9c06d4e4943a4555cd1a5.jpg' },
     { id: 226, name: 'Wrap-Style Tunic', price: 6990, category: 'Dresses', image: 'https://www.globaldesi.in/dw/image/v2/BGCX_PRD/on/demandware.static/-/Sites-masterCatalog_GD/default/dwb2255b45/images/hires/SS22/GD-F24R182P-NAVY%20(18).jpg?sw=1300&sh=1950&sm=fit' },
     { id: 69, name: 'Pleated Midi Dress', price: 2099, category: 'Dresses', image: 'https://cdnd.lystit.com/photos/ad12-2016/03/15/topshop-dusty-pink-metallic-lame-pleated-midi-dress-pink-product-4-441986367-normal.jpeg' },
     { id: 70, name: 'Boho Style Tiered Dress', price: 1699, category: 'Dresses', image: 'https://shop.gabrielleparker.com/wp-content/uploads/2022/09/Boho-Tiered-dress-in-Ginger-Gold-mix-2-scaled.jpg' },
     { id: 227, name: 'Linen Tunic Kaftan Shirt', price: 9999, category: 'Dresses', image: 'https://i.etsystatic.com/15295496/r/il/0f6a1d/1346833708/il_1588xN.1346833708_ilmj.jpg' }, 
     { id: 161, name: 'Sequined Evening Dress', price: 3999, category: 'Dresses', image: 'https://images-na.ssl-images-amazon.com/images/I/81uU6X3LvDL.jpg' },
     { id: 164, name: 'Glitter Bodycon Dress', price: 2199, category: 'Dresses', image: 'https://www.lulus.com/images/product/xlarge/7737761_1591336.jpg?w=560' },
     { id: 227, name: 'Linen Tunic Kaftan Shirt', price: 9999, category: 'Dresses', image: 'https://i.etsystatic.com/15295496/r/il/0f6a1d/1346833708/il_1588xN.1346833708_ilmj.jpg' }, 
     { id: 228, name: 'Mandarin Collar Kurta', price: 1599, category: 'Dresses', image: 'https://m.media-amazon.com/images/I/61mWxoaeC7L._SY879_.jpg' },
     { id: 167, name: 'Chiffon Wrap Dress', price: 1799, category: 'Dresses', image: 'https://www.jasminebridal.com/productimg/bridesmaid-dresses-B233054-F.jpg' },
     { id: 177, name: 'Floral Sundresses', price: 1499, category: 'Dresses', image: 'https://i.etsystatic.com/28580130/r/il/c78665/3229004528/il_1588xN.3229004528_rgyz.jpg' },
     { id: 178, name: 'New Year’s Eve Dresses', price: 2499, category: 'Dresses', image: 'https://www.fashiongonerogue.com/wp-content/uploads/2023/11/Night-Club-Dress-New-Years-Eve-Outfit-Anthropologie.jpg' },
     { id: 229, name: 'Fleece Checked Dressing Gown', price: 1190, category: 'Dresses', image: 'https://assets.digitalcontent.marksandspencer.app/image/upload/w_1008,h_1319,q_auto,f_auto,e_sharpen/SD_03_T07_6748_J4_X_EC_0' },
     { id: 185, name: 'Neckline Ruched Midi Dress', price: 1999, category:'Dresses', image:'https://dtdz5ym1pqo86.cloudfront.net/sites/files/mikayla/images/products/202401/dsc00187-enhanced-nr.jpg'},
     { id: 186, name: 'Long Sleeve Midi Dress', price: 1999, category:'Dresses', image:'https://shop.gabrielleparker.com/wp-content/uploads/2022/11/HOLLY-DRESS-GOLD-FLOWER-BLACK-SIDE-FULL-1024x1536.jpg'},
     { id: 187, name: 'Boho Style Maxi Dress', price: 1899, category: 'Dresses', image: 'https://www.lulus.com/images/product/xlarge/5333796_978262.jpg?w=560' },
     { id: 188, name: 'Net A-Line Wedding Dress', price: 2999, category: 'Dresses', image: 'https://www.jasminebridal.com/productimg/bridal-dresses-F211011-F.jpg' },
     { id: 233, name: 'Halloween Dress', price: 1999, category: 'Dresses', image: 'https://www.refinery29.com/images/10126773.png?auto=webp&width=1440&height=2160&quality=85&crop=2:3' },

     // Skirts
     { id: 71, name: 'High-Waist Pencil Skirt', price: 1299, category: 'Skirts', image: 'https://i.pinimg.com/736x/21/05/d1/2105d1ac38288de5a2b22c9b3c961481.jpg' },
     { id: 72, name: 'Plaid Pleated Skirt', price: 1499, category: 'Skirts', image: 'https://th.bing.com/th/id/OIP.uK76lqPiu-Fi1EQ0MaUtJQAAAA?rs=1&pid=ImgDetMain' },
     { id: 73, name: 'Satin Wrap Skirt', price: 1799, category: 'Skirts', image: 'https://i.pinimg.com/736x/6f/28/7a/6f287acb581d86778832867e529b702f.jpg' },
     { id: 74, name: 'A-Line Button-Up Skirt', price: 1399, category: 'Skirts', image: 'https://cdn.tobi.com/product_images/md/4/navy-lydia-linen-crop-halter-top@2x.jpg' },
     { id: 75, name: 'Layered Ruffle Skirt', price: 1599, category: 'Skirts', image: 'https://th.bing.com/th/id/OIP.3sZinJ_UleT64fHSSGRTfQHaIZ?rs=1&pid=ImgDetMain' },
     { id: 76, name: 'Leather Mini Skirt', price: 1899, category: 'Skirts', image: 'https://i.pinimg.com/736x/9a/a3/80/9aa3800c16bee8e5f20a392428179749.jpg' },
     { id: 77, name: 'Maxi Tiered Skirt', price: 1499, category: 'Skirts', image: 'https://images-bucket.bonanzastatic.com/afu/images/003a/5dbd/070b_8128175199/tulle_skirt_maxi_tiered_6.jpg' },
     { id: 78, name: 'Asymmetrical Hem Skirt', price: 1799, category: 'Skirts', image: 'https://th.bing.com/th/id/OIP.k7aqWRsxjvsoYnnyprqZbgHaJ4?rs=1&pid=ImgDetMain' },
     { id: 79, name: 'Knit Bodycon Skirt', price: 1299, category: 'Skirts', image: 'https://th.bing.com/th/id/OIP.dltgwuYQu9dbITylP3XGgAHaI4?rs=1&pid=ImgDetMain' },
     { id: 80, name: 'Floral Printed Midi Skirt', price: 1699, category: 'Skirts', image: 'https://www.lulus.com/images/product/xlarge/3488270_685242.jpg' },
     { id: 165, name: 'Metallic Midi Skirt', price: 1499, category: 'Skirts', image: 'https://th.bing.com/th/id/OIP.1mp87h2mZ8J4OtQL4M4xYQHaLH?rs=1&pid=ImgDetMain' },
     { id: 165, name: 'Metallic Midi Skirt', price: 1499, category: 'Skirts', image: 'https://th.bing.com/th/id/OIP.1mp87h2mZ8J4OtQL4M4xYQHaLH?rs=1&pid=ImgDetMain' },
     { id: 181, name: 'Corduroy Mini Skirt', price: 1599, category:'Skirts', image:'https://i.pinimg.com/originals/75/cc/88/75cc88a63b6b0b275ba5fc8ab0658ff9.jpg'},
     { id: 182, name: 'Faux Suede Mini Skirt', price: 1399, category:'Skirts', image:'https://www.lulus.com/images/product/xlarge/3014050_536842.jpg?w=375&hdpi=1'},
     { id: 183, name: 'Floral Print Pleated Skirt', price: 1199, category:'Skirts', image:'https://i.pinimg.com/736x/68/b2/23/68b223e26606cf38fe337cce41caca5c--floral-print-skirt-floral-skirts.jpg'},
     { id: 184, name: 'Full Maxi Skirt', price: 1199, category:'Skirts', image:'https://cdn.shopify.com/s/files/1/0424/4065/products/059_-_20190619-Morning-Lavender-Nancy-Ivory-Knit-Cami_d9ccab5f-778c-4cef-8085-50866f4af7c7_1800x1800.jpg?v=1592369594'}
];
export default products; // Default export
