import React from 'react';

import './SectionTitle.css';

function SectionTitle(props) {
  const { title } = props;
  return (
    <div className="SectionTitle">
      <h3>{title}</h3>
    </div>
  );
}

export default SectionTitle;
