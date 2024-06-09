const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Dummy data
const clothingItems = [
    { id: 1, category: 'Tshirt', name: 'Red T-Shirt', image: 'https://media.istockphoto.com/id/1354031012/photo/red-t-shirt-mockup-men-as-design-template-tee-shirt-blank-isolated-on-white-front-view.jpg?s=612x612&w=0&k=20&c=_5QLLkUa0-ZzSK1rp6Ie-ZRBPOEku4as4ZMrZg-y2GI=', price: 19.99 },
    { id: 2, category: 'Hoodie', name: 'Blue Hoodie', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_yyvvSumpRxDfOjclzjYLRfaA-eOfMTOsQ&s', price: 39.99 },
    { id: 3, category: 'Hoodie', name: 'Green Hoodie', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWm0Xwbr4uGGtqXNXR7bWRtdAGaa5wb7d3Q&s', price: 29.99 },
    { id: 4, category: 'Jacket', name: 'Yellow Jacket', image: 'https://thumbs.dreamstime.com/b/kids-yellow-jacket-fashion-cloth-isolated-white-background-163930226.jpg', price: 49.99 },
    { id: 5, category: 'Jeans', name: 'Black Jeans', image: 'https://assets.ajio.com/medias/sys_master/root/20220429/P9RU/626bf0dbaeb26921af4b904a/-473Wx593H-441142419-black-MODEL.jpg', price: 49.99 },
    { id: 6, category: 'Jeans', name: 'Dark Blue Jeans', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSBzLaihORTkgcDt3lnxNH3CKpOMsqRPgnA&s', price: 19.99 },
    { id: 7, category: 'Tshirt', name: 'Black T-Shirt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmIr1RO3UVBGixXCQ-rKpZvaTwYwSlY_xqw&s', price: 25.99 },
    { id: 8, category: 'Tshirt', name: 'Another Black T-Shirt', image: 'https://media.istockphoto.com/id/1134011734/photo/mens-grey-blank-t-shirt-template-from-two-sides-natural-shape-on-invisible-mannequin-for-your.jpg?s=612x612&w=0&k=20&c=pYSbXt4B308_BLGvLxNjRe_2zKBmF0GMN-QCBAtbMhc=', price: 27.99 },
    { id: 9, category: 'Tshirt', name: 'Yellow T-Shirt', image: 'https://5.imimg.com/data5/FW/GT/MY-23375112/men-s-yellow-color-t-shirt-500x500.jpg', price: 68.99 },
    { id: 10, category: 'Sneakers', name: 'Black Sneakers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOKbAcO_8v31z-yPQlVIbbBYMT4-ERmuq-Q&s', price: 89.99 },
    { id: 10, category: 'Sneakers', name: 'blue Sneakers', image: 'https://media.istockphoto.com/id/495204892/photo/sneakers.jpg?s=612x612&w=0&k=20&c=QSkl09_Rx2lvayG93dWBmoCsVPThoAB1VgcSyh6Jy_4=', price: 89.99 },
    { id: 11, category: 'Jeans', name: 'Blue Jeans', image: 'https://static.zara.net/photos///2023/I/0/3/p/1538/702/400/2/w/824/1538702400_6_1_1.jpg?ts=1690377594899', price: 110.99 },
    { id: 12, category: 'Jeans', name: 'Black-Blue Jeans', image: 'https://assets.ajio.com/medias/sys_master/root/20221019/4ikf/634fd570aeb269659c4d89d0/-1117Wx1400H-441148958-darkblue-MODEL.jpg', price: 64.99 },
];


app.use(cors());

app.get('/api/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const filteredItems = clothingItems.filter(item => item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query));
    res.json(filteredItems);
});

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
