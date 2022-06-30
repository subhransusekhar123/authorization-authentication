import React from 'react'
import NavBar from './NavBar'

const Greet = () => {
  return (
    <div>
        <NavBar/>

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.google.com/search?q=images&rlz=1C1YTUH_enIN1000IN1000&sxsrf=APq-WBtnoVPmyfIJtg12tF5J8MYIecV_3Q:1650931733122&source=lnms&tbm=isch&sa=X&ved=2ahUKEwir9YD8t7D3AhWfRmwGHeZ2C_wQ_AUoAXoECAEQAw&biw=2400&bih=1211&dpr=0.8#imgrc=DH7p1w2o_fIU8M" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Greet