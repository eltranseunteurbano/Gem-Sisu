import React from 'react';
import './About.scss';

const About = () => {
    const backgroundImage = {
        backgroundImage: 'url(' + process.env.PUBLIC_URL  + '/img/About.svg)'
    }
    return(
        <section className="About appear">
            <article className="About__left">
                <h1 className="About__left__title">Every product <br /> with <strong> 3D printing</strong> </h1>
                <p className="About__left__desc">Personalización de productos también.</p>
                <p className="About__left__text">Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, congue mollis suscipit habitasse facilisis arcu sem.</p>
                <button type="button" className="About__left__btn">Start now</button>
            </article>
            <article className="About__right" style={backgroundImage}/>
        </section>
    )
}

export default About;