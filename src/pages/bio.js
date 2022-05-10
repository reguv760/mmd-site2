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
            Melany Dierks was born in Caracas, Venezuela January 22, 1983. Gaining maturity in her practice, a bad acid trip  and the desire to rebel, Melany moved 
            to CA in 2004 and received her BFA in Communication Arts from Otis College of Art and Design in 2007 and established herself as a graphic designer and storyboard artist. 
             Teaching basic elements of painting to children would be the next driving force to transition 
             from graphic applications to more of a studio practice while picking up the techniques of 
             being a tattoo artist. A few years after giving birth in 2013, she received her MFA from Otis
             in 2016, with a focus on painting. She has embraced all the codes of realism and narrative while 
             at the same time, allowing fantasy to permeate the paintings in a way that questions reality. 
             She began painting murals after moving to Long Beach in late 2016. Art has been the driving force
             of her life, with every aspect honored with gratitude. She currently lives in Long Beach
             established as a working artist in the fields of paint and tattoo. 

            </p>

            {/* <p className="indent">
              Gaining maturity in her practice, a bad acid trip and the desire
              to rebel, Melany moved to CA in 2004 and received her BFA in
              Communication Arts from Otis College of Art and Design and
              established herself as a graphic designer and storyboard artist.
            </p> */}

           
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
