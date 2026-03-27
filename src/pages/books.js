import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import SFLCCover from './../images/books/spaceLove/SLFC-finalCover.jpg';
import SFLCBook from './../images/books/spaceLove/SLFC-finalBook.jpg';
import Layout from './../components/layout.js';

//Lightbox needs the following:::
import Gallery from './../components/Gallery';

//////////* import thumbnails + images */
//thumbnails
import bookThumb_1 from './../images/books/spaceLove/thumb/dedicationCover-thumb.jpg';
import bookThumb_2 from './../images/books/spaceLove/thumb/constellations-thumb.jpg';
import bookThumb_3 from './../images/books/spaceLove/thumb/pg2-thumb.jpg';
import bookThumb_4 from './../images/books/spaceLove/thumb/pg5-thumb.jpg';
import bookThumb_5 from './../images/books/spaceLove/thumb/pg7-thumb.jpg';
import bookThumb_6 from './../images/books/spaceLove/thumb/pg9-thumb.jpg';
import bookThumb_7 from './../images/books/spaceLove/thumb/pg10-thumb.jpg';
import bookThumb_8 from './../images/books/spaceLove/thumb/pg12-thumb.jpg';
import bookThumb_9 from './../images/books/spaceLove/thumb/pg15-thumb.jpg';
import bookThumb_10 from './../images/books/spaceLove/thumb/pg17-thumb.jpg';
import bookThumb_11 from './../images/books/spaceLove/thumb/pg19-thumb.jpg';

//full images:::
import spaceLove1 from './../images/books/spaceLove/dedicationCover.jpg';
import spaceLove2 from './../images/books/spaceLove/constellations-overview.jpg';
import spaceLove3 from './../images/books/spaceLove/SLFCspread-1.jpg';
import spaceLove4 from './../images/books/spaceLove/SLFCspread-2.jpg';
import spaceLove5 from './../images/books/spaceLove/SLFCspread-3.jpg';
import spaceLove6 from './../images/books/spaceLove/SLFCspread-4.jpg';
import spaceLove7 from './../images/books/spaceLove/SLFCspread-5.jpg';
import spaceLove8 from './../images/books/spaceLove/SLFCspread-6.jpg';
import spaceLove9 from './../images/books/spaceLove/SLFCspread-7.jpg';
import spaceLove10 from './../images/books/spaceLove/SLFCspread-8.jpg';
import spaceLove11 from './../images/books/spaceLove/SLFCspread-9.jpg';

const RandomImageArray = [SFLCCover, SFLCBook];
let RandomNum;

const SLFirechild_IMAGES = [    
  //give unique ID and ref src + thumbnail
  { id: 'spaceLove1', src: spaceLove1, thumbnail: bookThumb_1 },
  { id: 'spaceLove3', src: spaceLove3, thumbnail: bookThumb_3 },
  { id: 'spaceLove4', src: spaceLove4, thumbnail: bookThumb_4 },
  { id: 'spaceLove5', src: spaceLove5, thumbnail: bookThumb_5 },
  { id: 'spaceLove6', src: spaceLove6, thumbnail: bookThumb_6 },
  { id: 'spaceLove7', src: spaceLove7, thumbnail: bookThumb_7 },
  { id: 'spaceLove8', src: spaceLove8, thumbnail: bookThumb_8 },
  { id: 'spaceLove9', src: spaceLove9, thumbnail: bookThumb_9 },
  { id: 'spaceLove10', src: spaceLove10, thumbnail: bookThumb_10 },
  { id: 'spaceLove11', src: spaceLove11, thumbnail: bookThumb_11 },
  { id: 'spaceLove2', src: spaceLove2, thumbnail: bookThumb_2 },
];

export default class BooksPage extends React.Component {
  state = {
    currentImage: ''
  };

  componentDidMount() {
    RandomNum = Math.floor(Math.random() * RandomImageArray.length);
    this.state.currentImage = RandomImageArray[RandomNum];
  }


  render() {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Helmet title={`Books | ${title}`} />

        <div className="pageContainer booksPage">
          <div className="blackBorder" />
          <div className="pageContainer left">
             <img src={ this.state.currentImage } alt="Books" />
          </div>

          <div className="pageContainer right">
            <Gallery
              images={SLFirechild_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail
              }))}
            />
            <div className="textBox">
              <p><b>Space Love Fire Child: United; Divided</b> is a project that consists of 20 paintings and a poem to create the content of this children’s book. 
                It is a project of love dedicated to my son, Ryder, about co parenting, from a place of experience from my own childhood and as a single mother. 
                The family experience has changed a lot from the 80s and the 90s to now, from the idea that the “perfect family” exists as a unit, disregarding toxicities, 
                depression and abuse. As a result, children grow up in these toxic environments and not everyone evolves to be cycle breakers but perpetuators of abuse. 
                Over time, the idea of “family” has shifted in many ways from the 80s and 90s from gender roles to family compositions and how we treat one another to the 
                very idea of seeing a therapist.  
              </p>
              <p className="indent">As a cycle breaker, the goal has been to provide a peaceful and nurturing environment especially finding myself playing the role of a single parent, 
                where challenges and their stresses are exponentially higher. Regardless, it is important to maintain a sense of stability and control along with empathy 
                for optimal development. Bedtime has always been a sacred time for us to relax and settle in nightly routines, which has always included a bedtime story. 
                This particular time can be used to literally sit and talk with your child in ways where we use stories to help explain more complex situations. This story 
                personifies celestial bodies, where the parents exist as two separate worlds, presented with their challenges but taking these difficult times and turning 
                them into things that can benefit us, in return, providing more confidence for the future, allowing the mind to rest. Each painting takes up the space of 
                each page allowing for a more immersive experience. The composition for each piece is square as a symbol representing the grid, consistency and unity but 
                also the idea of separation with each spread. Co parenting, personally, has been one of the most challenging situations but through my own growth this story 
                has been created to inspire positivity during times when more families find peace in separation with the challenge of helping children cope. This same concept 
                can be applied to all of us, when we exist in a divided society with the helpful reminder that we are all still united.  
              </p>
            </div>
          </div>
          <div className="blackBorder" />
        </div>
      </Layout>
    );
  }
}

export const booksQuery = graphql`
  query booksPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;