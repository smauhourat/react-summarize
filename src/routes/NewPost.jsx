import Modal from '../components/Modal'
import { useState } from "react";
import classes from './NewPost.module.css';
import { Link } from 'react-router-dom'

function NewPost({ onAddPost }) {

    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    const onBodyChangeHandler = (event) => {
        setEnteredBody(event.target.value)
    }

    const onAuthorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        onAddPost({ body: enteredBody, author: enteredAuthor })
        //onCancel()
    }


    return (
        <Modal>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={onBodyChangeHandler} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required onChange={onAuthorChangeHandler} />
                </p>
                <p className={classes.actions}>
                    <Link type="button" to='/'>Cancel</Link>
                    <button>Add</button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;