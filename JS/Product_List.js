const products = [
       // T-Shirts
     { id: 1, name: 'Classic White Cotton Tee', price: 499, category: 'T-Shirts', image: 'https://tse2.mm.bing.net/th?id=OIP.vQYmUfgCU4PQtZq4UARj_gAAAA&pid=Api&P=0&h=180' },
     { id: 2, name: 'Graphic Printed Tee', price: 699, category: 'T-Shirts', image: 'https://i.pinimg.com/originals/ed/f6/da/edf6daf2d390848de335e0a9fa6dd090.jpg' },
     { id: 3, name: 'Oversized Retro Tee', price: 799, category: 'T-Shirts', image: 'https://i.pinimg.com/originals/df/08/50/df08507910912d00038246f2bf70d4c6.jpg' },
     { id: 4, name: 'Color Block Tee', price: 649, category: 'T-Shirts', image: 'https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,w_800,c_scale/v1/NA/Style/ECOMM/X3RP22KC4M2-JBLK' },
     { id: 5, name: 'Tie-Dye Tee', price: 899, category: 'T-Shirts', image: 'https://i5.walmartimages.com/asr/93286917-b7d7-4122-9b62-2e58a578cf89.0c1a492aad9e73d1d06d9c8853ccfe8d.jpeg' },
     { id: 6, name: 'Striped Casual Tee', price: 599, category: 'T-Shirts', image: 'https://image26.stylesimo.com/o_img/2018/05/29/254988-10548316/women-s-casual-loose-striped-short-sleeve-round-neck-pullover-tee-shirt.jpg' },
     { id: 7, name: 'Slim Fit Crew Neck Tee', price: 749, category: 'T-Shirts', image: 'https://lsco.scene7.com/is/image/lsco/levis/clothing/795410003-alt4-pdp.jpg?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=2000&hei=1852' },
     { id: 8, name: 'V-Neck Summer Tee', price: 549, category: 'T-Shirts', image: 'https://cbu01.alicdn.com/img/ibank/2018/773/581/8688185377_2107390325.jpg' },
     { id: 9, name: 'Pocketed Basic Tee', price: 499, category: 'T-Shirts', image: 'https://thedailylab.co/cdn/shop/files/Screenshot2023-06-02at3.19.48PM_1500x.png?v=1688442424' },
     { id: 10, name: 'Longline Urban Tee', price: 799, category: 'T-Shirts', image: 'https://i.pinimg.com/originals/60/2e/11/602e112fce3bd80eabc3853f5532f43b.jpg' },

     // Shirts
     { id: 11, name: 'Slim Fit Formal Shirt', price: 999, category: 'Shirts', image: 'https://tse3.mm.bing.net/th?id=OIP.2smO6EbmQVqr37cYtqkVXQHaJ1&pid=Api&P=0&h=180' },
     { id: 12, name: 'Floral Print Casual Shirt', price: 849, category: 'Shirts', image: 'https://images.bestsellerclothing.in/data/vero-moda/26-apr-2023/224087303_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto&dpr=1.2' },
     { id: 13, name: 'Plaid Checkered Shirt', price: 749, category: 'Shirts', image: 'https://tse4.mm.bing.net/th?id=OIP.NVirWILMsxnj5kp4I4fbdQHaHa&pid=Api&P=0&h=180' },
     { id: 14, name: 'Denim Button-Up Shirt', price: 1299, category: 'Shirts', image: 'https://assets.torrid.com/is/image/torrid/11317903_hi?$td_pdp_zoom_image$' },
     { id: 15, name: 'Mandarin Collar Shirt', price: 899, category: 'Shirts', image: 'https://tse4.mm.bing.net/th?id=OIP.49HwouogFqr5XqVh4mOveQHaJQ&pid=Api&P=0&h=180' },
     { id: 16, name: 'Short Sleeve Cuban Shirt', price: 799, category: 'Shirts', image: 'http://cdn.shopify.com/s/files/1/0293/9277/products/03-01-23_CB_DJ_14-18-37_72_ZDF01K310007_Black_P_16101_WG_1200x1200.jpg?v=1677792842' },
     { id: 17, name: 'Linen Summer Shirt', price: 1199, category: 'Shirts', image: 'https://www.madetrade.com/cdn/shop/products/scarlett-linen-summer-shirt-shirts-amourlinen-m-sage-green-551713_160x.webp?v=1689121125' },
     { id: 18, name: 'Satin Partywear Shirt', price: 1599, category: 'Shirts', image: 'https://i.pinimg.com/originals/88/4a/5d/884a5d7693d8164f486690d0b5365d7b.jpg' },
     { id: 19, name: 'Pinstriped Office Shirt', price: 1049, category: 'Shirts', image: 'https://welbornecorporateuniforms.com.au/wp-content/uploads/2019/02/JK_462_Gunmetal-468x610.jpg' },
     { id: 20, name: 'Ombre Dyed Shirt', price: 1099, category: 'Shirts', image: 'https://www.jiomart.com/images/product/500x630/469369925_bluewhite/ombre-dyed-slim-fit-shirt-model-469369925_bluewhite-0-202301081734.jpg' },
     { id: 21, name: 'Keyboard', price: 35, category: 'Electronics', image: 'https://m.media-amazon.com/images/I/71W2d8YHJEL._SX679_.jpg' },
     { id: 22, name: 'Mouse', price: 15, category: 'Electronics', image: 'https://m.media-amazon.com/images/I/61JmCaGQxSL._SX679_.jpg' },
     { id: 23, name: 'Smartphone', price: 500, category: 'Electronics', image: 'https://th.bing.com/th/id/OIP.ldtpcIY3ELUKbooX6h6JHAHaEK?rs=1&pid=ImgDetMain' },
     { id: 24, name: 'Charger', price: 10, category: 'Electronics', image: 'https://i.pinimg.com/originals/17/c1/ec/17c1ec41ea86f06de18576aeddb12a7f.jpg' },
     { id: 25, name: 'Monitor', price: 200, category: 'Electronics', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6530/6530356cv37d.jpg' },
     { id: 26, name: 'Camera', price: 300, category: 'Electronics', image: 'https://th.bing.com/th/id/OIP.r7Aoriokr8j7CS2GojYxBAHaFj?rs=1&pid=ImgDetMain' },
     { id: 27, name: 'Smartwatch', price: 150, category: 'Electronics', image: 'https://i0.wp.com/techbriefly.com/wp-content/uploads/2020/01/How-to-update-Samsung-Galaxy-Watch.jpg?fit=800%2C800&ssl=1' },
     { id: 28, name: 'Bluetooth Speaker', price: 60, category: 'Electronics', image: 'https://th.bing.com/th/id/OIP.Y0ltREkBpP1LErNFlbF6kgHaEl?rs=1&pid=ImgDetMain' },
     { id: 29, name: 'Tablet', price: 220, category: 'Electronics', image: 'https://s.yimg.com/ny/api/res/1.2/VZDRrvwQ0zi2Z9K2tac0tA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MA--/https://s.yimg.com/os/creatr-uploaded-images/2020-05/e0ac4ae0-a11e-11ea-a761-5fe4aead1d9e' },
     { id: 30, name: 'E-Book Reader', price: 80, category: 'Electronics', image: 'https://m.media-amazon.com/images/I/61Wrg05TfJL._SX679_.jpg' },
     { id: 31, name: 'Printer', price: 120, category: 'Electronics', image: 'https://emibaba.com/wp-content/uploads/2023/04/Canon-PIXMA-E4570-All-in-One-Printer-3.png' },
     { id: 32, name: 'Hard Drive', price: 100, category: 'Electronics', image: 'https://customgamingworld.com/wp-content/uploads/2020/02/500G-1TB-2TB-Protable-2-5inch-External-Hard-Drive-USB3-0-HD-Mobile-Hard-Disk-HDD-2.jpeg' },
     { id: 33, name: 'Webcam', price: 50, category: 'Electronics', image: 'https://thegadgetflow.com/wp-content/uploads/2022/07/OBSBOT-Tiny-4K-AI-Powered-Gesture-Control-Webcam-03-1200x900.jpeg' },
     { id: 34, name: 'Speakers', price: 40, category: 'Electronics', image: 'https://www.turntablelab.com/cdn/shop/products/audioengine-hd3-walnut-ls_2400x2400.jpg?v=1607120008' },
     { id: 35, name: 'Mic', price: 40, category: 'Electronics', image: 'https://i.pinimg.com/originals/cb/17/88/cb178873eb9f2d3ec558427da9441b02.jpg' },
     { id: 36, name: 'Laptop Cooling', price: 300, category: 'Electronics', image: 'https://images-na.ssl-images-amazon.com/images/I/51JzYTfo4AL.jpg' },
     { id: 37, name: 'Guitar', price: 150, category: 'Musical Instruments', image: 'https://i.pinimg.com/originals/ea/0a/04/ea0a04f4e598f33d676cfc973abc4958.png' },
     { id: 38, name: 'Piano', price: 500, category: 'Musical Instruments', image: 'https://i.pinimg.com/736x/7b/48/89/7b4889ec379df6703722980cddc2a066.jpg' },
     { id: 39, name: 'Drums', price: 300, category: 'Musical Instruments', image: 'https://th.bing.com/th/id/OIP.U-cAgFbmvDlZR5MrYbIdtAHaHa?rs=1&pid=ImgDetMain' },
     { id: 40, name: 'Flute', price: 150, category: 'Musical Instruments', image: 'https://th.bing.com/th/id/OIP.W_AyhNqrMLexUZW6VLkH5QAAAA?rs=1&pid=ImgDetMain' },
     { id: 41, name: 'Fan', price: 20, category: 'Home Appliances', image: 'https://p.globalsources.com/IMAGES/PDT/B1196134986/Fan.jpg' },
     { id: 42, name: 'Air Conditioner', price: 350, category: 'Home Appliances', image: 'https://www.comfortmasterinc.com/wp-content/uploads/sites/8/2024/06/ac-conditioner.png' },
     { id: 43, name: 'Heater', price: 100, category: 'Home Appliances', image: 'https://s.yimg.com/ny/api/res/1.2/E4PMz.w1IpaEgFGoXh4PiA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/aol_uk_yahoo_finance_uk_141/d378bd90927a79f565f74caab4909cd3' },
     { id: 44, name: 'Vacuum Cleaner', price: 250, category: 'Home Appliances', image: 'https://th.bing.com/th/id/OIP.dGK3YS3sJnYrYKe_bEYr7gHaHa?w=480&h=480&rs=1&pid=ImgDetMain' },
     { id: 45, name: 'Washing Machine', price: 250, category: 'Home Appliances', image: 'https://www.caple.co.uk/wp-content/uploads/2021/01/WMi3006-1024x1024.jpg' },
     { id: 46, name: 'Fridge', price: 500, category: 'Kitchen Appliances', image: 'https://lg-sks-content.s3.us-west-1.amazonaws.com/2023-02/sks_48-frenchdoorrefrigerator_v1b_updated.jpg' },
     { id: 47, name: 'Microwave', price: 100, category: 'Kitchen Appliances', image: 'https://th.bing.com/th/id/OIP.IWd4tMLKr7uSPVxVXnUYBQHaFj?w=800&h=600&rs=1&pid=ImgDetMain' },
     { id: 48, name: 'Coffee Maker', price: 60, category: 'Home Appliances', image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2038/2038159cv12d.jpg' },
     { id: 49, name: 'Book Shelf', price: 40, category: 'Furniture', image: 'https://th.bing.com/th/id/OIP.mPQxpdTP5oOxUfhro1UFnAHaHa?rs=1&pid=ImgDetMain' },
     { id: 50, name: 'Toaster', price: 25, category: 'Kitchen Appliances', image: 'https://th.bing.com/th/id/R.ef3989298b5311f3c16e2802b371be05?rik=4yjfXiaJuCLlLw&riu=http%3a%2f%2fg-ecx.images-amazon.com%2fimages%2fG%2f01%2faplusautomation%2fvendorimages%2f2708ea90-8aa1-4db8-95e5-17b94686b795._CB320440099_.jpg&ehk=LnyT97A3z4TIdhb6vSvsr%2b9A6%2fBnRHvZHh3Ce3%2fO8Sc%3d&risl=&pid=ImgRaw&r=0' },
     { id: 51, name: 'Desk Lamp', price: 30, category: 'Furniture', image: 'https://i5.walmartimages.com/asr/8d617ef8-d7a3-4f86-883c-2843ed5c1811_1.e84d1a30b186e7085f039fec44b6351a.jpeg' },
     { id: 52, name: 'Decoration Bulbs', price: 80, category: 'Home Decor', image: 'https://i.pinimg.com/originals/a2/61/c2/a261c238e6bd5d630b1f79d02a310140.jpg' },
     { id: 53, name: 'Office Chair', price: 120, category: 'Furniture', image: 'https://chichomelife.com/wp-content/uploads/2017/03/2-office-chairs-Baxton-Studio-Rathburn-Walnut-Modern-Office-Chair-min.png' },
     {"id": 54,"name": "Pet Grooming Kit","price": 40,"category": "Pet Supplies","image": "http://gdetail.image-gmkt.com/466/715938403/2014/4/ff12bcce-c41f-42f5-b853-15b4f5350b2e.jpg"},
     { id: 55, name: 'Gaming Chair', price: 150, category: 'Furniture', image: 'https://th.bing.com/th/id/OIP.aPY3H8JyQdEHI6x0jyMMXwHaHa?w=700&h=700&rs=1&pid=ImgDetMain' },
     { id: 56, name: 'Yoga Mat', price: 20, category: 'Sports & Fitness', image: 'https://th.bing.com/th/id/OIP.M8NKFV28hmADLzZ6uuKTaAHaF7?pid=ImgDet&w=474&h=379&rs=1' },
     { id: 57, name: 'Dumbbells', price: 40, category: 'Sports & Fitness', image: 'https://cdn.thewirecutter.com/wp-content/media/2023/05/adjustable-dumbbell-2048px-9393-3x2-1.jpg?auto=webp&quality=75&width=980&dpr=2' },
     { id: 58, name: 'Water Bottle', price: 10, category: 'Sports & Fitness', image: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https://cdn.apartmenttherapy.info/image/upload/v1556987267/gen-workflow/product-listing/oneisall.jpg' },
     { id: 59, name: 'Tennis Racket', price: 60, category: 'Sports & Fitness', image: 'https://th.bing.com/th/id/OIP.UkJLIw0YYqG0zEo8lKQK9gHaE8?rs=1&pid=ImgDetMain' },
     { id: 60, name: 'Basketball', price: 25, category: 'Sports & Fitness', image: 'https://th.bing.com/th/id/OIP.rIxlTVWMuSrl8r7nc6r1AwHaE8?rs=1&pid=ImgDetMain' },
     { id: 61, name: 'Football', price: 30, category: 'Sports & Fitness', image: 'https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/6235ea7fbaf601e8d3980228_boy-kicking-ball-on-football-field-2021-09-24-03-47-56-utc-min-min.jpg' },
     { id: 62, name: 'Cricket Bat', price: 80, category: 'Sports & Fitness', image: 'https://cdn.britannica.com/47/148847-050-C4FB5341/Cricket-bat-ball.jpg' },
     { id: 63, name: 'Baseball Glove', price: 50, category: 'Sports & Fitness', image: 'https://th.bing.com/th/id/OIP.I3JK0AJeeESfTXaYtkLlEAHaE7?rs=1&pid=ImgDetMain' },
     { id: 64, name: 'Helmet', price: 70, category: 'Travel', image: 'https://bdlamotorbikes.co.uk/wp-content/uploads/2022/06/HJC-I20-Plain-Motorcycle-Helmet-Matt-Black-Lifestyle-1.jpg' },
     { id: 65, name: 'Skateboard', price: 100, category: 'Sports & Fitness', image: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00658277_vwlk3l.jpg' },
     { id: 66, name: 'Electric Scooter', price: 400, category: 'Travel', image: 'https://m.media-amazon.com/images/I/9155g+jJGQL.jpg' },
     { id: 67, name: 'Mountain Bike', price: 500, category: 'Travel', image: 'https://th.bing.com/th/id/OIP.SBjTIH75oCGwr-aaJT-o5AHaE8?rs=1&pid=ImgDetMain' },
     { id: 68, name: 'Camping Tent', price: 150, category: 'Travel', image: 'https://th.bing.com/th/id/OIP.-BbYZLa2gKtB5wF0BahfUwHaHa?rs=1&pid=ImgDetMain' },
     { id: 69, name: 'Sleeping Bag', price: 50, category: 'Travel', image: 'https://th.bing.com/th/id/OIP.wesYwHTuRlJVuxFTOIJzDwHaHa?rs=1&pid=ImgDetMain' },
     { id: 70, name: 'Hiking Boots', price: 120, category: 'Travel', image: 'https://www.switchbacktravel.com/sites/default/files/images/articles/Hiking%20Boots%20(Lowa%20Renegade%20GTX%20on%20rock).jpg' },
     { id: 71, name: 'Flashlight', price: 20, category: 'Travel', image: 'https://th.bing.com/th/id/OIP.QFCv5WlYQxBi_EGD_4VO_gHaEo?rs=1&pid=ImgDetMain' },
     { id: 72, name: 'Cooking Set', price: 35, category: 'Kitchen Appliances', image: 'https://i5.walmartimages.com/asr/05f690f5-3b32-445a-a3d3-211617841452_1.9292fe791fc75e08762e931f97940e5c.jpeg' },
     { id: 73, name: 'Binoculars', price: 70, category: 'Travel', image: 'https://d1nymbkeomeoqg.cloudfront.net/photos/20/44/325962_30837_XXXL.jpg' },
     { id: 74, name: 'Travel Backpack', price: 80, category: 'Travel', image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/091725/02/fnd/IND/fmt/png/PUMA-Trailblazer-Unisex-Rucksack' },
     { id: 75, name: 'Suitcase', price: 100, category: 'Travel', image: 'https://th.bing.com/th/id/OIP.Qkv0uCLgDpYwtXVlgt9deQAAAA?rs=1&pid=ImgDetMain' },
     { id: 76, name: 'Buddha Idol', price: 30, category: 'Home Decor', image: 'https://i.pinimg.com/originals/aa/e5/24/aae524cd31705dcab174ab04c551db1a.jpg' },
     { id: 77, name: 'Sandals', price: 25, category: 'Footwear', image: 'https://th.bing.com/th/id/OIP.YJJWr5UDopoq0hBfAXf6bgHaHY?rs=1&pid=ImgDetMain' },
     { id: 78, name: 'Beach Umbrella', price: 40, category: 'Travel', image: 'https://images-na.ssl-images-amazon.com/images/I/71bH0RhYmwL._AC_SX679_.jpg' },
     { id: 79, name: 'Cooler Box', price: 60, category: 'Travel', image: 'https://i.pinimg.com/originals/98/c7/73/98c773b16ab29d6472b94db4fa0d38a9.jpg' },
     { id: 80, name: 'Garden Hose', price: 30, category: 'Outdoors', image: 'https://th.bing.com/th/id/OIP.BLrgl3tCUX4bW422JUvshQHaH0?rs=1&pid=ImgDetMain' },
     { id: 81, name: 'Lawn Mower', price: 250, category: 'Outdoors', image: 'https://www.thespruce.com/thmb/d4dI-DInnJo8nKHqZZ5b5C7i3dU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ryobi-Electric-Riding-Lawn-Mower-7-5744795ce78149639deda7c11ea6947e.jpg' },
     { id: 82, name: 'BBQ Grill', price: 120, category: 'Travel', image: 'https://i5.walmartimages.com/asr/60b11dcb-17e7-488a-9d7e-4492b0bce78d_1.a5c3595bb733dce4540fb99f52f95222.jpeg' },
     { id: 83, name: 'Patio Chair', price: 70, category: 'Furniture', image: 'https://th.bing.com/th/id/OIP.2ebg9bKcw2J9uroXOO96pQHaHa?rs=1&pid=ImgDetMain' },
     { id: 84, name: 'Bird Feeder', price: 25, category: 'Pet Supplies', image: 'https://th.bing.com/th/id/OIP.RLrtbTSnxCkwwdbxdW5fXgHaHa?rs=1&pid=ImgDetMain' },
     { id: 85, name: 'Fence', price: 200, category: 'Outdoors', image: 'https://th.bing.com/th/id/OIP.ND6Fxa1kk3hqiL5rU456ggHaE8?w=640&h=427&rs=1&pid=ImgDetMain' },
     { id: 86, name: 'Solar Panel', price: 500, category: 'Outdoors', image: 'https://th.bing.com/th/id/OIP.GDvE3a7rURAUVmmEzgb4pgHaFj?rs=1&pid=ImgDetMain' },
     { id: 87, name: 'Water Purifier', price: 150, category: 'Home Appliances', image: 'https://cdn.ndnnews.co.kr/news/photo/202210/404789_404943_128.jpg' },
     { id: 88, name: 'Pressure Cooker', 'price': 80, category: 'Kitchen Appliances', image: 'https://th.bing.com/th/id/OIP.XLzTtyRJ-5DYppCEXQwLjwD6D6?rs=1&pid=ImgDetMain' },
     { id: 89, name: "Rice Cooker", price: 60, category: 'Kitchen Appliances', image: 'https://helios-i.mashable.com/imagery/roundups/01grrZbWFcDaNjsyvX76f8z/hero-image.fill.size_1200x1200.v1663882071.jpg' },
     { id: 90, name: 'Hand Mixer', price: 40, category: 'Kitchen Appliances', image: 'https://m.media-amazon.com/images/I/71G9WsAZv5L._SX679_.jpg' },
     { id: 91, name: 'Toaster Oven', price: 100, category: 'Kitchen Appliances', image: 'https://m.media-amazon.com/images/I/81Uh1csO8aL._SX679_.jpg' },
     { id: 92, name: 'Kitchen Scale', price: 30, category: 'Kitchen Appliances', image: 'https://m.media-amazon.com/images/I/817uKSURqVL._SX522_.jpg' },
     { id: 93, name: 'Dinner Set', price: 90, category: 'Dining', image: 'https://nestasia.in/cdn/shop/products/DIN03-VERAPINK-BN820CN_4.jpg?v=1657889646&width=600' },
     { id: 94, name: 'Serving Tray', price: 20, category: 'Dining', image: 'https://th.bing.com/th/id/OIP.0cInDoQruSXKQwyY_C1yGAHaJR?w=2046&h=2560&rs=1&pid=ImgDetMain' },
     { id: 95, name: 'Cutting Board', price: 15, category: 'Kitchen Appliances', image: 'https://th.bing.com/th/id/OIP.iq1Z7dntbplSFhMcWKS-BgHaE_?rs=1&pid=ImgDetMain' },
     { id: 96, name: 'Knife Set', price: 80, category: 'Kitchen Appliances', image: 'https://m.media-amazon.com/images/I/81EMyjtJTAL._SX679_.jpg' },
     { id: 97, name: 'Tea Kettle', price: 25, category: 'Kitchen Appliances', image: 'https://th.bing.com/th/id/OIP.tatqNSlUAnK3aoV5ekZdSwHaHJ?rs=1&pid=ImgDetMain' },
     { id: 98, name: 'Vacuum Flask', price: 35, category: 'Home Appliances', image: 'https://ae-pic-a1.aliexpress-media.com/kf/Sf6f8f346b54946858122d7ca42b37778V/REVOMAX-Large-Capacity-Stainless-Steel-Thermos-Portable-Vacuum-Flask-Insulated-Tumbler-With-No-Screw-Lid-Thermo.jpg_.webp' },
     { id: 99, name: 'Blender', price: 70, category: 'Kitchen Appliances', image: 'https://theladiescue.com/wp-content/uploads/2020/01/81KKsFuz8L-scaled.jpg' },
     { id: 100, name: 'Measuring Cups', price: 15, category: 'Kitchen Appliances', image: 'https://sp.apolloboxassets.com/vendor/product/productImages/2021-10-15/0lby0Array_12.jpg' },
     { id: 101, name: "Dog Collar", price: 12, category: "Pet Supplies", image: "https://i.pinimg.com/originals/fd/47/76/fd47765af4c2a60e859a0006a4d4f848.jpg"},
     { id: 102, name: "Cat Scratching Post", price: 30, category: "Pet Supplies", image: "https://www.catsplay.com/image/cache/prod/data/img/primetime/max_scratch_oversized_cat_scratching_post_and_perch_3-2000x1999.jpg"},
     { id: 103, name: "Fish Tank Cleaner", price: 25, category: "Pet Supplies", image: "https://thumbs.dreamstime.com/b/cleaning-aquarium-siphon-followed-water-change-201696042.jpg"},
     { id: 104, name: "Pet Carrier Bag", price: 45, category: "Pet Supplies", image: "https://img.chewy.com/is/image/catalog/102711_MAIN._AC_SL1500_V1569017901_.jpg"},
     { id: 105, name: "Hamster Home", price: 60, category: "Pet Supplies", image: "https://woodhamstercage.com/wp-content/uploads/2023/08/word-image-1089-2.jpeg"},
     { id: 106, name: "Dog Chew Toys", price: 10, category: "Pet Supplies", image: "https://www.petbarn.com.au/petspot/app/uploads/2013/11/iStock_000008360024-labrador-puppy-dog-chew-toy.jpg"},
     { id: 107, name: "Cat Litter Box", price: 25, category: "Pet Supplies", image: "https://th.bing.com/th/id/OIP.a1KQ6NcELFhkw0A-kBJoRwAAAA?rs=1&pid=ImgDetMain"},
     { id: 108, name: "Aquarium LED Lights", price: 35, category: "Pet Supplies", image: "https://th.bing.com/th/id/OIP.-a8YpqSBtq3jeVBkxu5e0AHaHa?rs=1&pid=ImgDetMain"},
     { id: 109, name: "Sony LED TV", price: 250, category: "Home Appliances", image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6280/6280535cv13d.jpg"},
     { id: 110, name: "High Waist Denim", price: 20, category: "Clothing", image: "https://th.bing.com/th/id/OIP.Y_nQvNwMrd5f8LKTEa3hxwHaJc?rs=1&pid=ImgDetMain"},
     { id: 111, name: "Men's Cotton Shirt", category: "Clothing", image: "https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw823f9bf9/images/feeds/UC109141.jpg", price: 14 },
     { id: 112, name: "Women's Casual Dress", category: "Clothing", image: "https://di2ponv0v5otw.cloudfront.net/posts/2022/09/01/63117f2bdbb0e7367a1ece5c/m_63117f5ac9a228a574207785.jpg", price: 30 },
     { id: 113, name: "Unisex Sweatshirt", category: "Clothing", image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4bb35e273dcd486bba1849691f3dbadd_9366/break-the-norm-graphic-crew-sweatshirt-gender-neutral.jpg", price: 22 },
     { id: 114, name: "Kids' Winter Jacket", category: "Clothing", image: "https://media.istockphoto.com/id/533098559/photo/snow-kids.jpg?s=612x612&w=0&k=20&c=pl2MpKc3LtBafre3ak3oZPugqkFcZNyZEG_MXzIBx_Q=", price: 42 },
     { id: 115, name: "Men's Sports Shoes", category: "Footwear", image: "https://m.media-amazon.com/images/I/61mNgiqim8L._AC_UY1000_.jpg", price: 36 },
     { id: 116, name: "Women's Handbag", category: "Accessories", image: "https://24thspoke.in/cdn/shop/files/tb-image_share_1722789151391_jpg.png?v=1722789185&width=1445", price: 54 },
     { id: 117, name: "Running Shorts", category: "Sports & Fitness", image: "https://i5.walmartimages.com/asr/c592d011-59f8-4b24-825d-49ea09869542.561f42443a7c15ac9d2ff6384409917b.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff", price: 14 },
     { id: 118, name: "Formal Trousers", category: "Clothing", image: "https://images.bewakoof.com/utter/content/2557/content_6.jpg", price: 24 },
     { id: 119, name: "Women's Scarves", category: "Clothing", image: "https://m.media-amazon.com/images/I/814PE8RPMXL._AC_UY350_.jpg", price: 12 },
     { id: 120, name: "Leather Belt", category: "Accessories", image: "https://teakwoodleathers.com/cdn/shop/products/T_BT_753_BR_1_1080x.jpg?v=1666954708", price: 10 },
     { id: 121, name: "Organic Almonds (1kg)", category: "Groceries", image: "https://praakritik.com/cdn/shop/files/26.png?v=1727782449", price: 11 },
     { id: 122, name: "Multigrain Bread", category: "Groceries", image: "https://static.toiimg.com/thumb/76626392.cms?imgsize=321516&width=800&height=800", price: 1 },
     { id: 123, name: "Pure Olive Oil (1L)", category: "Groceries", image: "https://www.tatasimplybetter.com/cdn/shop/files/DSC09606_2048x2048.jpg?v=1723027799", price: 6 },
     { id: 124, name: "Green Tea Bags (100)", category: "Groceries", image: "https://imgcdn.stablediffusionweb.com/2024/5/6/9ea12d83-2eac-4ef6-9267-fa84e0ee45c9.jpg", price: 4 },
     { id: 125, name: "Instant Coffee (200g)", category: "Groceries", image: "https://twochimpscoffee.com/wp-content/uploads/2024/02/Instant-Coffee.jpg", price: 3 },
     { id: 126, name: "Natural Honey (500g)", category: "Groceries", image: "https://honeyday.in/wp-content/uploads/2021/04/MF-500g.jpg", price: 5 },
     { id: 127, name: "Brown Basmati Rice (5kg)", category: "Groceries", image: "https://rukminim2.flixcart.com/image/720/864/kr2e3680/rice/j/q/p/5-brown-brown-basmati-rice-5kg-gluten-free-na-basmati-rice-bag-original-imag4y29z3rbkyxm.jpeg?q=60&crop=false", price: 10 },
     { id: 128, name: "Mixed Dry Fruits (1kg)", category: "Groceries", image: "https://growstar.in/wp-content/uploads/2021/04/dry-fruit-mix-20190424182218.jpg", price: 14 },
     { id: 129, name: "Dark Chocolate (80%)", category: "Groceries", image: "https://royceindia.com/cdn/shop/files/NamaGhanaBitterChocolate.webp?v=1706515548", price: 2 },
     { id: 130, name: "Fresh Strawberries (500g)", category: "Groceries", image: "https://www.12taste.com/in/wp-content/uploads/2022/10/fresh-strawberries-wooden-table-scaled.jpg", price: 4 },
     { id: 131, name: "Air Purifier", category: "Home Appliances", image: "https://ausclimate.com.au/cdn/shop/files/WebsiteImagesPROMO_11.jpg?v=1731364617&width=2048", price: 114 },
     { id: 132, name: "Induction Cooktop", category: "Kitchen Appliances", image: "https://i5.walmartimages.com/asr/38dd46e1-043c-44f9-9eb9-f6350f3c6706.e2175b73b10791882acd8e542e6516e3.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", price: 30 },
     { id: 133, name: "Electric Kettle", category: "Kitchen Appliances", image: "https://wiproappliances.com/cdn/shop/articles/Finding_Your_Perfect_Cup-_A_Guide_to_Choosing_the_Best_Electric_Kettle_for_You_aa782981-38f2-494a-98cd-931e0d11489b.webp?v=1722327627", price: 22 },
     { id: 134, name: "4K Ultra HD TV", category: "Electronics", image: "https://imgeng.jagran.com/images/2024/10/07/article/image/best-4k-ultra-hd-smart-led-google-tv-1728303530241.jpg", price: 602 },
     { id: 135, name: "Noise-Cancelling Headphones", category: "Accessories", image: "https://cdn.thewirecutter.com/wp-content/media/2023/09/noise-cancelling-headphone-2048px-0862-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200", price: 90 },
     { id: 136, name: "Dune", category: "Books", image: "https://creativereview.imgix.net/content/uploads/2023/10/dune-book-1.jpg?auto=compress,format&q=60&w=1200&h=800", price: 15 },
     { id: 137, name: "The Glass Castle", category: "Books", image: "https://m.media-amazon.com/images/M/MV5BMTY2Nzk0MDE3Nl5BMl5BanBnXkFtZTgwOTI0ODc0MjI@._V1_.jpg", price: 12 },
     { id: 138, name: "Dishwasher", category: "Kitchen Appliances", image: "https://imgmedia.lbb.in/media/2024/01/6597aaa746497c53e1fc2483_1704438439664.jpg", price: 482 },
     { id: 139, name: "Gaming Laptop", category: "Electronics", image: "https://helios-i.mashable.com/imagery/roundup-products/07qRZoffGYcDSFLJDpsfJeF/product-image.fill.size_1200x1200.v1723835686.jpg", price: 1024 },
     { id: 140, name: "Smartwatch", category: "Accessories", image: "https://hmadmin.hamleys.in/product/493174787/665/493174787-6.jpg", price: 120 },
     { id: 141, name: "The Left Hand of Darkness", category: "Books", image: "https://www.shopatmatter.com/wp-content/uploads/Books/LeftHandOfDarknessCover.jpg", price: 14 },
     { id: 142, name: "The Subtle Art of Not Giving a Fuck", category: "Books", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFdw8HYhXNsXzIkdWfaOL3pBpAR0q0kUYtg&s", price: 11 },
     { id: 143, name: "The Pragmatic Programmer", category: "Books", image: "https://m.media-amazon.com/images/I/51A8l+FxFNL._SL500_.jpg", price: 22 },
     { id: 144, name: "Mastering the Art of French Cooking", category: "Books", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1cV9LoUcTbPrac9n2z5Lv5eDWxLIUsKoMg&s", price: 35 },
     { id: 145, name: "The Power of Habit", category: "Books", image: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6606a161611fe1f8ff0a61e5/czwnz_512.webp", price: 10 },
     { id: 146, name: "Atomic Habits", category: "Books", image: "https://media.licdn.com/dms/image/D4D12AQHZJRikGoFIKw/article-cover_image-shrink_720_1280/0/1696425885734?e=2147483647&v=beta&t=GpXawCAMJqzTZw1qYtR5FJNCAITvrAxqFTSrW9q7jdw", price: 13 },
     { id: 147, name: "Neuromancer", category: "Books", image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe94d9879-3660-47cc-b958-b8095e0dd0a4_2559x2559.jpeg", price: 12 },
     { id: 148, name: "Python Crash Course", category: "Books", image: "https://images.pangobooks.com/images/33656458-76c2-4cca-ba0f-35f66beab2f4?width=800&quality=85&crop=1%3A1", price: 20 },
     { id: 149, name: "Clean Code", category: "Books", image: "https://miro.medium.com/v2/resize:fit:1126/1*_DQFYtGrTNHbi8QoUnFdqw.jpeg", price: 25 },
     { id: 150, name: "The Joy of Cooking", category: "Books", image: "https://assets.bonappetit.com/photos/5e2f3847cb984a0008561e85/master/pass/0220-Cookbook-Club-Joy-of-Cooking.jpg", price: 30 },
     { id: 151, name: "Becoming", category: "Books", image: "https://bookbins.in/wp-content/uploads/2024/09/Becoming-Michelle-Obama-Book-Informative-Buy-Online-Bookbins-01.jpg", price: 17 },
     { id: 152, name: "Educated", category: "Books", image: "https://images.squarespace-cdn.com/content/v1/63d9364fe9fbbb42b22afb61/604b3c52-f185-4712-8b2c-0ceadaa85653/Educated+a+Memoir.jpg", price: 15 },
     { id: 153, name: "Remote Control Car", category: "Toys", image: "https://snooplay.in/cdn/shop/products/greenwildrc2_1080x.png?v=1649946669", price: 30 },
     { id: 154, name: "Stuffed Animal", category: "Toys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILMugv1LrRMAwGZuXdCdvJYws95iihHVQyg&s", price: 7 },
     { id: 155, name: "Building Blocks", category: "Toys", image: "https://i.etsystatic.com/27475415/r/il/bf995b/2875715429/il_fullxfull.2875715429_6yv9.jpg", price: 18 },
     { id: 156, name: "Board Game", category: "Toys", image: "https://m.media-amazon.com/images/I/91ZEOIB64TL.jpg", price: 22 },
     { id: 157, name: "Magic Kit", category: "Toys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPo9rNKr2BxmUXxtUwhpck6rXsv9qb89cQiw&s", price: 16 },
     { id: 158, name: "Drone Toy", category: "Toys", image: "https://cdn.mos.cms.futurecdn.net/HkGtRKjsCuXFHKmekzMUZF-1200-80.jpg", price: 42 },
     { id: 159, name: "Bubble Maker", category: "Toys", image: "https://www.salonebly.com/storage/media/biiocDQlSZEy4I2EfprbjZefhb86OWYiUnrLS6cG.jpeg", price: 4 },
     { id: 160, name: "Interactive Robot", category: "Toys", image: "https://designwanted.com/wp-content/uploads/2022/03/Eilik-robot-_-interactive-desktop-companion-_-emotional-intelligence-_-Cover.jpg", price: 48 },
     { id: 161, name: "Action Figure Set", category: "Toys", image: "https://geekmonkey.in/cdn/shop/files/13_02f2ecd3-e4ad-463a-81c7-16d4363b6289.jpg?v=1712277919", price: 14 },
     { id: 162, name: "Educational Puzzle", category: "Toys", image: "https://firsthub.in/public/uploads/all/mumcFLi0O7pQPHlfwiXjKQMHayX2hQDulnnIiEkO.webp", price: 11 },
     { id: 163, name: "Resistance Bands", category: "Sports & Fitness", image: "https://jsblueridge.com/cdn/shop/files/S0c7f67b7a9d74ad49b8538e38b088fbdA.webp?v=1718641915", price: 10 },
     { id: 164, name: "Treadmill", category: "Sports & Fitness", image: "https://api.photon.aremedia.net.au/wp-content/uploads/sites/9/2024/11/BestHomeTreadmills-Getty-1920x1080-1.jpg?resize=720%2C405", price: 602 },
     { id: 165, name: "Skipping Rope", category: "Sports & Fitness", image: "https://i0.wp.com/kimabbagehart.com/wp-content/uploads/2024/02/1.png?resize=1024%2C683&ssl=1", price: 5 },
     { id: 166, name: "Ab Roller", category: "Sports & Fitness", image: "https://hips.hearstapps.com/hmg-prod/images/best-ab-roller-uk-2023-642c187433420.jpg?crop=0.455xw:0.910xh;0.519xw,0.0385xh&resize=640:*", price: 14 },
     { id: 167, name: "Pull-Up Bar", category: "Sports & Fitness", image: "https://contents.mediadecathlon.com/p2402040/1c5108094ca041ecb572fab476fb119f/p2402040.jpg?format=auto&quality=70&f=2520x0", price: 24 },
     { id: 168, name: "Kettlebell", category: "Sports & Fitness", image: "https://www.shape.com/thmb/3KlFcb75vMzjTmklY-t5nPi8ArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rec2A49N5xDPEXATf-de0a1c53e19f4cd3a0c44ebf71654dc4.jpg", price: 18 },
     { id: 169, name: "Cycling Gloves", category: "Sports & Fitness", image: "https://www.montonsports.com/media/wysiwyg/image/suutu-gloves-0712.jpg", price: 6 },
     { id: 170, name: "Portable Power Bank", category: "Accessories", image: "https://media.istockphoto.com/id/1409737619/photo/a-mobile-phone-being-charged-using-a-power-bank-is-on-the-table.jpg?s=612x612&w=0&k=20&c=Z8T2cLqSCItTo3UwbeL-Lx8N4gyjMH7QUvxd_XVuQlU=", price: 18 },
     { id: 171, name: "Big Little Lies", category: "Books", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxW6wYHWf8aL4twBqC6Yy71mbgedxMwecAIw&s", price: 18 },
     { id: 172, name: "Pride and Prejudice", category: "Books", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKqDMRHeygT485g4rZxw735snLqdX6zcTQQ&s", price: 12 },
     { id: 173, name: "Moby-Dick", category: "Books", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoc2Pnk71xdZI-B3S_UuNSA5lIEzcV9AoanQ&s", price: 13 },
     { id: 174, name: "The Photographer's Eye", category: "Books", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRye4eAQLY8eF4-F6Omd_lrW4-v3r-rI27A5g&s", price: 25 },
     { id: 175, name: "Understanding Exposure", category: "Books", image: "https://m.media-amazon.com/images/I/81VJHqCJkTL._AC_UF1000,1000_QL80_.jpg", price: 18 },
     { id: 176, name: "The Digital Photography Book", category: "Books", image: "https://www.artonicweb.com/wp-content/uploads/2016/03/7-Basics-of-Digital-Photography.jpg", price: 19 },
     { id: 177, name: "The Food Lab", category: "Books", image: "https://cdn11.bigcommerce.com/s-2mj19jirgg/images/stencil/1280x1280/products/359/3580/Books2023_The_Food_Lab_Cover__03408.1703013009.jpg?c=1", price: 28 },
     { id: 178, name: "The Night Circus", category: "Books", image: "https://images.squarespace-cdn.com/content/v1/6056a34225fc9021c09ae605/1616300265542-V1XMG63H1XC2GI2XB16S/FullSizeRender+11.jpg?format=1500w", price: 16 },
     { id: 179, name: "The Travel Book", category: "Books", image: "https://images.urbndata.com/is/image/UrbanOutfitters/69486975_000_g?$xlarge$&fit=constrain&qlt=80&wid=640", price: 22 },
     { id: 180, name: "Vagabonding", category: "Books", image: "https://www.dominicanabroad.com/wp-content/uploads/2022/01/vagabonding-book.jpg", price: 25 },
     { id: 181, name: "Where the Crawdads Sing", category: "Books", image: "https://cdn.dribbble.com/users/11713389/screenshots/18313790/wherethecrawdadssing_dribbble.jpg", price: 14 },
     { id: 182, name: "Mastering Light", category: "Books", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOagWnch1C3ad74Lhp2DT-MJCuWgeVT-J3e1zPKTqi-5IXUoM0JLqw7hG7jybbnMl-tx0&usqp=CAU", price: 18 },
     { id: 183, name: "Notebook (Set of 3)", category: "Office Supplies", image: "https://th.bing.com/th/id/R.2015c0fd4e0a017cf2afa876ade81b5d?rik=78J2prIMW9cPBg&riu=http%3a%2f%2fcdn.notonthehighstreet.com%2ffs%2f46%2f88%2fee5f-8c55-4b20-8b6d-be3c4cabf947%2foriginal_stationery-notebook-gift-set.jpg&ehk=fYI5%2f9uVyquM7zdCqdys5UYsm6qzerw4S1Vn9CmRiFo%3d&risl=&pid=ImgRaw&r=0", price: 300 },
     { id: 184, name: "Ballpoint Pen Set", category: "Office Supplies", image: "https://th.bing.com/th/id/OIP.gWSHvRojQLKTOAAo09rm-AHaHa?rs=1&pid=ImgDetMain", price: 200 },
     { id: 185, name: "Desk Organizer", category: "Office Supplies", image: "https://th.bing.com/th/id/OIP.kA-jQiPKzeAvXOI3oj6EzAAAAA?rs=1&pid=ImgDetMain", price: 800 },
     { id: 186, name: "Sticky Notes", category: "Office Supplies", image: "https://th.bing.com/th/id/OIP.NCWAbIAxrukiOrMi6cAwSQHaHa?rs=1&pid=ImgDetMain", price: 150 },
     { id: 187, name: "Highlighter Pack", category: "Office Supplies", image: "https://th.bing.com/th/id/OIP.P-RiSF-1y35QCPdDGE_5nQHaHa?rs=1&pid=ImgDetMain", price: 250 },
     { id: 188, name: "Whiteboard with Markers", category: "Office Supplies", image: "https://startupstockphotos.com/wp-content/uploads/2021/12/ssp026.jpg", price: 1500 },
     { id: 189, name: "Paper Shredder", category: "Office Supplies", image: "https://th.bing.com/th/id/OIP.QSJYWOwUDuCYAnci92zbfgHaHa?w=960&h=960&rs=1&pid=ImgDetMain", price: 3500 },
     { id: 190, name: "File Folder Set", category: "Office Supplies", image: "https://th.bing.com/th/id/OIP.31KBY1SyC6IS_wZvQt-p8AHaHa?rs=1&pid=ImgDetMain", price: 500 }
];
export default products; // Default export
