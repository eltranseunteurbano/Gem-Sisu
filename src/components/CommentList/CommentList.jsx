import React from 'react';
import './CommentList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function CommentList(props) {

    return (
        <div className="Comentario">
            <p className="Comentario__nombre">Nombre del usuario</p>
            <p className="Comentario__desc">Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim, pellentesque vehicula sed sem lacinia porta nisi, nascetur placerat varius mus lacus himenaeos congue.</p>

            <div className="Comentario__user">
                <div className="Comentario__user__comentarios">
                    <p className="Comentario__user__comentario">Responder</p>
                </div>

                <div className="Comentario__user__likes">
                    <FontAwesomeIcon icon={faHeart} className="Comentario__user__likes__icon" />
                    <p className="Comentario__user__likes__num">{5}</p>
                </div>
            </div>

        </div>
    );
}

export default CommentList;