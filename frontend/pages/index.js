import Head from 'next/head';
import { /*Link,*/ useEffect, useState } from 'react';
import { Button } from '@mui/material';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import Link from 'next/link'

const Home = () => {
  // const [data, setData] = useState("");
  // const [searchparams, setSearchparams] = useState();

  // useEffect(() => {
    
  //   setData (express.send('http:locaslhost.. url back/searchTitle', title))
  // }, [searchparams])

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/search_results">
        Search Results
      </Link>
    </div>
      
  );
}

export default Home;
