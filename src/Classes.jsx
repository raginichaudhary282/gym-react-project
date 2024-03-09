import React from 'react'
import vg from "./styles/images3.jpeg"
import myImage from "./styles/images4.jpeg"
import myImage1 from "./styles/images6.webp"

const Classes = () => {
  return (
    <>
      <div className='main-div'>
        <h1>Trainning Programs</h1>
        <div className='first-div'>
          <h3>Beginner Program</h3>
          <p>Our beginner program is designed for those who are new to working out or have been away from the gym for an extended period of time. This program is focused on building a strong foundation of strength and conditioning while also introducing proper form and technique for common exercises.</p>
          <h4>$99/month</h4>
          <img src={vg} alt='image1'/>
        </div>
    

        <div className='second-div'>
          <h1>Advanced Program</h1>
          <p>Our advanced program is designed for experienced gym-goers who are looking to take their training to the next level. This program is focused on progressive overload and advanced training techniques to help you achieve your fitness goals.</p>
          <h4>$149/month</h4>
          <img src={myImage} alt='image2'/>
        </div>

        <div className='third-div'>
          <h1>Personal Trainning</h1>
          <p>For those who prefer one-on-one coaching, we offer personal training sessions with our certified trainers. Our trainers will work with you to create a customized training program based on your specific goals and needs.</p>
          <h4>Starting at $79/session</h4>
          <img src={myImage1} alt='image3'/>
        </div>
      </div>
    </>
  )
}

export default Classes
