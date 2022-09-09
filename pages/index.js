import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import AddRecord from './AddRecord';
import Paciente from './components/Paciente';
import Dashboard from './Dashboard';
import Login from './Login';

export default function Home() {
  return (
    <>
      <Paciente />
      {/* <Dashboard /> */}
    </>
  );
}
