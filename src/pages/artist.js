import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import ArtistImg from './../images/artist-hero.jpg';
import Layout from './../components/layout.js';

//Lightbox needs the following:::
import Gallery from './../components/Gallery';

/* import thumbnails + images */
import thumb01 from './../images/artist/thumbs/2019-fineArt1-thumb.jpg';
import thumb02 from './../images/artist/thumbs/2019-fineArt2-thumb.jpg';
import thumb03 from './../images/artist/thumbs/2019-fineArt3-thumb.jpg';
import thumb04 from './../images/artist/thumbs/2019-fineArt4-thumb.jpg';
import thumb05 from './../images/artist/thumbs/2019-fineArt5-thumb.jpg';
import thumb06 from './../images/artist/thumbs/deer-portal-thumb.jpg';
import thumb07 from './../images/artist/thumbs/floor-work-thumb.jpg';
import thumb08 from './../images/artist/thumbs/fox-portal-thumb.jpg';
import thumb09 from './../images/artist/thumbs/lady-justice-thumb.jpg';
import thumb10 from './../images/artist/thumbs/in-peace-thumb.jpg';
import thumb11 from './../images/artist/thumbs/mermaid-commission-thumb.jpg';
import thumb12 from './../images/artist/thumbs/she-had-a-bite-thumb.jpg';
import thumb13 from './../images/artist/thumbs/closer-to-the-moon-thumb.jpg';
import thumb14 from './../images/artist/thumbs/loggedIn-thumb.jpg';
import thumb15 from './../images/artist/thumbs/loggedOut-thumb.jpg';
import thumb16 from './../images/artist/thumbs/blackHoleSun-thumb.jpg';
import thumb17 from './../images/artist/thumbs/DavidBowie-thumb.jpg';
import thumb18 from './../images/artist/thumbs/NotAllWhoWander-thumb.jpg';
import thumb19 from './../images/artist/thumbs/Prince-thumb.jpg';
import thumb20 from './../images/artist/thumbs/robinWilliams-thumb.jpg';
import thumb21 from './../images/artist/thumbs/Storm-Portal-thumb.jpg';
import thumb22 from './../images/artist/thumbs/Selfie-Sign-thumb.jpg';
import thumb23 from './../images/artist/thumbs/disconnected-dancer-small-thumb.jpg';
import thumb24 from './../images/artist/thumbs/motherChild-thumb.jpg';
import thumb25 from './../images/artist/thumbs/motherChild-detail-thumb.jpg';
import thumb26 from './../images/artist/thumbs/venus-thumb.jpg';
import thumb27 from './../images/artist/barracuda/thumbPainting-1a.jpg';
import thumb28 from './../images/artist/barracuda/thumbPainting-4.jpg';
import thumb29 from './../images/artist/barracuda/thumbPainting-5.jpg';
import thumb30 from './../images/artist/barracuda/thumbPainting-6.jpg';
import thumb31 from './../images/artist/barracuda/thumbPainting-7.jpg';
import thumb32 from './../images/artist/barracuda/thumbPainting-8.jpg';
import thumb33 from './../images/artist/barracuda/thumbPainting-9.jpg';
import thumb34 from './../images/artist/thumbs/2015-faThumb1.jpg';
//import thumb35 from './../images/artist/thumbs/2015-faThumb2.jpg';
import thumb36 from './../images/artist/thumbs/GOYM-thumb.jpg';
import thumb37 from './../images/artist/thumbs/newart1-thumb.jpg';
import thumb38 from './../images/artist/thumbs/newart2-thumb.jpg';
import thumb39 from './../images/artist/thumbs/newart3-thumb.jpg';
import thumb40 from './../images/artist/thumbs/newart4-thumb.jpg';
import thumb41 from './../images/artist/thumbs/reg-thumb4.jpg';
import thumb42 from './../images/artist/thumbs/reg-thumb5.jpg';
import thumb43 from './../images/artist/thumbs/reg-thumb7.jpg';
import thumb44 from './../images/artist/thumbs/reg-thumb8.jpg';
import thumb45 from './../images/artist/thumbs/fa4-thumb.jpg';
import thumb46 from './../images/artist/thumbs/fa6-thumb.jpg';
import thumb47 from './../images/artist/thumbs/fa7-thumb.jpg';

import full01 from './../images/artist/2019-fineArt1.jpg';
import full02 from './../images/artist/2019-fineArt2.jpg';
import full03 from './../images/artist/2019-fineArt3.jpg';
import full04 from './../images/artist/2019-fineArt4.jpg';
import full05 from './../images/artist/2019-fineArt5.jpg';

import full06 from './../images/artist/deer-portal.jpg';
import full07 from './../images/artist/floor-work.jpg';
import full08 from './../images/artist/fox-portal.jpg';
import full09 from './../images/artist/lady-justice.jpg';
import full10 from './../images/artist/in-peace.jpg';
import full11 from './../images/artist/mermaid-commission.jpg';
import full12 from './../images/artist/she-had-a-bite.jpg';
import full13 from './../images/artist/closer-to-the-moon.jpg';
import full14 from './../images/artist/loggedIn.jpg';
import full15 from './../images/artist/loggedOut.jpg';
import full16 from './../images/artist/blackHoleSun.jpg';
import full17 from './../images/artist/DavidBowie.jpg';
import full18 from './../images/artist/NotAllWhoWander.jpg';
import full19 from './../images/artist/Prince.jpg';
import full20 from './../images/artist/robinWilliams.jpg';
import full21 from './../images/artist/Storm-Portal.jpg';
import full22 from './../images/artist/Selfie-Sign.jpg';
import full23 from './../images/artist/disconnected-dancer-small.jpg';
import full24 from './../images/artist/motherChild.jpg';
import full25 from './../images/artist/motherChild-detail.jpg';
import full26 from './../images/artist/venus-16.jpg';
import full27 from './../images/artist/barracuda/web-painting-1a.jpg';
import full28 from './../images/artist/barracuda/web-painting-4.jpg';
import full29 from './../images/artist/barracuda/web-painting-5.jpg';
import full30 from './../images/artist/barracuda/web-painting-6.jpg';
import full31 from './../images/artist/barracuda/web-painting-7.jpg';
import full32 from './../images/artist/barracuda/web-painting-8.jpg';
import full33 from './../images/artist/barracuda/web-painting-9.jpg';
import full34 from './../images/artist/2015-fineArt1.jpg';
//import full35 from './../images/artist/2015-fineArt2.jpg';
import full36 from './../images/artist/GOYM.jpg';
import full37 from './../images/artist/newart1.jpg';
import full38 from './../images/artist/newart2.jpg';
import full39 from './../images/artist/newart3.jpg';
import full40 from './../images/artist/newart4.jpg';
import full41 from './../images/artist/reg-large4.jpg';
import full42 from './../images/artist/reg-large5.jpg';
import full43 from './../images/artist/reg-large7.jpg';
import full44 from './../images/artist/reg-large8.jpg';
import full45 from './../images/artist/fa4.jpg';
import full46 from './../images/artist/fa6.jpg';
import full47 from './../images/artist/fa7.jpg';


//2023
import thumb23_1 from './../images/artist/2023/thumb/aquarius-thumb.jpg';
import thumb23_2 from './../images/artist/2023/thumb/blotTest-thumb.jpg';
import thumb23_3 from './../images/artist/2023/thumb/britneysWeight-thumb.jpg';
import thumb23_4 from './../images/artist/2023/thumb/consumed-thumb.jpg';
import thumb23_4a from './../images/artist/2023/thumb/darkAge-thumb.jpg';
import thumb23_5 from './../images/artist/2023/thumb/enjoyTheSilence-thumb.jpg';
import thumb23_6 from './../images/artist/2023/thumb/frida-thumb.jpg';
import thumb23_7 from './../images/artist/2023/thumb/juicy-thumb.jpg';
import thumb23_8 from './../images/artist/2023/thumb/kobeGigi-thumb.jpg';
import thumb23_9 from './../images/artist/2023/thumb/makeLove-thumb.jpg';
import thumb23_10 from './../images/artist/2023/thumb/risingStar-thumb.jpg';
import thumb23_11 from './../images/artist/2023/thumb/ruthBader-thumb.jpg';
import thumb23_12 from './../images/artist/2023/thumb/starWalker-thumb.jpg';
import thumb23_13 from './../images/artist/2023/thumb/taurus-thumb.jpg';
import thumb23_14 from './../images/artist/2023/thumb/theChain-thumb.jpg';
import thumb23_15 from './../images/artist/2023/thumb/thunderC-thumb.jpg';
import thumb23_16 from './../images/artist/2023/thumb/wreckYourself-thumb.jpg';
import thumb23_17 from './../images/artist/2023/thumb/madonnaChild-thumb.jpg';



//2023
import full23_1 from './../images/artist/2023/aquarius.jpg';
import full23_2 from './../images/artist/2023/blotTest.jpg';
import full23_3 from './../images/artist/2023/britneysWeight.jpg';
import full23_4 from './../images/artist/2023/consumed.jpg';
import full23_4a from './../images/artist/2023/darkAge.jpg';
import full23_5 from './../images/artist/2023/enjoyTheSilence.jpg';
import full23_6 from './../images/artist/2023/frida.jpg';
import full23_7 from './../images/artist/2023/juicy.jpg';
import full23_8 from './../images/artist/2023/kobeGigi.jpg';
import full23_9 from './../images/artist/2023/makeLove.jpg';
import full23_10 from './../images/artist/2023/risingStar.jpg';
import full23_11 from './../images/artist/2023/ruthBader.jpg';
import full23_12 from './../images/artist/2023/starWalker.jpg';
import full23_13 from './../images/artist/2023/taurus.jpg';
import full23_14 from './../images/artist/2023/theChain.jpg';
import full23_15 from './../images/artist/2023/thunderC.jpg';
import full23_16 from './../images/artist/2023/wreckYourself.jpg';
import full23_17 from './../images/artist/2023/madonnaChild.jpg';



//Youtube :::: Coding with Jesse:::

const ARTIST_IMAGES = [
  {
    id: '1',
    src: full23_1,
    thumbnail: thumb23_1,
    caption: ' Aquarius | 24x24 in | acrylic, oil on canvas | 2022'
  },
  {
    id: '2',
    src: full23_2,
    thumbnail: thumb23_2,
    caption: 'Blot Test | 48x72 in | acrylic, oil on canvas | 2019'
  },
  {
    id: '3',
    src: full23_3,
    thumbnail: thumb23_3,
    caption: 'Britney’s Weight | 48x72 in | acrylic, oil on canvas | 2022'
  },
  {
    id: '4',
    src: full23_4,
    thumbnail: thumb23_4,
    caption: 'Consumed by Your Own Devices | 36x48 in'
  },
  {
    id: '4a',
    src: full23_4a,
    thumbnail: thumb23_4a,
    caption: 'The Dark Age | 15x30 in | 2021'
  },
  {
    id: '5',
    src: full23_5,
    thumbnail: thumb23_5,
    caption: 'Enjoy the Silence | 24x18 in | acrylic, oil on canvas | 2016'
  },
  {
    id: '6',
    src: full23_6,
    thumbnail: thumb23_6,
    caption: 'Frida | 18x24 in | acrylic, oil on canvas | 2022'
  },
  {
    id: '7',
    src: full23_7,
    thumbnail: thumb23_7,
    caption: 'Juicy | 11x14 in | acrylic, oil on canvas | 2022'
  },
  {
    id: '8',
    src: full23_8,
    thumbnail: thumb23_8,
    caption: 'Kobe & Gigi memorial | 30x40 in | acrylic, oil on canvas | 2020'
  },
  {
    id: '9',
    src: full23_9,
    thumbnail: thumb23_9,
    caption: 'Make Love | 48x24 in | acrylic, oil on canvas | 2022'
  },  
  {
    id: '10',
    src: full23_10,
    thumbnail: thumb23_10,
    caption: 'Rising Star | 16x40 in | acrylic, oil on canvas | 2022'
  },
  {
    id: '11',
    src: full23_11,
    thumbnail: thumb23_11,
    caption: 'Ruth Bader Ginsburg | 16x20 in | acrylic, oil on canvas | 2022'
  },
  {
    id: '12',
    src: full23_12,
    thumbnail: thumb23_12,
    caption: 'Star Walker | 11x20 in | acrylic, oil on canvas | 2022'
  },
  {
    id: '13',
    src: full23_13,
    thumbnail: thumb23_13,
    caption: 'Taurus | 24x24 in | acrylic, oil on canvas | 2022'
  },
  {
    id: '14',
    src: full23_14,
    thumbnail: thumb23_14,
    caption: 'The Chain | 36x48 in | acrylic, oil on canvas | 2022'
  },  
  {
    id: '15',
    src: full23_15,
    thumbnail: thumb23_15,
    caption: 'ThunderC | 30x24 in | acrylic, oil on canvas | 2018'
  },
  
  {
    id: '16',
    src: full23_16,
    thumbnail: thumb23_16,
    caption: 'Wreck Yourself | 18x24 in | acrylic, oil on canvas | 2021'
  },

  ////before 2023:::
  {
    id: '17',
    src: full01,
    thumbnail: thumb01,
    caption: ' iCloud | 24x18 in | acrylic and oil | SOLD | SOLD',
    sold: true
  },
  {
    id: '18',
    src: full02,
    thumbnail: thumb02,
    caption: 'Star Goat | 15 in diameter | acrylic and oil'
  },
  {
    id: '19',
    src: full03,
    thumbnail: thumb03,
    caption: 'Hungry Like the Wolf | 35x24 in | acrylic and oil'
  },
  {
    id: '20',
    src: full04,
    thumbnail: thumb04,
    caption: 'Vampire | 18x24 in | acrylic and oil'
  },
  { id: '21', src: full05, thumbnail: thumb05, caption: '' },
  {
    id: '22',
    src: full06,
    thumbnail: thumb06,
    caption:
      'Deer Portal | 16x20 in | Acrylic and oil on wood panel | 2018'
  },
  {
    id: '23',
    src: full07,
    thumbnail: thumb07,
    caption:
      'Floor Work | 11x14 in | Acrylic, oil, puff paint, glitter and resin on canvas | 2018'
  },
  {
    id: '24',
    src: full08,
    thumbnail: thumb08,
    caption:
      'Fox Portal | 16x20 in | Acrylic and oil on wood panel | 2018'
  },
  {
    id: '25',
    src: full09,
    thumbnail: thumb09,
    caption: 'Lady Justice | 11x14 in | Acrylic and oil on canvas | 2018'
  },
  {
    id: '26',
    src: full10,
    thumbnail: thumb10,
    caption: 'In Peace | 24x36 in | Puff paint and oil on canvas | 2018'
  },
  {
    id: '27',
    src: full11,
    thumbnail: thumb11,
    caption: 'Mermaid | 24x48 in | Acrylic and oil on wood panel | 2018'
  },
  {
    id: '28',
    src: full12,
    thumbnail: thumb12,
    caption:
      'She Had a Bite | 20x16 in | Acrylic, paper collage, glitter and resin | 2018'
  },
  {
    id: '29',
    src: full13,
    thumbnail: thumb13,
    caption: 'Closer to the Moon | 24x30 in | Oil on canvas | 2018'
  },
  {
    id: '30',
    src: full14,
    thumbnail: thumb14,
    caption: 'Logged In | 51x 41in | acrylic and oil on wood panel'
  },
  {
    id: '31',
    src: full15,
    thumbnail: thumb15,
    caption: 'Logged Out | 36x18 in | acrylic and Oil on Canvas | 2017'
  },
  {
    id: '32',
    src: full16,
    thumbnail: thumb16,
    caption: 'Chris Cornell | 18x24 in | acrylic and oil on canvas | 2017'
  },
  {
    id: '33',
    src: full17,
    thumbnail: thumb17,
    caption: 'David Bowie | 24x18 in | Oil on canvas | 2017'
  },
  {
    id: '34',
    src: full18,
    thumbnail: thumb18,
    caption:
      'Not All Who Wander Are Lost | 60x36 in | oil and puff paint on wood | 2017',
      sold: false
  },
  {
    id: '35',
    src: full19,
    thumbnail: thumb19,
    caption: 'Prince | 24x36 in | Oil and puff paint on canvas | 2017'
  },
  {
    id: '36',
    src: full20,
    thumbnail: thumb20,
    caption: 'Robin Williams | 30x24 in | Oil on canvas | 2017'
  },
  {
    id: '37',
    src: full21,
    thumbnail: thumb21,
    caption: 'Storm Portal | 24x30 in | Oil on canvas | 2016'
  },
  {
    id: '38',
    src: full22,
    thumbnail: thumb22,
    caption: 'Selfie Sign | 24x18 in | Oil on canvas | 2016'
  },
  {
    id: '39',
    src: full23,
    thumbnail: thumb23,
    caption: 'Disconnected Dancer, | 48x24 in | Oil on canvas | 2016'
  },
  {
    id: '40',
    src: full24,
    thumbnail: thumb24,
    caption: 'Mother and Child v1 | 60x36 in | Acrylic on wood panel'
  },
  {
    id: '41',
    src: full25,
    thumbnail: thumb25,
    caption: 'Mother and Child v1 | 60x36 in | Acrylic on wood panel'
  },
  {
    id: '23_17',
    src: full23_17,
    thumbnail: thumb23_17,
    caption: 'Such a Madonna and Child | 24x36 in | Acrylic on canvas'
  },
  
  {
    id: '42',
    src: full26,
    thumbnail: thumb26,
    caption: 'Venus Mother | 30x38 in | Acrylic on wood panel'
  },
  {
    id: '43',
    src: full27,
    thumbnail: thumb27,
    caption:
      'Wet Paint, Impulsive Indulgence | 36x36 in | Acrylic, paper, resin and glitter on wood'
  },
  {
    id: '44',
    src: full28,
    thumbnail: thumb28,
    caption:
      'Cecil’s Demise | 60x48 in | Acrylic, 3-dimentional paint and resin on wood'
  },
  {
    id: '45',
    src: full29,
    thumbnail: thumb29,
    caption:
      'Burning, Man | 60x72 in| Acrylic, 3-dimensional glitter paint on canvas'
  },
  {
    id: '46',
    src: full30,
    thumbnail: thumb30,
    caption: 'Cinderella’s Division | 48x36 in |Acrylic on canvas '
  },
  {
    id: '47',
    src: full31,
    thumbnail: thumb31,
    caption:
      'Do It Upside Down, The Mating Game | 60x40 in | Acrylic, 3-dimensional paint on canvas'
  },
  {
    id: '48',
    src: full32,
    thumbnail: thumb32,
    caption:
      'Eye, I, Captain | 48 x 36 inches | Acrylic, 3-dimensional glitter paint on canvas'
  },
  {
    id: '49',
    src: full33,
    thumbnail: thumb33,
    caption:
      'I’m Coming | 20 x 16 in | Acrylic, 3-dimensional paint and resin on canvas'
  },
  { id: '50', src: full34, thumbnail: thumb34, caption: '' },
  { id: '51', src: full36, thumbnail: thumb36, caption: '' },
  { id: '52', src: full37, thumbnail: thumb37, caption: '' },
  { id: '53', src: full38, thumbnail: thumb38, caption: '' },
  { id: '54', src: full39, thumbnail: thumb39, caption: '' },
  { id: '55', src: full40, thumbnail: thumb40, caption: '' },
  { id: '56', src: full41, thumbnail: thumb41, caption: '' },
  { id: '57', src: full42, thumbnail: thumb42, caption: '' },
  { id: '58', src: full43, thumbnail: thumb43, caption: '' },
  { id: '59', src: full44, thumbnail: thumb44, caption: '' },
  { id: '60', src: full45, thumbnail: thumb45, caption: '' },
  { id: '61', src: full46, thumbnail: thumb46, caption: '' },
  { id: '62', src: full47, thumbnail: thumb47, caption: '' }
];

export default class ArtistPage extends React.Component {

  render() {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Helmet title={`Artist | ${title}`} />

        <div className="pageContainer artPage">
          <div className="blackBorder" />
          <div className="pageContainer left">
            <img src={ArtistImg} alt="Artist" />
          </div>

          <div className="pageContainer right">
            <Gallery
              images={ARTIST_IMAGES.map(({ id, src, thumbnail, caption, sold }) => ({
                id,
                src,
                thumbnail,
                caption,
                sold
              }))}
            />
          </div>
          <div className="blackBorder" />
        </div>
      </Layout>
    );
  }
}

export const artistQuery = graphql`
  query artistPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
