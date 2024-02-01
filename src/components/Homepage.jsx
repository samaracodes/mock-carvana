import {React, ReactDOM} from 'react'
import './homepage.css'

const Homepage = () => {
    return (
      <>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/src/assets/hero.webp" class="bg-img d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <h3 className="hero-banner">RIGHT CAR. RIGHT PRICE.</h3>
                <h4 className="hero-paragraph">Financing made easy</h4>


                <div class="input-group input-group-lg mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                    </svg>
                  </span>
                  
                  <input type="text" class="form-control p-3" placeholder="Search Make, Model, or Keyword" aria-describedby="basic-addon1" style={{fontSize: "17px"}}/>

                  <button type="button" class="btn btn-info" id="search-button">GO</button>s
                </div>

              </div>
            </div>
          </div>
        </div>
    
      </>
    )
}

export default Homepage