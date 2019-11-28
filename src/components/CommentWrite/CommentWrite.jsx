import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

function CommentWrite(props) {


    const classes = useStyles();

    const onHandleEnter = (e) => {
        if (e.keyCode === 13) {
            props.onHandleSubmit();
        }
    };

    return (
        <div className={classes.container}>
            <TextField className={classes.texto}
                id="outlined-textarea"
                label="Escribe un comentario..."
                placeholder="Tu opinión acerca de nuestros accesorios..."
                multiline
                rows="3"
                margin="normal"
                variant="outlined"
                value={props.value}
                onChange={(e) => props.onHandleChange(e.target.value)}
                onKeyUp={onHandleEnter}
            />
        </div>
    );
}


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        width: 490,
        borderColor: '##ffa000',
    },
});

export default CommentWrite;