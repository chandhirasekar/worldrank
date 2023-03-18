import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/components/Layout/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home({countries}) {
  console.log(countries)
  return (
    <>
      <Layout>
        <div>Found {countries.length} countries</div>
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
