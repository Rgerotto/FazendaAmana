import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './head.css'
function Head() {
  return (
    <>
      <Carousel className='carrousel-container'>
                <div className='background'>
                    <img src="../img/img1.avif" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className='background'>
                    <img src="../img/img2.avif" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className='background'>
                    <img src="../img/img4.avif" />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
            </Carousel>
    </>
  )
}

export default Head
