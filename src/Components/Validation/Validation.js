import React from 'react'
import Button from '../Button/Button'
import './validation.css'

function Validation() {
  return (
    <div className='validation'>
    {/* Validate Email Section */}
      <div className='validate-email'>
        <div className='email-close'>
          <img src="" alt="" />
        </div>
        <div className='email-check'>
          <div className='email-image'>
            <img src="/assets/images/validate-email.svg" alt="" />
          </div>
          <div className='email-content'>
            <h4 className='email-title'>Check Email Address</h4>
            <p className='email-paragraph'>A verification link has been sent to your email address</p>
          </div>
          <Button text="Open Email" link="https://mail.google.com/mail/u/0/#inbox"/>
        </div>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className='email-link'>
          Resend Link
        </a>
      </div>
    </div>
  )
}

export default Validation
