import React from "react";
import Header from "./../header";
import Footer from "./../footer";
import Head from "next/head";

type Props = React.PropsWithChildren<{}>;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>我的博客</title>
        <meta name="description" content="我的博客" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
