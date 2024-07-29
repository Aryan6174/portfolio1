import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="space"></div>
      <div className="parent">
        <div className="child box1"></div>
        <div className="child box2"></div>
        <div className="child box3">
              <h1>Hey there 👋, I am Aryan Dadhich</h1><br></br>
              <h2>Web Developer / Student</h2><br></br><br></br>
              <p>Passionate web developer and dedicated student, creating innovative and user-friendly web solutions. Combining creativity with technical expertise to deliver exceptional digital experiences</p><br></br>
              <a href='/about'>
                <div className="button">
                  About Me
                </div>
              </a>
        </div>
        <div className="child box4"></div>
      </div>
    </div>
  )
}

export default Home