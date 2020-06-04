import React from 'react';
import './css/home.css';

export default function Home() {
    return (
        <div className="home-component">
            <div className="carousel-wrapper">
                <div className="carousel">
                    <img className="carousel__photo initial" src="./img/slider/camera01.jpeg" alt="cameras" />
                    <img className="carousel__photo" src="./img/slider/camera2.jpeg" alt="cameras" />
                    <img className="carousel__photo" src="./img/slider/camera03.jpeg" alt="cameras" />
                    <img className="carousel__photo" src="./img/slider/camera4.jpeg" alt="cameras" />
                    <img className="carousel__photo" src="./img/slider/camera3.jpeg" alt="cameras" />
                    <div className="carousel__button--next"></div>
                    <div className="carousel__button--prev"></div>
                </div>
            </div>

            <div id="grid-container">
                <section>
                    <img src="https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="canon camera" />
                    <h3>Canon Camera</h3>
                </section>
                <section>
                    <img src="https://images.unsplash.com/photo-1542123720-dce4d1663d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80" alt="2000camera" />
                    <h3>2000 Camera</h3>
                </section>
                <section>
                    <img src="https://images.unsplash.com/photo-1542124061437-b227f39e39a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80" alt="MinoltaCamera" />
                    <h3>Minolta Camera</h3>
                </section>
                <section>
                    <img src="https://images.unsplash.com/photo-1526658771257-81040dee730d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="PentaxCamera" />
                    <h3>Pentax Camera</h3>
                </section>
            </div>
            
            <section id="Tips-sec">
    
                <iframe className="video-name" title="Video" src="https://www.youtube.com/embed/Cb5bjlnDkCs" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <hr role="tournament4"/>
                <h2>Photography Tips</h2>
                <p> Photos are one of the best ways we capture memories, tell stories, and share life’s joy. Whether you’re a
                new mom looking to ways to capture the best photos possible of your baby growing up, looking for
                creative Instagram photo ideas, or you’re planning a trip to a picturesque location with plenty of photo
                opportunities – there’s many different reasons to pick up photography. <br />
                But if you’re new to DSLRs or not quite used to your smartphone camera, your camera may feel a little
                intimidating.</p>
                <p>Here we help the beginner or more experienced with photography, here are some of our favorite tips that
                will help you improve your photography! </p>
                <hr role="tournament2"/>
            </section>

            <div className="grid-container">
                <div className="location-listing">
                    <span className="location-title">Santa Monica </span>
                    <figure className="location-image">
                        <img src="./img/location-listing/location-santa-monica.jpg" alt="Santa monica" />
                    </figure>
                </div>
                <div className="location-listing">
                    <span className="location-title">Boston</span>
                    <figure className="location-image">
                        <img src="./img/location-listing/location-canada.jpg" alt="Canada" />
                    </figure>
                </div>
                <div className="location-listing">
                    <span className="location-title">New York </span>
                    <figure className="location-image">
                        <img src="./img/location-listing/location-new-york.jpg" alt="new york" />
                    </figure>
                </div>
                <div className="location-listing">
                    <span className="location-title">New Orleans</span>
                    <figure className="location-image">
                        <img src="./img/location-listing/location-new-orleans.jpg" alt="new orleans" />
                    </figure>
                </div>
                <div className="location-listing">
                    <span className="location-title">Los Angeles</span>
                    <figure className="location-image">
                        <img src="./img/location-listing/location-the-beach.jpg" alt="the beach" />
                    </figure>
                </div>
                <div className="location-listing">
                    <span className="location-title">Seattle</span>
                    <figure className="location-image">
                        <img src="./img/location-listing/location-jakobseatle.jpg" alt="new zealan" />
                    </figure>
                </div>
            </div>
        </div>
    )
}
