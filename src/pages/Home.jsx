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
   

