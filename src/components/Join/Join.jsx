import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
    let formText = "Enter your email"

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5f8acdg', 'template_qj999ac', form.current,
         'nAxYB3RJNPU1CPZVy')
          .then((result) => {
              console.log(result.text);
              alert("Check your email");
              form.current.reset();
              formText = "Enter your email"
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="join-us">
        {/* Left side */}
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>ready to</span>
                <span>level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        {/* Right side */}
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder={formText}/>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join