import React from "react";

import Button from "../components/button";
import photo from "../util/photo.png"

import './home.css';

const Home = () => {
    return (<>
        <div className="home">
            <div className="home-page">
                <div className="background">
                    <div className="description">
                        <h1>Elevate your space with a click, because every room deserves a touch of 'add to cart' magic!</h1>
                        
                        <Button  href='/products'>Go to store!</Button>
                    </div>
                    <div className="background-image">
                        <img className="bg-image" src={photo}  alt="bg.png"/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};

export default Home;