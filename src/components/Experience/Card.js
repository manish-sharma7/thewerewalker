import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.title}</h2>
            <h4><a href={props.org_link}>{props.org}</a></h4>
            <p>{props.place}</p>
          </div>
        </div>
        <span>{props.duration}</span>
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
