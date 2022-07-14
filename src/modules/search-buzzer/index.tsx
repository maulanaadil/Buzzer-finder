import React from "react";

import { Input, Button } from "../../components";

import { Props } from "./types";
import styles from "./index.module.css";

const SearchBuzzer = ({ handleSubmit, handleChange }: Props) => {
  return (
    <>
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
            onChange={handleChange}
          />
          <Button type='submit' variant='primary'>
            Search
          </Button>
        </div>
      </form>
    </>
  );
};

export default SearchBuzzer;
