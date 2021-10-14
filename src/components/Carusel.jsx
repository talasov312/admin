import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import firstImg from '../assets/elitefon.jpg'
import secondImg from '../assets/Apple.jpg'
import thirdImg from '../assets/nout.jpg'

const Carusel = () => {
    return (
        <div>
              <Carousel className="car">
                <div>
                    <img src={firstImg} />
                    
                </div>
                <div>
                    <img src={secondImg} />
                   
                </div>
                <div>
                    <img src={thirdImg} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Carusel;