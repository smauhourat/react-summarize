import { useLoaderData } from "react-router-dom";
import Post from './Post'
import classes from './PostsList.module.css'
import { PropTypes } from "prop-types";

const PostsList = () => {
  const posts = useLoaderData();
  // const onAddPostHandler = (data) => {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   })
  //   setPosts([...posts, data] )
  //   //console.log(posts)
  // }


  return (
      <>
      {
        <ul className={classes.posts}>
          {posts.length > 0 && posts.map((e, index) => {
            return <Post key={index} author={e.author} body={e.body} />
          })}
        </ul>
      }
      {posts.length == 0 && <h1>No posts yet</h1>}
      </>);
};


PostsList.propTypes = {
  onStopPosting: PropTypes.func,
}
export default PostsList;
