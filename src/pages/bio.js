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
            Melany Dierks was born in Caracas, Venezuela January 22, 1983. Growing up with a stutter from age 6-12 made it difficult to socialize in school, 
            so drawing other students became the primary method of establishing relationships and recognition from others. Portraiture had been consistent and 
            strong in her practice and lead to further explorations of the human form, the figurative and the conditions that apply to the narrative. She moved to CA 
            in 2004 and received her BFA in Communication Arts from Otis College of Art and Design in 2007 and established herself as a graphic designer and storyboard artist 
            but, would later find herself back in touch with her roots as art teacher, painter, street and tattoo artist. A few years after giving birth in 2013, 
            she received her MFA from Otis in 2016, with a focus on painting. Her studio was also where she tattooed clients.

            </p>
            <p className="indent">
            Growing up American-Venezuelan pushed her to question perfection in the sense of what it is to be a woman surrounded by a system of patriarchy heavily 
            influenced by the Church. Conflicted by her suroundings she was forced to constanly question the expectations in life, as a Venezuelan woman, an American woman, 
            a daughter, a mother and an artist.
            </p>

            <p className="indent">As a tattoo artist, I am inspired by the clients as much as I am the tattoo and capturing the tattooed human form with imagery has added to the 
            challenging efforts of portraiture that I have fervently practiced. Street art has had its influence through modes of graphic design and advertising 
            and has been a part of my practice, expanding the life of art from canvas to skin and the walls of the public eye.</p>
           
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
