import React from 'react'
//import Helmet from 'react-helmet';
import TeacherImg from './../images/teacher-hero.jpg'

import Layout from './../components/layout.js'

//PDF
import PleinAir from './../downloads/Plein Air Instruction.pdf'
import PrivateLesson from './../downloads/Private Lessons.pdf'

const TeacherPage = () => (
  <Layout>
    <div className="pageContainer teacherPage">
      <div className="blackBorder"/>
      <div className="pageContainer left">
       <img src={TeacherImg} alt="Teacher" />
      </div>

      <div className="pageContainer right">
        <div className="homeText">
          <b>art teacher (n.)</b><br />
          <p>Someone who imparts the knowledge or skill of quality, production, expression, or realm, according to aesthetic principles, of what is beautiful, appealing, or of more than ordinary significance.</p>

          > <a href={PleinAir} className="pdf" target="_blank" rel="noopener noreferrer">Download Art Instruction PDF - 3MB</a><br/>
          > <a href={PrivateLesson} className="pdf" target="_blank" rel="noopener noreferrer">Download Private Lessons PDF - 0.5MB</a>
        </div>
      </div>
      <div className="blackBorder"/>
    </div>
  </Layout>
)

export default TeacherPage
