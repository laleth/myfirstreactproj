import React from 'react'
import "../style/home.css"

export default function Home({abcd}) {
    
  return (
    <div className='body'>
        <div className="Head">
        {abcd}
      </div>
      <div className="cont">
        <div className="about">
        About Myself
        </div>
        <div className="pic">
          <img src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" height="300px" width="300px"
          alt="Tiger"></img>
          <div className= "tiger">
          The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. 
          It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years and then become independent, 
          leaving their mother's home range to establish their own.
          </div>
        </div>
      </div>
    </div>
  )
}
