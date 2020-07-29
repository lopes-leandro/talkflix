import React from 'react';
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import dataBase from "./data/dados_iniciais.json";

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu/>
      <BannerMain videoTitle={dataBase.categorias[0].videos[0].titulo}
       url={dataBase.categorias[0].videos[0].url}
       videoDescription={""}/>
       <Carousel ignoreFirstVideo
       category={dataBase.categorias[0]}/>
       <Carousel category={dataBase.categorias[1]}/>
       <Carousel category={dataBase.categorias[2]}/>
       <Carousel category={dataBase.categorias[3]}/>
       <Carousel category={dataBase.categorias[4]}/>
      <Footer/>
    </div>
  );
}

export default App;
