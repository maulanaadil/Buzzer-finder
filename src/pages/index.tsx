import type { NextPage } from 'next';
import Router from 'next/router';
import React, { FormEvent, useState } from 'react';

import { SearchBuzzer } from '@/modules';

import { useBuzzerStore } from '../services/zustand';
import styles from '../styles/Home.module.css';
import axios from 'axios';

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    useBuzzerStore.getState().setSearchResult(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('keyword', keyword);

    axios
      .post('https://rubahsaktidev.me/buzzerfinder', formData, {
        onDownloadProgress: (ProgressEvent) => {},
      })
      .then((res) => {
        useBuzzerStore.getState().setBuzzer(res.data);
        return Router.push('/result');
      })
      .catch((err) => {
        console.log(err);
        alert('Tidak ada hashtag tersebut!');
      });
  };

  return (
    <div className={styles.container}>
      <main className={styles.mainContainer}>
        <SearchBuzzer handleChange={handleChange} handleSubmit={handleSubmit} />
      </main>
    </div>
  );
};

export default Home;
