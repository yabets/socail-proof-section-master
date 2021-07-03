import React from 'react';
import './App.css';
import star from './images/icon-star.svg';
import anne from "./images/image-anne.jpg";
import colton from "./images/image-colton.jpg";
import irene from "./images/image-irene.jpg";

function App() {
  return (
    <div className="App">
      <div className="row top">
        <div className="header">
          <h1 className="title">10,000+ of our users love our products.</h1>
          <p className="titleBody">
          We only provide great products combined with excellent customer service.
    See what our satisfied customers are saying about our services.
    
          </p>
        </div>
        <div className="column">
          <div className="review">
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <span className="reviewBody">Rated 5 Stars in Reviews</span>
          </div>
          <div className="review">
          <img src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <span className="reviewBody">Rated 5 Stars in Report Guru</span>
          </div>
          <div className="review">
          <img src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <img className="star" src={star} alt="star"/>
            <span className="reviewBody">Rated 5 Stars in BestTech</span>
          </div>
        </div>
      </div>
      <div className="row bottom">
        <div className="card">
            <div className="cardTitle">
              <img className="profile" src={colton} alt="colton" />
              <div className="cardName">
                <h3 className="usernme"> Colton Smith </h3>
                <p className="userType"> Verified Buyer</p>
              </div>
            </div>
            <div className="cardBody">
            "We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"
            </div>
          </div>
          <div className="card">
            <div className="cardTitle">
              <img  className="profile" src={irene} alt="irene" />
              <div className="cardName">
                <h3 className="usernme">Irene Roberts </h3>
                <p className="userType">Verified Buyer</p>
              </div>
            </div>
            <div className="cardBody">
            "Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."

            </div>
          </div>
          <div className="card">
            <div className="cardTitle">
              <img className="profile"  src={anne} alt="anne"/>
              <div className="cardName">
                <h3 className="username">Anne Wallace </h3>
                <p className="userType">Verified Buyer</p>
              </div>
            </div>
            <div className="cardBody">
            "Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"

            </div>
          </div>
      </div>
      <div className="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge"
        >Frontend Mentor</a
      >. Coded by <a href="github.com/yabets">Yabets</a>.
    </div>
    </div>
  );
}

export default App;
