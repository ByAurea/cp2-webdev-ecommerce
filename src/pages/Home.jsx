import { useState, useEffect } from "react";
import Card from "../components/Card"
import Navbar from "../components/Navbar";
import Section from "../components/Section";

export default function Home() {

  const [eletronics, setEletronics] = useState ([])
  const [jewlery, setJewlery] = useState ([])
  const [mens_clothing, setMens_clothing] = useState ([])

    const API = import.meta.env.VITE_API_URL;
 
  useEffect(() => {
    fetch(`${API}/category/electronics`)
      .then((response) => response.json())
      .then((data) => setEletronics(data));
 
    fetch(`${API}/category/jewelery`)
      .then((response) => response.json())
      .then((data) => setJewlery(data));
     
    fetch(`${API}/category/men's%20clothing`)
      .then((response) => response.json())
      .then((data) => setMens_clothing(data));
  },[]);
 
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4 mt-4">
        Bem-vindo ao Fiap Commerce!
      </h2>
 
      <Section titulo="Eletrônicos">
 
        {eletronics.map((product) => (
          <Card
            {...product}
          />
        ))}
 
      </Section>
 
      <Section titulo="Joias">
 
        {jewlery.map((product) => (
          <Card
            {...product}
          />
        ))}
 
      </Section>
 
      <Section titulo="Vestimenta Masculina">
 
        {mens_clothing.map((product) => (
          <Card
            {...product}
          />
        ))}
 
      </Section>

    </div>
  );
}
   



    // <div>

    //     <div className="text-center bg-black text-amber-300 text-4xl pt-8 pb-8">Eletrônicos</div>
    //       <h1 className="text-xl font-medium text-center p-5">Produtos em destaque</h1>
    //       <Card></Card>
    //     <div className="text-center bg-black text-amber-300 text-4xl pt-8 pb-8">Joias</div>
    //       <h1 className="text-xl font-medium text-center p-5">Produtos em destaque</h1>
    //       <Card></Card>
    //     <div className="text-center bg-black text-amber-300 text-4xl pt-8 pb-8">Roupas Masculinas</div>
    //       <h1 className="text-xl font-medium text-center p-5">Produtos em destaque</h1>
    //       <Card></Card>          

    // </div>
 

