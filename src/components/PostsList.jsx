import { useLoaderData } from "react-router-dom";
import Post from './Post'
import classes from './PostsList.module.css'
import { PropTypes } from "prop-types";
import { PiLegoSmileyThin } from "react-icons/pi";

const PostsList = () => {
  const posts = useLoaderData();

  return (
      <>
      {
        <ul className={classes.posts}>
          {posts.length > 0 && posts.map((e) => {
            return <Post key={e.id} id={e.id} author={e.author} body={e.body} />
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
