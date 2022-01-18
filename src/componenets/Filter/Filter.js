import React from 'react';
import PropTypes from 'prop-types';
import { FilterFound } from './Filter.styled';

export default function Filter({ value, onChangeFilter }) {
  return (
    <FilterFound>
      Find contacts by name
      <input type="text" value={value} onChange={e => onChangeFilter(e.target.value)} />
    </FilterFound>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func.isRequired,
};
