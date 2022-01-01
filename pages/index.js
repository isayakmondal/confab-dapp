import Head from 'next/head'
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Login from '../components/Login'
import Messages from '../components/Messages';

export default function Home() {

  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-amber-900 overflow-hidden">
      <Head>
        <title>Convo Dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Welcome to Metaverse</h1>
      <button onClick={logout}>Logout</button> */}
        <div className='max-w-screen-2xl mx-auto'>
         
         <Header/>
         <Messages/>
       </div>
    </div>
  )
}
