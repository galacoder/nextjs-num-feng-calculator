import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Block } from "baseui/block";
import { useStyletron } from "baseui";

function Layout({ children }) {
  const [css, theme] = useStyletron();
  //TODO: This need to double check and work next
  const blockStyle = css({
    paddingTop: "100px",
  });

  return (
    <Block class={blockStyle}>
      <Header />
      {children}
      <Footer />
    </Block>
  );
}

export default Layout;
