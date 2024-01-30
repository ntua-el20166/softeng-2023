import Head from 'next/head';
import { Link, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { Layout } from '/components';

const Home = () => {
  // const [data, setData] = useState("");
  // const [searchparams, setSearchparams] = useState();

  // useEffect(() => {
    
  //   setData (express.send('http:locaslhost.. url back/searchTitle', title))
  // }, [searchparams])

  return (
    <Layout>
      <div>
        home
      </div>
    </Layout>
  );
}

export default Home;
