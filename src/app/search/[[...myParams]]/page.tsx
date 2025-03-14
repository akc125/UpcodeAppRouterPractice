import React from "react";

function page(props: any) {
  console.log(props);
  return (
    <div>
      localhost:3000/search/hi/h2/h3/h4
      <h1>{props.params.myParams}</h1>
      <h1>{props?.params?.myParams[0]}</h1>
      <h1>{props?.params?.myParams[props?.params?.myParams?.length - 1]}</h1>
    </div>
  );
}

export default page;
