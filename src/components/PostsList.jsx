import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {

    // let modalContent;

    // if (modalIsVisible) {
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost
    //                 onBodyChange={bodyChangeHandler}
    //                 onAuthorChange={authorChangeHandler}
    //             />
    //         </Modal>
    //     );
    // }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                <NewPost
                    // onBodyChange={bodyChangeHandler}
                    // onAuthorChange={authorChangeHandler}
                    onCancel={onStopPosting}
                />
                </Modal>
            )}
            <ul className={classes.posts}>
                {/* <Post author={enteredAuthor} body={enteredBody} /> */}
                <Post author="Chin" body="React is silly" />
            </ul>
        </>
    )
}

export default PostsList;