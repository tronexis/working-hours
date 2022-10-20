import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = (props) => {
  const title = props.name + " - App"
  const style = props.notopbar ? 'mainContainer' : 'mainContainerWithTopbar'
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!props.notopbar && <Header />}
      <main className={style}>{props.children}</main>
    </div>
  );
};

export default Layout;
