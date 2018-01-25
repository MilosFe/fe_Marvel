import React from 'react'
import Search from '../Search';

export const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-8 col-off-2 hero-form">
          <Search/>
        </div>
      </div>
    </div>
  </header>
);
