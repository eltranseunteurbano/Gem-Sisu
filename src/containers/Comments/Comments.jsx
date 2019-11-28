import React, { useState, useEffect } from 'react';
import './Comments.scss';
import CommentList from '../../components/CommentList/CommentList';
import NavBar from '../../components/NavBar/NavBar';
import CommentWrite from '../../components/CommentWrite/CommentWrite';
import { getComments, getUser, makeComment } from '../../services/firebaseService';

function Comments() {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments()
        .then((responseComments) => {
            setComments(sortComments(responseComments));
        }, (error) => {
            alert(error);
        });
        const myInterval = setInterval(() => {
            getComments()
                .then((responseComments) => {
                    setComments(sortComments(responseComments));
                }, (error) => {
                    alert(error);
                })
        }, 2000);
        return () => clearInterval(myInterval);
    }, []);

    const [text, setText] = useState("");

    const onHandleLoad = async () => {

    };

    const sortComments = (newComments) => {

        let newCommentsList = [...newComments];
        newCommentsList.sort((a, b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            return aDate - bDate;
        });
        return newCommentsList;
    };

    const onHandleSubmit = async () => {
        if (text.length > 0) {
            const myDate = new Date();
            let formattedDate = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate() + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
            const userName = getUser().displayName;
            const comment = text;
            try {
                const responseComments = await makeComment(userName, formattedDate, comment);
                setComments(sortComments(responseComments));
                setText("");
            } catch (error) {
                alert(error.message);
            }
        }
    };

    return (
        <>
            <NavBar />
            <div className="Comentarios">
                <h1 className="titulo">Comentarios</h1>
                <div className="Comentarios__dentro">
                    {
                        comments.length > 0 &&
                        comments.map((comment, index) => <CommentList key={index} name={comment.name} date={comment.date} comment={comment.comment} />)
                    }
                </div>
                <CommentWrite value={text} onHandleChange={setText} onHandleSubmit={onHandleSubmit} />
            </div>
        </>
    );
}

export default Comments;