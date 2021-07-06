import React from 'react';

import './PageTitle.css';

function PageTitle(props) {
  const { error, title, subtitle } = props;
  return (
    <div className={`PageTitle ${error ? 'error' : ''}`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default PageTitle;
