import './hero.css';

function Hero() {
  return (
    <>
    <section className='hero-section'> 
        <div className='hero-content'>
            <h1 className='content-title'>Restaurant food, takeaway and groceries.</h1>
            <p className='content-dsc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            <button type='button' className='hero-button'>Shop Now</button>
        </div>
        <div className='hero-background'>
            <img src='/assets/images/Hero.svg' alt='' />
        </div>
    </section>
    </>
  )
}

export default Hero
