'use strict';

import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    (
      <div>
          This is the Edit page with id of {props.match.params.id}
      </div>
    )
  );
};
export default EditExpensePage;
