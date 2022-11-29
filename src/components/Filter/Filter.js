import React, { Component } from 'react';

// class Filter extends Component {}

const Filter = ({ value, onChange }) => (
  <label>
    Filter on name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
