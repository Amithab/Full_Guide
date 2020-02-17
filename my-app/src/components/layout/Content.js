import React from 'react';
import { NavLink } from 'react-router-dom';

export const Content = () => (
  <div className="main__content">
    <p>Content goes here!</p>
    <p>Languages</p>
    <ul className="main__links">
      <li><NavLink exact activeClassName="active" to="/python">Python</NavLink></li>
    </ul>
  </div>
);
