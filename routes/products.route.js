const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.get("/products", async (req, res) => {
  const products = await Products.find({});
  res.send(products);
});

router.post("/products", async (req, res) => {
  console.log(req.body);
  const product = await Products.create({
    title: req.body.title,
    price: Number(req.body.price),
    description: req.body.description,
    img: req.body.img,
  });
  return product;
});
router.get("/products/:id", async (req, res) => {
  const product = await Products.findById(req.id);
  if (!product) {
    return "Producto no encontrado";
  }
  return product;
});
router.put("/products/:id", async (req, res) => {
  const product = await Products.findById({ _id: req.body.id });
  if (!product) {
    return "Producto no encontrado";
  }
  Object.assign(product, req.body);
  await product.save();
  res.send(product);
});

router.delete("/products/:id", async (req, res) => {
  console.log(req.params);
  const product = await Products.findById({ _id: req.params.id });
  if (!product) {
    return "Producto no encontrado";
  }
  await product.remove();
  return "Producto eliminado con exito!";
});

module.exports = router;
