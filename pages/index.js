import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Container } from "@mui/material";
import Login from "../components/login/Login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </>
  );
}
