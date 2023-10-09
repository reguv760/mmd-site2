import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import TattooImg from './../images/tattoos-hero.jpg';
import Layout from './../components/layout.js';

//Lightbox needs the following:::
import Gallery from './../components/Gallery';

/* import thumbnails + images */
//before 2020
import thumb04 from './../images/tattoos/2019/thumbs/2019-tattoo4-thumb.jpg';
import thumb05 from './../images/tattoos/2019/thumbs/2019-tattoo5-thumb.jpg';
import thumb07 from './../images/tattoos/2019/thumbs/nick-tat-thumb.jpg';
import thumb08 from './../images/tattoos/2019/thumbs/tat-script1.jpg';
import thumb09 from './../images/tattoos/2019/thumbs/newtat-2.jpg';
import thumb10 from './../images/tattoos/2019/thumbs/reg-thumb1.jpg';
import thumb20 from './../images/tattoos/2019/thumbs/reg-thumb12.jpg';
import thumb24 from './../images/tattoos/2019/thumbs/reg-thumb17.jpg';
import thumb30 from './../images/tattoos/2019/thumbs/tat6.jpg';
import thumb34 from './../images/tattoos/2019/thumbs/tat11.jpg';
import thumb38 from './../images/tattoos/2019/thumbs/tat_2.jpg';

//2021:::
import thumb21_4 from '../images/tattoos/2021-optimized/thumbs/tat4-thumb.jpg';
import thumb21_6 from '../images/tattoos/2021-optimized/thumbs/tat6-thumb.jpg';
import thumb21_8 from '../images/tattoos/2021-optimized/thumbs/tat8-thumb.jpg';
import thumb21_11 from '../images/tattoos/2021-optimized/thumbs/tat11-thumb.jpg';
import thumb21_15 from '../images/tattoos/2021-optimized/thumbs/tat15-thumb.jpg';
import thumb21_17 from '../images/tattoos/2021-optimized/thumbs/tat17-thumb.jpg';
import thumb21_18 from '../images/tattoos/2021-optimized/thumbs/tat18-thumb.jpg';
import thumb21_19 from '../images/tattoos/2021-optimized/thumbs/tat19-thumb.jpg';
import thumb21_20 from '../images/tattoos/2021-optimized/thumbs/tat20-thumb.jpg';
import thumb21_21 from '../images/tattoos/2021-optimized/thumbs/tat21-thumb.jpg';
import thumb21_22 from '../images/tattoos/2021-optimized/thumbs/tat22-thumb.jpg';
import thumb21_23 from '../images/tattoos/2021-optimized/thumbs/tat23-thumb.jpg';
import thumb21_24 from '../images/tattoos/2021-optimized/thumbs/tat24-thumb.jpg';
import thumb21_25 from '../images/tattoos/2021-optimized/thumbs/tat25-thumb.jpg';
import thumb21_26 from '../images/tattoos/2021-optimized/thumbs/tat26-thumb.jpg';
import thumb21_27 from '../images/tattoos/2021-optimized/thumbs/tat27-thumb.jpg';
import thumb21_28 from '../images/tattoos/2021-optimized/thumbs/tat28-thumb.jpg';
import thumb21_29 from '../images/tattoos/2021-optimized/thumbs/tat29-thumb.jpg';
import thumb21_30 from '../images/tattoos/2021-optimized/thumbs/tat30-thumb.jpg';
import thumb21_31 from '../images/tattoos/2021-optimized/thumbs/tat31-thumb.jpg';
import thumb21_32 from '../images/tattoos/2021-optimized/thumbs/tat32-thumb.jpg';
import thumb21_33 from '../images/tattoos/2021-optimized/thumbs/tat33-thumb.jpg';
import thumb21_34 from '../images/tattoos/2021-optimized/thumbs/tat34-thumb.jpg';
import thumb21_35 from '../images/tattoos/2021-optimized/thumbs/tat35-thumb.jpg';
import thumb21_36 from '../images/tattoos/2021-optimized/thumbs/tat36-thumb.jpg';
import thumb21_37 from '../images/tattoos/2021-optimized/thumbs/tat37-thumb.jpg';
import thumb21_38 from '../images/tattoos/2021-optimized/thumbs/tat38-thumb.jpg';
import thumb21_39 from '../images/tattoos/2021-optimized/thumbs/tat39-thumb.jpg';
import thumb21_40 from '../images/tattoos/2021-optimized/thumbs/tat40-thumb.jpg';
import thumb21_41 from '../images/tattoos/2021-optimized/thumbs/tat41-thumb.jpg';
import thumb21_42 from '../images/tattoos/2021-optimized/thumbs/tat42-thumb.jpg';
import thumb21_44 from '../images/tattoos/2021-optimized/thumbs/tat44-thumb.jpg';
import thumb21_45 from '../images/tattoos/2021-optimized/thumbs/tat45-thumb.jpg';
import thumb21_46 from '../images/tattoos/2021-optimized/thumbs/tat46-thumb.jpg';


//2022:::
import thumb22_2 from '../images/tattoos/2022_tats/thumbs/22_tat2-thumb.jpg';
import thumb22_3 from '../images/tattoos/2022_tats/thumbs/22_tat3-thumb.jpg';
import thumb22_3_2 from '../images/tattoos/2022_tats/thumbs/22_tat3-2-thumb.jpg';
import thumb22_4 from '../images/tattoos/2022_tats/thumbs/22_tat4-thumb.jpg';
import thumb22_5 from '../images/tattoos/2022_tats/thumbs/22_tat5-thumb.jpg';
import thumb22_6 from '../images/tattoos/2022_tats/thumbs/22_tat6-thumb.jpg';
import thumb22_7 from '../images/tattoos/2022_tats/thumbs/22_tat7-thumb.jpg';
import thumb22_8 from '../images/tattoos/2022_tats/thumbs/22_tat8-thumb.jpg';
import thumb22_9 from '../images/tattoos/2022_tats/thumbs/22_tat9-thumb.jpg';
import thumb22_10 from '../images/tattoos/2022_tats/thumbs/22_tat10-thumb.jpg';
import thumb22_11 from '../images/tattoos/2022_tats/thumbs/22_tat11-thumb.jpg';
import thumb22_12 from '../images/tattoos/2022_tats/thumbs/22_tat12-thumb.jpg';
import thumb22_13 from '../images/tattoos/2022_tats/thumbs/22_tat13-thumb.jpg';


//2023:::
import thumb23_1 from '../images/tattoos/2023/thumbs/23-tat1-thumb.jpg';
import thumb23_2A from '../images/tattoos/2023/thumbs/23-tat2A-thumb.jpg';
import thumb23_2B from '../images/tattoos/2023/thumbs/23-tat2B-thumb.jpg';
import thumb23_3 from '../images/tattoos/2023/thumbs/23-tat3-thumb.jpg';
import thumb23_4 from '../images/tattoos/2023/thumbs/23-tat4-thumb.jpg';
import thumb23_5 from '../images/tattoos/2023/thumbs/23-tat5-thumb.jpg';
import thumb23_6 from '../images/tattoos/2023/thumbs/23-tat6-thumb.jpg';
import thumb23_7 from '../images/tattoos/2023/thumbs/23-tat7-thumb.jpg';


//full images:::
//before 2020
import full04 from './../images/tattoos/2019/2019-tattoo-4.jpg';
import full05 from './../images/tattoos/2019/2019-tattoo-5.jpg';
import full07 from './../images/tattoos/2019/nick-tat.jpg';
import full08 from './../images/tattoos/2019/tat-script1.jpg';
import full09 from './../images/tattoos/2019/newtat-2.jpg';
import full10 from './../images/tattoos/2019/reg-large1.jpg';
import full20 from './../images/tattoos/2019/reg-large12.jpg';
import full24 from './../images/tattoos/2019/reg-large17.jpg';
import full30 from './../images/tattoos/2019/tat6.jpg';
import full34 from './../images/tattoos/2019/tat11.jpg';
import full38 from './../images/tattoos/2019/tat_2.jpg';

//2021
import full21_4 from './../images/tattoos/2021-optimized/tat-4.jpg';
import full21_6 from './../images/tattoos/2021-optimized/tat-6.jpg';
import full21_8 from './../images/tattoos/2021-optimized/tat-8.jpg';
import full21_11 from './../images/tattoos/2021-optimized/tat-11.jpg';
import full21_15 from './../images/tattoos/2021-optimized/tat-15.jpg';
import full21_17 from './../images/tattoos/2021-optimized/tat-17.jpg';
import full21_18 from './../images/tattoos/2021-optimized/tat-18.jpg';
import full21_19 from './../images/tattoos/2021-optimized/tat-19.jpg';
import full21_20 from './../images/tattoos/2021-optimized/tat-20.jpg';
import full21_21 from './../images/tattoos/2021-optimized/tat-21.jpg';
import full21_22 from './../images/tattoos/2021-optimized/tat-22.jpg';
import full21_23 from './../images/tattoos/2021-optimized/tat-23.jpg';
import full21_24 from './../images/tattoos/2021-optimized/tat-24.jpg';
import full21_25 from './../images/tattoos/2021-optimized/tat-25.jpg';
import full21_26 from './../images/tattoos/2021-optimized/tat-26.jpg';
import full21_27 from './../images/tattoos/2021-optimized/tat-27.jpg';
import full21_28 from './../images/tattoos/2021-optimized/tat-28.jpg';
import full21_29 from './../images/tattoos/2021-optimized/tat-29.jpg';
import full21_30 from './../images/tattoos/2021-optimized/tat-30.jpg';
import full21_31 from './../images/tattoos/2021-optimized/tat-31.jpg';
import full21_32 from './../images/tattoos/2021-optimized/tat-32.jpg';
import full21_33 from './../images/tattoos/2021-optimized/tat-33.jpg';
import full21_34 from './../images/tattoos/2021-optimized/tat-34.jpg';
import full21_35 from './../images/tattoos/2021-optimized/tat-35.jpg';
import full21_36 from './../images/tattoos/2021-optimized/tat-36.jpg';
import full21_37 from './../images/tattoos/2021-optimized/tat-37.jpg';
import full21_38 from './../images/tattoos/2021-optimized/tat-38.jpg';
import full21_39 from './../images/tattoos/2021-optimized/tat-39.jpg';
import full21_40 from './../images/tattoos/2021-optimized/tat-40.jpg';
import full21_41 from './../images/tattoos/2021-optimized/tat-41.jpg';
import full21_42 from './../images/tattoos/2021-optimized/tat-42.jpg';
import full21_44 from './../images/tattoos/2021-optimized/tat-44.jpg';
import full21_45 from './../images/tattoos/2021-optimized/tat-45.jpg';
import full21_46 from './../images/tattoos/2021-optimized/tat-46.jpg';


//2022
import full22_2 from './../images/tattoos/2022_tats/22_tat2.jpg';
import full22_3 from './../images/tattoos/2022_tats/22_tat3.jpg';
import full22_3_2 from './../images/tattoos/2022_tats/22_tat3-2.jpg';
import full22_4 from './../images/tattoos/2022_tats/22_tat4.jpg';
import full22_5 from './../images/tattoos/2022_tats/22_tat5.jpg';
import full22_6 from './../images/tattoos/2022_tats/22_tat6.jpg';
import full22_7 from './../images/tattoos/2022_tats/22_tat7.jpg';
import full22_8 from './../images/tattoos/2022_tats/22_tat8.jpg';
import full22_9 from './../images/tattoos/2022_tats/22_tat9.jpg';
import full22_10 from './../images/tattoos/2022_tats/22_tat10.jpg';
import full22_11 from './../images/tattoos/2022_tats/22_tat11.jpg';
import full22_12 from './../images/tattoos/2022_tats/22_tat12.jpg';
import full22_13 from './../images/tattoos/2022_tats/22_tat13.jpg';

//2023
import full23_1 from './../images/tattoos/2023/23-tat1.jpg';
import full23_2A from './../images/tattoos/2023/23-tat2A.jpg';
import full23_2B from './../images/tattoos/2023/23-tat2B.jpg';
import full23_3 from './../images/tattoos/2023/23-tat3.jpg';
import full23_4 from './../images/tattoos/2023/23-tat4.jpg';
import full23_5 from './../images/tattoos/2023/23-tat5.jpg';
import full23_6 from './../images/tattoos/2023/23-tat6.jpg';
import full23_7 from './../images/tattoos/2023/23-tat7.jpg';


const TATTOO_IMAGES = [  
  // 2023
  
  { id: '23_1', src: full23_1, thumbnail: thumb23_1 },
  { id: '23_2A', src: full23_2A, thumbnail: thumb23_2A },
  { id: '23_2B', src: full23_2B, thumbnail: thumb23_2B },
  { id: '23_3', src: full23_3, thumbnail: thumb23_3 },
  { id: '23_4', src: full23_4, thumbnail: thumb23_4 },
  { id: '23_5', src: full23_5, thumbnail: thumb23_5 },
  { id: '23_6', src: full23_6, thumbnail: thumb23_6 },
  { id: '23_7', src: full23_7, thumbnail: thumb23_7 },

  // 2022
  { id: '22_2', src: full22_2, thumbnail: thumb22_2 },
  { id: '22_3', src: full22_3, thumbnail: thumb22_3 },
  { id: '22_3_2', src: full22_3_2, thumbnail: thumb22_3_2 },
  { id: '22_4', src: full22_4, thumbnail: thumb22_4 },
  { id: '22_5', src: full22_5, thumbnail: thumb22_5 },
  { id: '22_6', src: full22_6, thumbnail: thumb22_6 },
  { id: '22_7', src: full22_7, thumbnail: thumb22_7 },
  { id: '22_8', src: full22_8, thumbnail: thumb22_8 },
  { id: '22_9', src: full22_9, thumbnail: thumb22_9 },
  { id: '22_10', src: full22_10, thumbnail: thumb22_10 },
  { id: '22_11', src: full22_11, thumbnail: thumb22_11 },
  { id: '22_12', src: full22_12, thumbnail: thumb22_12 },
  { id: '22_13', src: full22_13, thumbnail: thumb22_13 },

  // 2021
  { id: '21_4', src: full21_4, thumbnail: thumb21_4 },
  { id: '21_6', src: full21_6, thumbnail: thumb21_6 },
  { id: '21_8', src: full21_8, thumbnail: thumb21_8 },
  { id: '21_11', src: full21_11, thumbnail: thumb21_11 },
  { id: '21_15', src: full21_15, thumbnail: thumb21_15 },
  { id: '21_17', src: full21_17, thumbnail: thumb21_17 },
  { id: '21_18', src: full21_18, thumbnail: thumb21_18},
  { id: '21_19', src: full21_19, thumbnail: thumb21_19 },
  { id: '21_20', src: full21_20, thumbnail: thumb21_20 },
  { id: '21_21', src: full21_21, thumbnail: thumb21_21 },
  { id: '21_22', src: full21_22, thumbnail: thumb21_22 },
  { id: '21_23', src: full21_23, thumbnail: thumb21_23 },
  { id: '21_24', src: full21_24, thumbnail: thumb21_24 },
  { id: '21_25', src: full21_25, thumbnail: thumb21_25 },
  { id: '21_26', src: full21_26, thumbnail: thumb21_26},
  { id: '21_27', src: full21_27, thumbnail: thumb21_27 },
  { id: '21_28', src: full21_28, thumbnail: thumb21_28 },
  { id: '21_29', src: full21_29, thumbnail: thumb21_29 },
  { id: '21_30', src: full21_30, thumbnail: thumb21_30 },
  { id: '21_31', src: full21_31, thumbnail: thumb21_31 },
  { id: '21_32', src: full21_32, thumbnail: thumb21_32 },
  { id: '21_33', src: full21_33, thumbnail: thumb21_33 },
  { id: '21_34', src: full21_34, thumbnail: thumb21_34},
  { id: '21_35', src: full21_35, thumbnail: thumb21_35 },
  { id: '21_36', src: full21_36, thumbnail: thumb21_36 },
  { id: '21_37', src: full21_37, thumbnail: thumb21_37 },
  { id: '21_38', src: full21_38, thumbnail: thumb21_38 },
  { id: '21_39', src: full21_39, thumbnail: thumb21_39 },
  { id: '21_40', src: full21_40, thumbnail: thumb21_40 },
  { id: '21_41', src: full21_41, thumbnail: thumb21_41 },
  { id: '21_42', src: full21_42, thumbnail: thumb21_42},
  { id: '21_44', src: full21_44, thumbnail: thumb21_44 },
  { id: '21_45', src: full21_45, thumbnail: thumb21_45 },
  { id: '21_46', src: full21_46, thumbnail: thumb21_46 },

  // 2020
  { id: '4', src: full04, thumbnail: thumb04 },
  { id: '5', src: full05, thumbnail: thumb05 },
  { id: '7', src: full07, thumbnail: thumb07 },
  { id: '8', src: full08, thumbnail: thumb08 },
  { id: '9', src: full09, thumbnail: thumb09 },
  { id: '10', src: full10, thumbnail: thumb10 },
  { id: '20', src: full20, thumbnail: thumb20 },
  { id: '24', src: full24, thumbnail: thumb24 },
  { id: '30', src: full30, thumbnail: thumb30 },
  { id: '34', src: full34, thumbnail: thumb34 },
  { id: '38', src: full38, thumbnail: thumb38 }
];

export default class TattooPage extends React.Component {

  render() {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Helmet title={`Tattoos | ${title}`} />

        <div className="pageContainer tattooPage">
          <div className="blackBorder" />
          <div className="pageContainer left">
            <img src={TattooImg} alt="Tattoo" />
            {/*<Img resolutions={data.file.imageSharp.sizes} />*/}
          </div>

          <div className="pageContainer right">
            <Gallery
              images={TATTOO_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail
              }))}
            />
          </div>
          <div className="blackBorder" />
        </div>
      </Layout>
    );
  }
}

export const tattooQuery = graphql`
  query tattooPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
