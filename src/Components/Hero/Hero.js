import './hero.css';

function Hero() {
  return (
    <>
    <section className='hero-section'> 
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 col-lg-8 d-flex flex-column align-self-center hero-content'>
                    <h1 className='d-flex gy-5'>Restaurant food, takeaway and groceries.</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    <button type='button' className='w-25'>Shop Now</button>
                </div>
                <div className='col-12 col-sm-12 col-md-6 col-lg-4 d-flex align-self-center hero-background-image'>
                    <img src="/assets/images/Hero.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero
