import React from 'react';
import './Comments.scss';
import CommentList from '../../components/CommentList/CommentList';
import NavBar from '../../components/NavBar/NavBar';
import CommentWrite from '../../components/CommentWrite/CommentWrite';

function Comments() {
    return (
        <>
            <NavBar />
            <div className="Comentarios">
            <h1 className="titulo">Comentarios</h1>
            <div className="Comentarios__dentro">
                <CommentList />
                <CommentList />
            </div>
                <CommentWrite/>
            </div>
        </>
    );
}

export default Comments;