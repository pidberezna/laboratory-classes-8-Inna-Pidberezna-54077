const Product = require('../models/Product');
const Cart = require('../models/Cart');

const { STATUS_CODE } = require('../constants/statusCode');

exports.addProductToCart = async (request, response) => {
  const productName = request.body.name;
  const product = await Product.findByName(productName);

  if (product) {
    await Cart.add(product);
  }

  response.status(STATUS_CODE.OK).json({ success: true });
};

exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};
