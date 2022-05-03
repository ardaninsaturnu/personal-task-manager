import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {Divider} from 'antd';
import logos from '../public/images/defaultlogo.png';
import InputComponent from "../components/InputComponent";
import ListComponent from "../components/ListComponent";
import TableComponent from "../components/TableComponent";
import store from '../store';
import {Provider} from 'react-redux';

export default function Home() {
  return (
    <Provider store={store} className={styles.container}>
      <Head>
        <title>Personal Task manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
        <Image src={logos} width={80} height={80}/>
      </header>
      <Divider/>
      <InputComponent/>
      <Divider/>
      <ListComponent/>
      <TableComponent/>
    </Provider>
  )
}
