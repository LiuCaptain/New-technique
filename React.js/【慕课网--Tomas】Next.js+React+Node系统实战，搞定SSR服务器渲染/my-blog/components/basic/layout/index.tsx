import React from "react";
import Head from "next/head";
import Header from "@/components/basic/header";
// import Footer from "@/components/basic/footer";
import styles from "./index.module.scss";

type Props = React.PropsWithChildren<{}>;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>我的博客</title>
        <meta name="description" content="我的博客" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main_container}>{children}</main>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Layout;
