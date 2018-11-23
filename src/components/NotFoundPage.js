'use strict';

import { Link } from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => (
  <div>
        This is the 404 Page -
    {' '}
    <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;
