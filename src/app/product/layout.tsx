import React, { Children } from "react";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>this is product layout</p>
      {children}
    </div>
  );
}
