import './browseCategories.css'

function BrowseCategories() {
  return (
    <>
      <section className='container-fluid browse-section'>
        <div className='browse-section-area'>
            <div className='browse-content'>
                <h3 className='content-title'>Browse Categories</h3>
                <p className='content-p'>View all</p>
            </div>
            <div className='row'>
           
                <div className='browse-item-card col-4 col-sm-3 col-md-2'>
                    <div className='card-image'>
                        <img src="/assets/images/smartphone.png" alt="" />
                    </div>
                    <p>Smartphone & Tablets</p>
                </div>
                <div className='browse-item-card col-4 col-sm-4 col-md-2'>
                    <div className='card-image'>
                        <img src="/assets/images/smartphone.png" alt="" />
                    </div>
                    <p>Smartphone & Tablets</p>
                </div><div className='browse-item-card col-4 col-sm-3 col-md-2'>
                <div className='card-image'>
                    <img src="/assets/images/smartphone.png" alt="" />
                </div>
                <p>Smartphone & Tablets</p>
            </div>
            <div className='browse-item-card col-4 col-sm-4 col-md-2'>
                <div className='card-image'>
                    <img src="/assets/images/smartphone.png" alt="" />
                </div>
                <p>Smartphone & Tablets</p>
            </div>

            <div className='browse-item-card col-4 col-sm-3 col-md-2'>
                    <div className='card-image'>
                        <img src="/assets/images/smartphone.png" alt="" />
                    </div>
                    <p>Smartphone & Tablets</p>
                </div>
                <div className='browse-item-card col-4 col-sm-4 col-md-2'>
                    <div className='card-image'>
                        <img src="/assets/images/smartphone.png" alt="" />
                    </div>
                    <p>Smartphone & Tablets</p>
                </div>


                
            </div>
            
            </div>
            
      
      </section>
    </>
  )
}

export default BrowseCategories
