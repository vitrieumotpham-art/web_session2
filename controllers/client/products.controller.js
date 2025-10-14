const Product = require("../../models/product.model");

module.exports.products = async (req, res) => {
    try {
        const products = await Product.find({
            status:"active",
            deleted: false
        });

        const newProducts=products.map(item =>{
            item.priceNew=(item.price *(100 - item.discountPercentage)/100).toFixed(0);
            return item;
                })
        console.log(newProducts); // ✅ xem console server
        res.render("client/pages/products/product", {
            pageTitle: "trang san pham",
            products:newProducts// dữ liệu truyền sang 
        });
    } catch (error) {
        console.error(error); // xem lỗi
        res.status(500).send("Lỗi server");
    }
}
