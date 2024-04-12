import React from "react"
import "./Home.css"
import { Typewriter } from "react-simple-typewriter"

const name = "Manish Sharma"

const Home = () => {
  return (
    <>
      <section className='person' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME VISITOR</h3>
            <h1>
              Hi, I’m <span>{name}</span>
            </h1>
            <h2>
              the
              <span>
                <Typewriter words={[" Professional Coder.", " Software Engineer.", " Web Developer.", " Traveller."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am currently working as Senior Software Engineer at Amagi Corporation. I work on my couple of personal projects too. I contribute in open source as well.</p>

            <div className='person_btn e_flex'>
              <div className='col_1'>
                <h4>FIND ME WITH</h4>
                <div className='button d_flex'>
                  <a href="https://www.linkedin.com/in/manish-sharma7/">
                    <button className='btn_shadow'>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </a>
                  <a href="https://github.com/manish-sharma7/">
                    <button className='btn_shadow'>
                      <i class='fab fa-github'></i>
                    </button>
                  </a>
                  <a href="mailto:ms2641188@gmail.com">
                    <button className='btn_shadow'>
                      <i class='fas fa-envelope'></i>
                    </button>
                  </a>
                  <a href="https://www.instagram.com/thewerewalker/">
                    <button className='btn_shadow'>
                      <i class='fab fa-instagram'></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>MY WORK IN</h4>
                <div className='button d_flex'>
                  <button className='btn_shadow'>
                    <text>Software Dev</text>
                  </button>
                  <button className='btn_shadow'>
                    <text>AI</text>
                  </button>
                  <button className='btn_shadow'>
                    <text>Web Dev</text>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              {/* <img src={home_image} alt='Home Image' /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
