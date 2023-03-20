import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div>
      <Link to="/" relative="path">
        home
      </Link>
    </div>
  );
}

export default SideBar;
