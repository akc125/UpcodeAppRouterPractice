"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import DetaildButton from "../buttons/detaildButton";

function Card(props: any) {
  const prod = props.products;
  useEffect(() => {
    const res = fetch("https://fakestoreapi.com/products/1", {
      cache: "no-store",
    });
  }, []);
  return (
    <>
      <Link href={`/product/${prod.category}/${prod.id}`}>
        {" "}
        <img src={prod.image} style={{ width: "50px" }}></img>{" "}
        <p>{prod.title}</p>
      </Link>
      <DetaildButton prodectId={prod.id}></DetaildButton>
      <br></br>
    </>
  );
}

export default Card;
