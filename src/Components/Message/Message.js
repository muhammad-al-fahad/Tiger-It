import Button from '../Button/Button'
import './message.css'

function Message() {
  return (
    <div className='message'>
    {/* Message Section */}
      <div className='message-popup'>
        <div className='message-close'>
          <img src="" alt="" />
        </div>
        <div className='message-check'>
          <div className='message-image'>
            <img src="/assets/images/Illustration.svg" alt="" />
          </div>
          <div className='message-content'>
            <h4 className='message-title'>Password Updated</h4>
            <p className='message-paragraph'>Your password has been changed successfully</p>
          </div>
          <Button text="Login" link="/home"/>
        </div>
      </div>
    </div>
  )
}

export default Message