const express = require('express');

const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send(`<h1>Home page</h1> <a href="/api/products">products</a>`);
});
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  //  console.log(req.params);

  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product not found');
  }
  res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProduct = [...products];
  if (search) {
    sortedProduct = sortedProduct.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }
  if (sortedProduct.length < 1) {
    // res.status(200).send('no products matched your search');

    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProduct);
  //res.send('hello world');
});
