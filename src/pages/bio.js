import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import BioImg from './../images/bio-hero.jpg';

import Layout from './../components/layout.js';

const BioPage = props => {
  const { title } = props.data.site.siteMetadata;
  return (
    <Layout>
      <Helmet title={`Biography | ${title}`} />

      <div className="pageContainer bioPage">
        <div className="blackBorder" />

        <div className="pageContainer left">
          <img src={BioImg} alt="Bio" />
        </div>

        <div className="pageContainer right">
          <div className="bioText">
            <p>
            Melany Meza-Dierks was born in Caracas, Venezuela January 22, 1983. Her family moved to the United States when she was still in diapers. 
            Growing up American-Venezuelan in a Latin family pushed her to question perfection, religion and traditional gender roles in society. 
            Conflicted by her surroundings, she was forced to constantly question the expectations in life, as a Venezuelan woman, an American woman, a daughter, 
            a mother and an artist. Developing a stutter from age 6-12 made it difficult to socialize in school, so drawing other students became the primary 
            method of establishing relationships and recognition from others. Portraiture had been consistent and strong in her practice and lead to further 
            explorations of the human form, the figurative and the conditions that apply to the narrative.

            </p>
            <p className="indent">
            She moved to CA from AR in 2004 and received her BFA in Communication Arts from Otis College of Art and Design in 2007 and established 
            herself as a graphic designer and storyboard artist but, would later find herself back in touch with her roots as art teacher, painter, street and 
            tattoo artist showing work with a few galleries and participated in a show at Coachella in 2012. A few years after giving birth in 2013, she received her
            MFA from Otis in 2016, with a focus on painting. Shortly after receiving her Masters, her work has displayed at several galleries in Los Angeles. In 2016,
            she moved to Long Beach, where she would maintain the balance of working at a tattoo shop, painting in the studio and on the streets with several murals highlighting 
            her portraiture located in Los Angeles County. At the beginning of the pandemic in 2020, she was commissioned to paint several memorial murals inspired by Kobe Bryant, 
            opening doors to many more opportunities. She currently lives in Long Beach and works from her studio as a full time painter, writer and designer.</p>
           
          </div>
        </div>
        <div className="blackBorder" />
      </div>
    </Layout>
  );
};

export default BioPage;

export const bioQuery = graphql`
  query bioPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
