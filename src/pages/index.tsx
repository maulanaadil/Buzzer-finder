import Axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Button, Input } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("keyword", keyword);

    Axios({
      method: "post",
      url: "http://35.198.243.157/buzzerfinder",
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.mainContainer}>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.title}>Buzzer Finder</h2>
          <h4 className={styles.desc}>
            Find influencers and increase your engagment!
          </h4>
          <div className={styles.main}>
            <Input
              type='text'
              name='keyword'
              placeholder='Enter keyword e.g #jakarta'
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button type='submit' variant='primary' onClick={() => {}}>
              Search
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Home;