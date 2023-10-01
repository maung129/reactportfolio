import React, { useState } from 'react'
import './contact.css';

const Contact = () => {
  const [sendMessage,setSendMessage] = useState(false);
  const handleSubmit = (e) =>{
    e.preventDefault();
    setSendMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="contactLeft">
        <img src="https://static.vecteezy.com/system/resources/previews/020/009/410/original/cute-girl-cartoon-character-free-png.png" alt="" className='contactImg'/>
      </div>
      <div className="contactRight">
        <h2 className='contactHeader'>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter your email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {sendMessage && <span className='message'>Thanks! I will reply ASAP ;</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact