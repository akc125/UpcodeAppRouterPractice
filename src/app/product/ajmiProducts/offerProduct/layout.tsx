import React from "react";

function AjmiOfferLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>it is ajmi offer Products layout</p>
      {children}
    </div>
  );
}

export default AjmiOfferLayout;
