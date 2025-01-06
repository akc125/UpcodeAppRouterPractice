import React, { Suspense } from "react";
import Card from "../Components/product-card/card";
import ProductService from "../services/product-service";
import Link from "next/link";
import { Metadata } from "next";
import { Button, Container, useTheme } from "@mui/material";
import Heading from "../Components/buttons/heading";
export const metadata: Metadata = {
  title: "products",
};
async function Products(props: any) {
  console.log(props);
  var data = await ProductService.getProduct();
  return (
    <>
      <Container maxWidth="lg">
        <Button variant="text">Text</Button>
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Link href={"#rc"}>
          <h3>Go To Recommended Products Section</h3>
        </Link>
        <br></br>
        <Suspense fallback={<span>Loading...</span>}>
          {data?.map((p: any) => {
            return <Card key={p.id} products={p}></Card>;
          })}
        </Suspense>
        <Heading></Heading>
      </Container>
    </>
  );
}

export default Products;
