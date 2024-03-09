import React from 'react'
import vg from "./styles/images7.jpeg"
import myImage from "./styles/images8.webp"
import myImage2 from "./styles/images9.jpeg"

const Blogs = () => {
  return (
    <>
    <h1>Fitness Blog</h1>
      <div className='main-div'>
        
        <div className='div1'>
          <img src={vg} alt='image1' />
          <h2>10 Tips for Staying Motivated on Your Fitness Journey</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ultricies mauris.Quisque vitae interdum sapien. Sed nec eleifend mi.Nullam posuere neque non augue dictum, non aliquam urna interdum. Etiam id eros sit amet nulla tincidunt tempus. Proin vel varius urna. In posuere justo eget arcu posuere, et pharetra sapien consequat.Pellentesque at odio elementum, venenatis mi vitae, cursus velit. Cras sagittis commodo commodo. Nulla facilisi.</p>
        </div>

        <div className='div2'>
        <img src={myImage} alt='image2' />
        <h2>Why You Should Add Resistance Trainning to Your Routine</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ultricies mauris. Quisque vitae interdum sapien. Sed nec eleifend mi. Nullam posuere neque non augue dictum, non aliquam urna interdum. Etiam id eros sit amet nulla tincidunt tempus. Proin vel varius urna. In posuere justo eget arcu posuere, et pharetra sapien consequat. Pellentesque at odio elementum, venenatis mi vitae, cursus velit. Cras sagittis commodo commodo. Nulla facilisi.</p>
        </div>

        <div className='div3'>
          <img src={myImage2} alt='image3'/>
          <h2>The Importance of Proper form in Exercise</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ultricies mauris. Quisque vitae interdum sapien. Sed nec eleifend mi. Nullam posuere neque non augue dictum, non aliquam urna interdum. Etiam id eros sit amet nulla tincidunt tempus. Proin vel varius urna. In posuere justo eget arcu posuere, et pharetra sapien consequat. Pellentesque at odio elementum, venenatis mi vitae, cursus velit. Cras sagittis commodo commodo. Nulla facilisi.</p>
        </div>
      </div>

    </>
  )
}

export default Blogs
