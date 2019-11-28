import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

function CommentWrite() {
    const classes = useStyles();

    return (
            <div className={classes.container}>
                <TextField className={classes.texto}
                    id="outlined-textarea"
                    label="Escribe un comentario..."
                    placeholder="Tu opinión acerca de nuestros accesorios..."
                    multiline
                    rows="3"
                    margin="normal"
                    borderColor='#ffa000'
                    variant="outlined"
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