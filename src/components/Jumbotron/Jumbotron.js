import React from 'react';

const Jumbotron = () => {
    return (
        <section className="jumbotron-fluid d-flex" style={{backgroundImage: "url(img/scuba2.jpg)"}}>
            <div className="jumbotron container justify-content-center align-self-center">
                <h1 className="display-5 text-uppercase text-center">The Best Way to Observe A Fish Is To Become A Fish</h1>
                <p className="lead text-uppercase text-center">Jacques cousteau</p>
            </div>
        </section>
    );
}
 
export default Jumbotron;