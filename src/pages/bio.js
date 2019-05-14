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
              Melany Meza-Dierks was born in Caracas, Venezuela January 22,
              1983. Mother was a tyrant beauty queen sergeant, breaking away
              from an abusive husband, a single mother who would find love to
              another, creating a limitless environment that would allow Melany
              to grow and bloom into the artist she has become today. It was in
              Arkansas where she began developing her hand, having attended 14
              different schools, consisting of mostly private and a couple
              boarding schools in Switzerland and Massachusetts. Growing up in
              constant transition, a child who grew up with a stutter, the
              ability to draw became her saving grace with portrait requests
              from all the new classmates fueling her artistic muscle.
            </p>

            <p className="indent">
              Gaining maturity in her practice, a bad acid trip and the desire
              to rebel, Melany moved to CA in 2004 and received her BFA in
              Communication Arts from Otis College of Art and Design and
              established herself as a graphic designer and storyboard artist.
            </p>

            <p className="indent">
              Teaching basic elements of painting to children would be the next
              driving force to transition from graphic applications to more of a
              studio practice. A few years after giving birth in 2013, she
              received her MFA from Otis in 2016, focusing on painting.
            </p>

            <p className="indent">
              The work reflects on her desire to question normality and
              challenge expectations, contributing to new points of view. She
              has embraced all the codes of realism and narrative while at the
              same time, allowing fantasy to permeate the paintings in a way
              that questions said realism.
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
