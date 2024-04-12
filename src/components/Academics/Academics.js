import React from "react"
import "./Academics.css"
import Details from "./Details"
import Card from "./Card"

const Academics = () => {
  return (
    <>
      <section className='Academics' id='Academics'>
        <div className='container top'>
          <div className='heading text-center'>
            <h1>My Academics</h1>
          </div>
          <div className='content-section mtop d_flex'>
            <div className='cards'>
              <div className='content'>
                {Details.map((val, index) => {
                  if (val.category === "education") {
                    return <Card key={index} title={val.title} institute={val.institute} result={val.result} desc={val.desc} />
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

export default Academics
