import React from "react";
import Browse from "../../../pages/browse/Browse";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function PageLayout() {
  return (
    <React.Fragment>
      <Header />
      <Browse />
      <Footer />
    </React.Fragment>
  );
}

export default PageLayout;
