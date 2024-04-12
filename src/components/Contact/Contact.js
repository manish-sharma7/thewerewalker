import React, { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { key, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [key]: value,
      }
    })
  }

  const formSubmit = (event) => {
    // TODO: Send mail
    event.preventDefault()
    alert(
       `Name : ${data.fullname}. 
        Phone Number : ${data.phone}. 
        Email address : ${data.email}. 
        Subject :  ${data.subject}. 
        Message : ${data.message}.`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='details'>
                  <h1>Manish Sharma</h1>
                  <p>Senior Software Engineer</p>
                  <p>I am available for any opportunity, open discussion on ideas or any informal chat</p> <br />
                  <p>Phone: +91 9511560530</p> <br />
                  <p>First Email: ms2641188@gmail.com</p>
                  <p>Second Email: mks1235557@gmail.com</p>
                  <p>Work Email: manish.sharma@amagi.com</p> <br />
                  <span>FIND ME WITH</span>
                  <div className='button'>
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
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
