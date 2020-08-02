import React, { useEffect, useState } from 'react';
// import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
// import Footer from '../../components/Footer';
// import dataBase from '../../data/dados_iniciais.json';
import categoriesRepository from '../../repositories/api-categories';
import LayoutMaster from '../../components/LayoutMaster';

export default function Home() {
  const [dataBase, setDataBase] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categories) => {
        console.log(categories);
        setDataBase(categories);
      }).catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <LayoutMaster paddingAll={0}>
      {/* {JSON.stringify(dataBase)} */}
      { dataBase.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={dataBase[0].videos[0].title}
                url={dataBase[0].videos[0].url}
                videoDescription=""
              />
              <Carousel
                ignoreFirstVideo
                category={dataBase[0]}
              />
            </div>
          );
        }
        return (
          <Carousel
            key={category.id}
            category={category}
          />

        );
      })}
      {/* <BannerMain
        videoTitle={dataBase.categorias[0].videos[0].titulo}
        url={dataBase.categorias[0].videos[0].url}
        videoDescription=""
      />

      <Carousel
        ignoreFirstVideo
        category={dataBase.categorias[0]}
      />

      <Carousel
        category={dataBase.categorias[1]}
      />

      <Carousel
        category={dataBase.categorias[2]}
      />

      <Carousel
        category={dataBase.categorias[3]}
      />

      <Carousel
        category={dataBase.categorias[4]}
      /> */}

    </LayoutMaster>
  );
}
