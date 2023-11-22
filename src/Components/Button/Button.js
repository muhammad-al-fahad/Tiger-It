import React from 'react'
import "./button.css";

function button({ text, link }) {
  return (
    <div>
      <a href={link} className='button'>
        <button type='button' className='email-verify'>
            <p>{text}</p>
        </button>
      </a>
    </div>
  )
}

export default button
