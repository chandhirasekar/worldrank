import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/components/Layout/layout";
import Search from "@/components/SearchInput/search";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ countries }) {
  const [key, setKey] = useState("");
  const inputValue = (e) => {
    setKey(e.target.value.toLowerCase());
  };
  // console.log(key);
  useEffect(() => {
    handleServer();
  }, []);
  const handleServer = async () => {
    const resp = await fetch("/api/hello");
    const data = await resp.json();

    console.log(data);
  };
  return (
    <>
      <Layout>
        <div className={styles.count}>Found {countries.length} countries</div>
        <Search
          placeHolder="Filter by name,Region or subregion "
          onChange={inputValue}
        />
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
}
