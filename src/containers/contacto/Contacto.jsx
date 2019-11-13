import React from 'react';
import './Contacto.scss';

const Contacto = () => {
    const backgroundImage = {
        backgroundImage: 'url(' + process.env.PUBLIC_URL  + '/img/contact.svg)'
    }
    return(
        <section className="Contacto appear">
            <article className="Contacto__left">
                <h1 className="Contacto__left__title">Every product <br /> with <strong> 3D printing</strong> </h1>
                <p className="Contacto__left__desc">Personalización de productos también.</p>
                <p className="Contacto__left__text">Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, congue mollis suscipit habitasse facilisis arcu sem.</p>
                <button type="button" className="Contacto__left__btn">Start now</button>
            </article>
            <article className="Contacto__right" style={backgroundImage}/>
        </section>
    )
}

export default Contacto;