import React from "react"
import "./Experience.css"
import Details from "./Details"
import Card from "./Card"

const Experience = () => {
  return (
    <>
      <section className='Experience' id='experience'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>3+ YEARS OF EXPERIENCE</h4>
            <h1>My Work Experience</h1>
          </div>
          <div className='content-section mtop d_flex'>
            <div className='cards'>
              {/* <div className='heading'>
                <h4>2024-2021</h4>
              </div> */}
              <div className='content'>
                {Details.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} org={val.org} org_link={val.org_link} 
                    duration={val.duration} place={val.place} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience
