import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div>To-DO-List</div>
      <nav>
        <ul>
          <li>Today</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
