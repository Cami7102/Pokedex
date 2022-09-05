import "./App.css";
import React, { useState, useEffect } from "react";
import { PokeShow } from "./components/PokeShow";
import API from "./config/api";

function App() {
  const [trainer, setTrainer] = useState();
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/3`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
    console.log(data.trainer);
  };
  useEffect(() => {
    getTrainerId();
  }, []);
return <><h1>Estoy Roto 2g</h1></>
  //return <>{trainer && <PokeShow idPokemon={trainer.id_pokemon}></PokeShow>}</>;
}

export default App;