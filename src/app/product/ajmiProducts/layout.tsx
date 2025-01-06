import React from "react";

function AjmiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>it is ajmi layout</p>
      {children}
    </div>
  );
}

export default AjmiLayout;
