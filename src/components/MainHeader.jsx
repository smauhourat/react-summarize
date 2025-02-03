import { Link } from 'react-router-dom'
import classes from './MainHeader.module.css'
import { MdPostAdd, MdMessage } from 'react-icons/md';

const MainHeader = () => {
  return (
    <header className={classes.header}>
        <h1 className={classes.logo}>
              <MdMessage />
            React
        </h1>
        <Link to="/create-post" className={classes.button} >
              <MdPostAdd size={18} />
            Add Post
        </Link>
    </header>
  );
};

export default MainHeader;
