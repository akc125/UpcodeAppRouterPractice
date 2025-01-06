import React from "react";
import ProductService from "../../../services/product-service";
// metadata for title
export async function generateMetadata(props: any) {
  const id = props.params.prodectId;
  if (id) {
    var data = await ProductService.getProductById(id);
    return { title: data.title };
  }
  return {
    title: "productDetails",
  };
}

async function ProductDetail(props: any) {
  console.log('ProductDetailByParam33',props)
  const id = props.params.prodectId;
  const category = props.params.categories;
  var data = await ProductService.getProductById(id);
  return <div>{data.title}<h1>{category}</h1></div>;
}

export default ProductDetail;
