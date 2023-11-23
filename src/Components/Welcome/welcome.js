import React from 'react'
import Button from '../Button/Button'
import './welcome.css'

function Welcome() {

    function handleColor(e) {
        const user = document.querySelectorAll('.welcome-user');

        if(e.target.value === 'on') {
            user.forEach((bc, index) => {
                if(e.target.className === "radio-deliver") {
                    if(index === 2) bc.style.borderColor = '#62BE12';
                    else bc.style.borderColor = '#EBEDF0';
                } else if (e.target.className === "radio-sell") {
                    if(index === 1) bc.style.borderColor = '#62BE12';
                    else bc.style.borderColor = '#EBEDF0';
                } else {
                    if(index === 0) bc.style.borderColor = '#62BE12';
                    else bc.style.borderColor = '#EBEDF0';
                }
            })
        }
    }

  return (
    <div className='welcome'>
    {/* Welcome Section */}
      <div className='welcome-items'>
        <div className='welcome-close'>
          <img src="" alt="" />
        </div>
        <div className='welcome-content'>
          <div className='welcome-list'>
            <div className='welcome-text'>
                <h5 className='welcome-title'>Let's Start</h5>
                <p className='welcome-description'>It's going to take only a few minutes</p>
            </div>
            <form className='welcome-list-items'>
                <div className='welcome-user'>
                    <label className='user-switch'>
                        <input className='radio-buy' type='radio' name='userType' onChange={handleColor}/>
                        <div className='radio-title'>
                            <h5 className='title-h5'>I'm here to shop! 🛍️</h5>
                            <p className='title-p'>Explore products and make purchases.</p>
                        </div>
                    </label>
                </div>

                <div className='welcome-user'>
                    <label className='user-switch'>
                        <input className='radio-sell' type='radio' name='userType' onChange={handleColor}/>
                        <div className='radio-title'>
                            <h5 className='title-h5'>I'm here to sell! 💼</h5>
                            <p className='title-p'>List, manage your products with ease.</p>
                        </div>
                    </label>
                </div>

                <div className='welcome-user'>
                    <label className='user-switch'>
                        <input className='radio-deliver' type='radio' name='userType' onChange={handleColor}/>
                        <div className='radio-title'>
                            <h5 className='title-h5'>I'm here to deliver! 🚚</h5>
                            <p className='title-p'>Become a rider and help with deliveries.</p>
                        </div>
                    </label>
                </div>
            </form>
          </div>
          <Button text="Continue" link="#"/>
        </div>
      </div>
    </div>
  )
}

export default Welcome