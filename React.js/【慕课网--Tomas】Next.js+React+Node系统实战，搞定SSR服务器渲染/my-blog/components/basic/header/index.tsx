import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import { Button, Space } from "antd";

const navigationList = [
  {
    title: "首页",
    url: "/",
  },
  {
    title: "咨询",
    url: "/ask",
  },
  {
    title: "标签",
    url: "/tag",
  },
];

const Header: NextPage = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header_container}>
      <div className={styles.content_box}>
        <div className={styles.logo_box}>
          <Image src="/logo.jpg" alt="logo" width={120} height={40}></Image>
        </div>
        <div className={styles.link_box}>
          {navigationList.map((item, index) => (
            <Link href={item.url} key={index}>
              <div
                className={[styles.each_link, pathname === item.url ? styles.activeLink : ""].join(
                  " ",
                )}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
        <div>
          <Space>
            <Button type="primary">创作中心</Button>
            <Button type="primary" ghost>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </header>
  );
};

export default Header;
