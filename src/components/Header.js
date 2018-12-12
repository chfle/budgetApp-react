import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Budget</h1>
        </Link>
        <button onClick={startLogout}>logout</button>
      </div>
    </div>
  </header>
);

const MapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, MapDispatchToProps)(Header);
