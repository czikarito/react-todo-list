import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='topnav'>
      <nav>
        <ul>
          <li className='home'>
            <Link to='/'>Todo List</Link>
          </li>
          <li>
            <Link to='/todo/add'>Add Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
