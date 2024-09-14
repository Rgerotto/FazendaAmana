import { useState } from 'react'
import NavMenu from '../../components/header'
import Footer from '../../components/footer'
import './sobreNos.css'

function App() {


  return (
    <>
      <NavMenu />
      <section className="sobre-nos">
      <h3>sobre nos</h3>
      <p className='text-sobre'> A Fazenda Amana é uma fazenda vertical de referência, localizada em Campinas, 
        no interior de São Paulo. Com mais de cinco anos de experiência, nos especializamos 
        na produção de verduras em miniatura, oferecendo produtos frescos, saudáveis e cultivados 
        de forma sustentável. Nosso compromisso com a excelência na produção hidropônica nos permite 
        entregar alimentos de alta qualidade, cultivados com tecnologia de ponta e responsabilidade 
        ambiental. Nossa missão é oferecer uma solução inovadora para a agricultura urbana, proporcionando 
        alimentos frescos e nutritivos diretamente da fazenda para a mesa dos nossos clientes.
      </p>
      <div className="pic">
        <img src="../../../img/sobrenos2.jpeg" alt="" />
        <img src="../../../img/sobrenos1.jpeg" alt="" />
      </div>
      </section>
      <Footer />
    </>
  )
}

export default App