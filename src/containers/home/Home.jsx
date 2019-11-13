import React from 'react';
import './Home.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <section className="Home appear">
            <article className="Home__white">
                <div className="Home__white__icons">
                    <Link to="" className="Home__white__icons__icon"><FontAwesomeIcon icon={ faFacebookF }/></Link>
                    <Link to="" className="Home__white__icons__icon"><FontAwesomeIcon icon={ faInstagram }/></Link>
                    <Link to="" className="Home__white__icons__icon"><FontAwesomeIcon icon={ faTwitter }/></Link>
                </div>
            </article>
            <article className="Home__yellow">
                <h1 className="Home__yellow__title">Un gran <strong>texto</strong> aquí <br /> en web</h1>
            </article>

            <article className="Home__img">
                <img src={process.env.PUBLIC_URL + '/img/bienvenida.png'} alt="Imagen de Bienvenida"/>
            </article>

            <article className="Home__chat">
                <FontAwesomeIcon icon={ faCommentDots } className="Home__chat__icon"/>
            </article>
        </section>
    )
}

export default Home;