import Head from 'next/head'
import Image from 'next/image'
import { FaTwitter, FaDiscord, FaTelegram, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ComingSoon() {
  return (
    <div className="container">
      <Head>
        <title>Mellow Finance</title>
        <meta name="description" content="Mellow Finance" />
        <link rel="icon" href="/MLogo.png" />
      </Head>

      <div class="container">

        <main>
          <img src='/lab.svg' height={'75'} style={{marginBottom:"20px"}}></img>
          <h1>labreserve:$ The lab has you...<span class="cursor">|</span></h1>
          <h2 class="loading">Loading</h2>  
        </main>        
      </div>
      <footer>
          <h3>Follow the white icons:</h3>
          <ul className='col list-unstyled d-inline-flex'>
            <li>
              <a href="https://twitter.com/TheLabReserve" target="_blank" rel="noreferrer"><FaTwitter size={"2.5rem"}/></a>
            </li>
            {/* <li>
              <a className='ms-3' href="" target="_blank"><FaDiscord size={"2.5rem"}/></a>
            </li> */}
            <li>
              <a className='ms-3' href="https://t.me/LabReserve" target="_blank" rel="noreferrer"><FaTelegram size={"2.5rem"}/></a>
            </li>
          </ul>
        </footer>
    </div>
  )
}
