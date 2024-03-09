import React from 'react';
import vg from "./styles/images2.webp";

const Home = () => {
  return (
    <>
      <div className='image1'>
        <img src={vg} alt='image' />
      </div>


      <div className='card-container'>
        <div className='card'>
          <h3>Basic</h3><br></br>
          <h3>$29.99</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>SelectPlan</button>
        </div>

        <div className='card2'>
          <h3>Pro</h3><br></br>
          <h3>$49.99</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>SelectPlan</button>
        </div>

        <div className='card3'>
        <h3>Premium</h3><br></br>
          <h3>$99.99</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>SelectPlan</button>
        </div>
      </div>
      
    </>
  );
};

export default Home;
