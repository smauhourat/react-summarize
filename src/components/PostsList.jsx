import { useState, useEffect } from "react"; 
import Post from './Post'
import classes from './PostsList.module.css'
import { PropTypes } from "prop-types";

const PostsList = () => {

  const [posts, setPosts] = useState([])
  const [isFetching, setIsFetching] = useState(false)

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

  useEffect(() => {
    // Definimos una función async para hacer la solicitud
    const fetchData = async () => {
      try {
        setIsFetching(true)
        const response = await fetch('http://localhost:8080/posts');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const result = await response.json();
        //console.log('result =>', result)
        setPosts(result.posts); // Actualizamos el estado con los datos
      } catch (error) {
        console.log(error.message); // Manejo de error
      } finally {
        setIsFetching(false)
      }
    };

    fetchData(); // Llamamos a la función de carga de datos
    //console.log(posts)
  }, []);  

  return (
      <>
      {!isFetching && 
        <ul className={classes.posts}>
          {posts.length > 0 && posts.map((e, index) => {
            return <Post key={index} author={e.author} body={e.body} />
          })}
        </ul>
      }
      {!isFetching && posts.length == 0 && <h1>No posts yet</h1>}
      {isFetching && <p>Loading posts....</p>}
      </>);
};


PostsList.propTypes = {
  onStopPosting: PropTypes.func,
}
export default PostsList;
