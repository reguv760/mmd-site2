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
            <p>M</p><p>elany Meza-Dierks was born in Caracas, Venezuela January 22, 1983. Her family moved to the United States soon after her birth. Growing up 
            American-Venezuelan in a split home, through violence and abuse pushed her to question perfection, religion and traditional gender roles in society.
            Conflicted by her surroundings, she was forced to constantly question expectations in life, as a Venezuelan woman, an American woman, a daughter, 
            a mother, lover and artist. She moved to CA from AR in 2004 and received her BFA in Communication Arts from Otis College of Art and Design in 2007 
            and established herself as a graphic designer and storyboard artist.</p>

            <p className="indent">
            She taught painting to children at a public art studio in Santa Monica, showed work with a few galleries and participated in a show at 
            Coachella in 2012. A few years after giving birth in 2013, she received her MFA from Otis College of Art and Design in 2016, with a focus on 
            painting. Shortly after, her work displayed at several galleries in Los Angeles. In 2016, she moved to Long Beach, where she would maintain 
            the balance of working as a studio artist, tattoo artist and family life as a single mother. At the beginning of the pandemic in 2020, she was 
            commissioned to paint several memorial murals, opening doors to many more public art opportunities. She currently lives in Long Beach and 
            works from her studio as a full time painter, writer and designer.
            </p>
           
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
