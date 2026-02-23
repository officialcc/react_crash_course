import { useState } from "react";

import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

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
                    onAddPost={addPostHandler}
                />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {/* <Post author={enteredAuthor} body={enteredBody} /> */}
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>No posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    )
}

export default PostsList;