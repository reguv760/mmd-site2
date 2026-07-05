import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import PublicArtImage from './../images/publicArt-hero.jpg';
import Layout from './../components/layout.js';

//Lightbox needs the following:::
import Gallery from './../components/Gallery';

/* import thumbnails + images */
import BBLegendsThumb from './../images/publicart/thumbs/BB-legends_thumb.jpg';
import RuthThumb from './../images/publicart/thumbs/ruth_thumb.jpg';
import DragonThumb from './../images/publicart/thumbs/dragon_thumb.jpg';
import paThumb01 from './../images/publicart/thumbs/2019-publicArt1-thumb.jpg';
import paThumb02 from './../images/publicart/thumbs/2019-publicArt2-thumb.jpg';
import paThumb03 from './../images/publicart/thumbs/2019-publicArt3-thumb.jpg';

import BBLegends from './../images/publicart/BB-legends.jpg';
import Ruth from './../images/publicart/ruth.jpg';
import Dragon from './../images/publicart/dragon.jpg';
import paFull01 from './../images/publicart/2019-publicArt-1.jpg';
import paFull02 from './../images/publicart/2019-publicArt-2.jpg';
import paFull03 from './../images/publicart/2019-publicArt-3.jpg';

//octopus
import octThumb1 from './../images/publicart/thumbs/octupus-1_thumb.jpg';
import octThumb2 from './../images/publicart/thumbs/octupus-2_thumb.jpg';
import octThumb3 from './../images/publicart/thumbs/octupus-3_thumb.jpg';

import octFull1 from './../images/publicart/octupus-1.jpg';
import octFull2 from './../images/publicart/octupus-2.jpg';
import octFull3 from './../images/publicart/octupus-3.jpg';

//kobe
import KobeThumb1 from './../images/publicart/thumbs/kobe-1_thumb.jpg';
import KobeThumb2 from './../images/publicart/thumbs/kobe-2_thumb.jpg';
import KobeThumb3 from './../images/publicart/thumbs/kobe-3_thumb.jpg';
import KobeThumb4 from './../images/publicart/thumbs/kobe-4_thumb.jpg';
import KobeThumb5 from './../images/publicart/thumbs/kobe-5_thumb.jpg';
import KobeThumb6 from './../images/publicart/thumbs/kobe-6_thumb.jpg';
import KobeThumb7 from './../images/publicart/thumbs/kobe-7_thumb.jpg';
import KobeThumb8 from './../images/publicart/thumbs/kobe-8_thumb.jpg';

import KobeFull1 from './../images/publicart/kobe-1.jpg';
import KobeFull2 from './../images/publicart/kobe-2.jpg';
import KobeFull3 from './../images/publicart/kobe-3.jpg';
import KobeFull4 from './../images/publicart/kobe-4.jpg';
import KobeFull5 from './../images/publicart/kobe-5.jpg';
import KobeFull6 from './../images/publicart/kobe-6.jpg';
import KobeFull7 from './../images/publicart/kobe-7.jpg';
import KobeFull8 from './../images/publicart/kobe-8.jpg';

//mermaid::
import MermaidThumb1 from './../images/publicart/thumbs/mermaid-1_thumb.jpg';
import MermaidThumb2 from './../images/publicart/thumbs/mermaid-2_thumb.jpg';

import MerMaid1 from './../images/publicart/mermaid-1.jpg';
import MerMaid2 from './../images/publicart/mermaid-2.jpg';

//legends:::
import LegendsThumb1 from './../images/publicart/thumbs/legends-1_thumb.jpg';
import LegendsThumb2 from './../images/publicart/thumbs/legends-1-1_thumb.jpg';
import LegendsThumb3 from './../images/publicart/thumbs/legends-2_thumb.jpg';
import LegendsThumb4 from './../images/publicart/thumbs/legends-3_thumb.jpg';
import LegendsThumb5 from './../images/publicart/thumbs/legends-4_thumb.jpg';
import LegendsThumb6 from './../images/publicart/thumbs/legends-5_thumb.jpg';
import LegendsThumb7 from './../images/publicart/thumbs/legends-6_thumb.jpg';
import LegendsThumb8 from './../images/publicart/thumbs/legends-7_thumb.jpg';
import LegendsThumb9 from './../images/publicart/thumbs/legends-8_thumb.jpg';
import LegendsThumb10 from './../images/publicart/thumbs/legends-9_thumb.jpg';

import Legends1 from './../images/publicart/legends-1.jpg';
import Legends2 from './../images/publicart/legends-1-1.jpg';
import Legends3 from './../images/publicart/legends-2.jpg';
import Legends4 from './../images/publicart/legends-3.jpg';
import Legends5 from './../images/publicart/legends-4.jpg';
import Legends6 from './../images/publicart/legends-5.jpg';
import Legends7 from './../images/publicart/legends-6.jpg';
import Legends8 from './../images/publicart/legends-7.jpg';
import Legends9 from './../images/publicart/legends-8.jpg';
import Legends10 from './../images/publicart/legends-9.jpg';

//euphoros
import euphorosThumb1 from './../images/publicart/thumbs/euphoros-1_thumb.jpg';
import euphorosThumb2 from './../images/publicart/thumbs/euphoros-2_thumb.jpg';
import euphorosThumb3 from './../images/publicart/thumbs/euphoros-3_thumb.jpg';

import euphorosFull1 from './../images/publicart/euphoros-1.jpg';
import euphorosFull2 from './../images/publicart/euphoros-2.jpg';
import euphorosFull3 from './../images/publicart/euphoros-3.jpg';

//2023
import Thumb1_23 from './../images/publicart/thumbs/23-mural1-thumb.jpg';
import Thumb2_23 from './../images/publicart/thumbs/23-mural2-thumb.jpg';

import Full1_23 from './../images/publicart/23-mural1.jpg';
import Full2_23 from './../images/publicart/23-mural2.jpg';

//2025

import MURALS25_thumb1 from './../images/publicart/thumbs/publicArt-25_thumb1.jpg';
import MURALS25_thumb2 from './../images/publicart/thumbs/publicArt-25_thumb2.jpg';
import MURALS25_thumb3 from './../images/publicart/thumbs/publicArt-25_thumb3.jpg';
import MURALS25_thumb4 from './../images/publicart/thumbs/publicArt-25_thumb4.jpg';


import MURALS2025_1 from './../images/publicart/publicArt-25_1.jpg';
import MURALS2025_2 from './../images/publicart/publicArt-25_2.jpg';
import MURALS2025_3 from './../images/publicart/publicArt-25_3.jpg';
import MURALS2025_4 from './../images/publicart/publicArt-25_4.jpg';

//2026
import MURALS26_thumb1 from './../images/publicart/2026/thumbs/mural1-thumb.jpg';
import MURALS26_thumb2 from './../images/publicart/2026/thumbs/mural2-thumb.jpg';
import MURALS26_thumb3 from './../images/publicart/2026/thumbs/mural3-thumb.jpg';
import MURALS26_thumb4 from './../images/publicart/2026/thumbs/mural4-thumb.jpg';
import MURALS26_thumb5 from './../images/publicart/2026/thumbs/mural5-thumb.jpg';
import MURALS26_thumb6 from './../images/publicart/2026/thumbs/mural6-thumb.jpg';
import MURALS26_thumb7 from './../images/publicart/2026/thumbs/mural7-thumb.jpg';
import MURALS26_thumb8 from './../images/publicart/2026/thumbs/mural8-thumb.jpg';


import MURALS2026_1 from './../images/publicart/2026/mural-1.jpg';
import MURALS2026_2 from './../images/publicart/2026/mural-2.jpg';
import MURALS2026_3 from './../images/publicart/2026/mural-3.jpg';
import MURALS2026_4 from './../images/publicart/2026/mural-4.jpg';
import MURALS2026_5 from './../images/publicart/2026/mural-5.jpg';
import MURALS2026_6 from './../images/publicart/2026/mural-6.jpg';
import MURALS2026_7 from './../images/publicart/2026/mural-7.jpg';
import MURALS2026_8 from './../images/publicart/2026/mural-8.jpg';



const PUBLICART_26 = [
  { 
    id: '0', 
    src: MURALS2026_1, 
    thumbnail: MURALS26_thumb1,
    caption: `private residence, Lakewood | 2022`
  },
  { 
    id: '1', 
    src: MURALS2026_2, 
    thumbnail: MURALS26_thumb2,
    caption: ``
  },
  { 
    id: '2', 
    src: MURALS2026_3, 
    thumbnail: MURALS26_thumb3,
    caption: `LA landscape | private residence, Simi Valley, CA | 07/2025`
  },
  { 
    id: '3', 
    src: MURALS2026_4, 
    thumbnail: MURALS26_thumb4,
    caption: `Dog Sandworm | private residence, Long Beach, CA | 10/2024`
  },
  { 
    id: '4', 
    src: MURALS2026_5, 
    thumbnail: MURALS26_thumb5,
    caption: `Nursery Nebula | private residence, Wilmington, CA | 09/2025`
  },
  { 
    id: '5', 
    src: MURALS2026_6, 
    thumbnail: MURALS26_thumb6,
    caption: `private residence, Winnetka, CA | 2021`
  },
  { 
    id: '6', 
    src: MURALS2026_7, 
    thumbnail: MURALS26_thumb7,
    caption: `private residence, Winnetka, CA | 2021`
  },
  { 
    id: '7', 
    src: MURALS2026_8, 
    thumbnail: MURALS26_thumb8,
    caption: `private residence, Lakewood, CA | 2022`
  },
  { 
    id: '8', 
    src: BBLegends,
    thumbnail: BBLegendsThumb,
    caption: `Kaptain Fish | 2022`
  },
  { 
    id: '9',
    src: Ruth,
    thumbnail: RuthThumb,  
    caption: `` },
  { 
    id: '10', 
    src: Dragon, 
    thumbnail: DragonThumb,  
    caption: `Quetzalcoatl | 3rd Street Market Tacos & Beer - 4600 3rd street, CA 90022 | 2020` 
  },
  { 
    id: '11', 
    src: paFull03, 
    thumbnail: paThumb03,    
    caption: `private residence, Lakewood, CA | 04/2019` 
  },
  { 
    id: '12', 
    src: paFull02, 
    thumbnail: paThumb02,  
    caption: `private residence, Lakewood, CA | 04/2019`
  },
  { 
    id: '13', 
    src: paFull01, 
    thumbnail: paThumb01,
    caption: `Pier 76 fish grill - Cerritos, CA | 04/2019`
  },
   { 
    id: '14', 
    src: MURALS2025_1, 
    thumbnail: MURALS25_thumb1,
    caption: `Kobe + Freddy Freeman | private residence, Los Angeles, CA | 04/2025`
  },
  { 
    id: '15', 
    src: MURALS2025_2, 
    thumbnail: MURALS25_thumb2,
    caption: `starry portrait | private residence, Long Beach, CA | 02/2025`
  },
  { 
    id: '16', 
    src: MURALS2025_3, 
    thumbnail: MURALS25_thumb3,
    caption: `youth and birds (memorial) | private residence, Lakewood, CA | 05/2025` 
  },
  { 
    id: '17', 
    src: MURALS2025_4, 
    thumbnail: MURALS25_thumb4,  
    caption: `Rodney Dangerfield portrait | 4481 35th St, San Diego, CA | 05/2025`
  },
  { id: '18', 
    src: Full1_23, 
    thumbnail: Thumb1_23,
    caption: `Roland Sands Designs | 2022` 
  },
  { 
    id: '19',
    src: Full2_23, 
    thumbnail: Thumb2_23,
    caption: `private residence, Glendale, CA | 2023` 
  },
];


// const PUBLICART_23 = [
//   { id: '0', 
//     src: Full1_23, 
//     thumbnail: Thumb1_23,
//     caption: `Roland Sands Designs | 2022` 
//   },
//   { 
//     id: '1',
//     src: Full2_23, 
//     thumbnail: Thumb2_23,
//     caption: `private residence, Glendale, CA | 2023` 
//   },
// ];


// const PUBLICART_IMAGES = [
//   { 
//     id: '0', 
//     src: BBLegends,
//     thumbnail: BBLegendsThumb,
//     caption: `Kaptain Fish | 2022`
//   },
//   { 
//     id: '1',
//     src: Ruth,
//     thumbnail: RuthThumb,  
//     caption: `` },
//   { 
//     id: '2', 
//     src: Dragon, 
//     thumbnail: DragonThumb,  
//     caption: `Quetzalcoatl | 3rd Street Market Tacos & Beer - 4600 3rd street, CA 90022 | 2020` 
//   },
//   { 
//     id: '3', 
//     src: paFull03, 
//     thumbnail: paThumb03,    
//     caption: `private residence Lakewood, CA | 04/2019` 
//   },
//   { 
//     id: '4', 
//     src: paFull02, 
//     thumbnail: paThumb02,  
//     caption: `private residence Lakewood, CA | 04/2019`
//   },
//   { 
//     id: '5', 
//     src: paFull01, 
//     thumbnail: paThumb01,
//     caption: `Pier 76 fish grill - Cerritos, CA | 04/2019`
//   }
// ];

const OCTOPUS_IMAGES = [
  { 
    id: '0', 
    src: octFull3,
    thumbnail: octThumb3,
    caption: `Crafty Minds Brews and Bites - Hermosa, CA | 05/2019` 
  },
  { id: '1',
    src: octFull2, 
    thumbnail: octThumb2,
    caption: `Crafty Minds Brews and Bites - Hermosa, CA | 05/2019` 
  },
  { 
    id: '2', 
    src: octFull1,
    thumbnail: octThumb1, 
    caption: `Crafty Minds Brews and Bites - Hermosa, CA | 05/2019` 
  }
];

const KOBENUT_IMAGES = [
  { 
    id: '0',
    src: KobeFull4, 
    thumbnail: KobeThumb4,
    caption: `Superior Nut Co - Los Angeles, CA | 2020`
  },
  { 
    id: '1',
    src: KobeFull2, 
    thumbnail: KobeThumb2,  
    caption: `Superior Nut Co - Los Angeles, CA | 2020`
  },
  { 
    id: '2', 
    src: KobeFull3,
    thumbnail: KobeThumb3,  
    caption: `Superior Nut Co - Los Angeles, CA | 2020`
  },
  { 
    id: '3', 
    src: KobeFull1, 
    thumbnail: KobeThumb1, 
    caption: `Superior Nut Co - Los Angeles, CA | 2020` 
  },
  { 
    id: '4', 
    src: KobeFull5,
    thumbnail: KobeThumb5,
    caption: `Superior Nut Co - Los Angeles, CA | 2020`
  },
  { 
    id: '5', 
    src: KobeFull6, 
    thumbnail: KobeThumb6,
    caption: `Superior Nut Co - Los Angeles, CA | 2020`
  },
  { 
    id: '6', 
    src: KobeFull7, 
    thumbnail: KobeThumb7, 
    caption: `Superior Nut Co - Los Angeles, CA | 2020`
  },
  { 
    id: '7', 
    src: KobeFull8, 
    thumbnail: KobeThumb8,
    caption: `Superior Nut Co - Los Angeles, CA | 2020`
  }
];

const MERMAID_IMAGES = [
  { 
    id: '0', 
    src: MerMaid1, 
    thumbnail: MermaidThumb1,
    caption: `Ocean Caves | Roe Seafood - Long Beach, CA | 06/2019` 
  },
  { 
    id: '1', 
    src: MerMaid2,
    thumbnail: MermaidThumb2,  
    caption: `Ocean Caves | Roe Seafood - Long Beach, CA | 06/2019` 
  }
];

const LEGENDS_IMAGES = [
  { 
    id: '0', 
    src: Legends1, 
    thumbnail: LegendsThumb1,
    caption: `Superior Nut Co - Los Angeles, CA | 2023`
  },
  { 
    id: '1',
    src: Legends2, 
    thumbnail: LegendsThumb2,
    caption: `Superior Nut Co - Los Angeles, CA | 2023`
  },
  { 
    id: '2', 
    src: Legends3, 
    thumbnail: LegendsThumb3, 
    caption: `Superior Nut Co - Los Angeles, CA | 2023`
  },
  { 
    id: '3',
    src: Legends8,
    thumbnail: LegendsThumb8,  
    caption: `Superior Nut Co - Los Angeles, CA | 2023` 
  },
  { 
    id: '4', 
    src: Legends5,
    thumbnail: LegendsThumb5,  
    caption: `Superior Nut Co - Los Angeles, CA | 2023` 
  },
  { 
    id: '5',
    src: Legends4, 
    thumbnail: LegendsThumb4,  
    caption: `Superior Nut Co - Los Angeles, CA | 2023`
  },
  {
    id: '6', 
    src: Legends6, 
    thumbnail: LegendsThumb6,
    caption: `Superior Nut Co - Los Angeles, CA | 2023`
  },
  { 
    id: '7', 
    src: Legends7, 
    thumbnail: LegendsThumb7, 
    caption: `Superior Nut Co - Los Angeles, CA | 2023`
  },
  {
    id: '8', 
    src: Legends9, 
    thumbnail: LegendsThumb9,  
    caption: `Superior Nut Co - Los Angeles, CA | 2023` 
  },
  { 
    id: '9', 
    src: Legends10, 
    thumbnail: LegendsThumb10,
    caption: `Superior Nut Co - Los Angeles, CA | 2023`
  }
];

const EUPHOROS_IMAGES = [
  { 
    id: '0',
    src: euphorosFull1, 
    thumbnail: euphorosThumb1,
    caption: `Doni Kobe mural | Euphoros Dispensary - 2934 N. Broadway Los Angeles 90031 | 03/2022`
  },
  { id: '1', 
    src: euphorosFull2, 
    thumbnail: euphorosThumb2,
    caption: `Doni Kobe mural | Euphoros Dispensary - 2934 N. Broadway Los Angeles 90031 | 03/2022`
  },
  { 
    id: '2', 
    src: euphorosFull3, 
    thumbnail: euphorosThumb3,
    caption: `Doni Kobe mural | Euphoros Dispensary - 2934 N. Broadway Los Angeles 90031 | 03/2022`
  },
];

// const MURALS_25 = [
//   { 
//     id: '0', 
//     src: MURALS2025_1, 
//     thumbnail: MURALS25_thumb1,
//     caption: `Kobe + Freddy Freeman | private residence, Los Angeles, CA | 04/2025`
//   },
//   { 
//     id: '1', 
//     src: MURALS2025_2, 
//     thumbnail: MURALS25_thumb2,
//     caption: `starry portrait | private residence, Long Beach, CA | 02/2025`
//   },
//   { 
//     id: '2', 
//     src: MURALS2025_3, 
//     thumbnail: MURALS25_thumb3,
//     caption: `youth and birds (memorial) | private residence, Lakewood, CA | 05/2025` 
//   },
//   { 
//     id: '3', 
//     src: MURALS2025_4, 
//     thumbnail: MURALS25_thumb4,  
//     caption: `Rodney Dangerfield portrait | 4481 35th St, San Diego, CA | 05/2025` },
// ];

export default class PublicArtPage extends React.Component {

  render() {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Helmet title={`Public Art | ${title}`} />

        <div className="pageContainer graphicPage">
          <div className="blackBorder" />
          <div className="pageContainer left">
            <img src={PublicArtImage} alt="Public Art" />
          </div>

          <div className="pageContainer right">           

            <Gallery
              images={PUBLICART_26.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail,
                caption
              }))}
            />

            {/* <Gallery
              images={MURALS_25.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail,
                caption
              }))}
            />
            
            <Gallery
              images={PUBLICART_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail,
                caption
              }))}
            /> */}

            <Gallery
              images={KOBENUT_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail,
                caption
              }))}
            />

            <Gallery
              images={LEGENDS_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail,
                caption
              }))}
            />                       
            
            <Gallery
              images={EUPHOROS_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail,
                caption
              }))}
            />

            <Gallery
              images={OCTOPUS_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail,
                caption
              }))}
            />       

            {/* <Gallery
              images={PUBLICART_23.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail,
                caption
              }))}
            /> */}

            <Gallery
              images={MERMAID_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail,
                caption
              }))}
            />

          </div>
          <div className="blackBorder" />
        </div>
      </Layout>
    );
  }
}

export const publicArtQuery = graphql`
  query publicArtPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
