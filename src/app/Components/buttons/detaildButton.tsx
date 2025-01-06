"use client";
import { useRouter } from "next/navigation";
import React from "react";

function DetaildButton(props: any) {
  const id = props.prodectId;
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          //   router.push("/product/" + id, {
          //     scroll: false, // Disable scrolling to the top
          //   });
          router.prefetch("/product/" + id);
        }}
      >
        Details
      </button>
      <button
        onClick={() => {
          router.push("/product", {
            scroll: true,
          });
        }}
      >
        Same Page Navigation
      </button>
    </div>
  );
}

export default DetaildButton;
