import React from 'react';

import Select from '../components/Select';

function Header() {
  console.log('header render');

  return (
    <div className="container__header">
      <div className="header">
        <Select />
      </div>
    </div>
  );
}

export default Header;