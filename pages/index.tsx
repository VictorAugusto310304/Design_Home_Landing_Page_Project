import Head from 'next/head'
import Hero from '../components/Hero'
import Produtos from '../components/Produtos'
import Categorie from '../components/Categorie'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next js | Projetinho do Cria de Website</title>
      </Head>
      <Hero/>
      <Produtos/>
      <Categorie/>
      <Footer/>
    </div>
  )
}
