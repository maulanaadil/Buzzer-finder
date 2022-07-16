import { NextPage } from "next";
import React from "react";

import styles from "../styles/Result.module.css";
import { useBuzzerStore } from "../services/zustand";
import { Card, Button } from "@/components";
import { useRouter } from "next/router";

const Result: NextPage = () => {
  const { buzzer, search_result } = useBuzzerStore();
  const router = useRouter();

  const handleClickGoBackPage = () => {
    return router.back();
  };

  return (
    <div className={styles.container}>
      <Button
        variant='primary'
        onClick={handleClickGoBackPage}
        className={styles.btnBack}
      >
        Back
      </Button>
      <h1 className={styles.title}>Buzzer Finder</h1>
      <h2 className={styles.searchResult}>{search_result}</h2>
      <div className={styles.cardContainer}>
        {buzzer?.data[0] &&
          buzzer?.data[0].map((value) => (
            <Card username={value.account_name} />
          ))}
      </div>
    </div>
  );
};

export default Result;
