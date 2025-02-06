'use strict';
import { useState, useEffect } from 'react';
import Mask from './Mask';
import CloseButton from './CloseButton';

const FilterButton = ({ filterValues, functions }) => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    showForm ? setShowForm(false) : setShowForm(true);
  };
  // close on escape press
  useEffect(() => {
    const escape = (e) => {
      if (e.key === 'Escape') {
        setShowForm(false);
      }
    };
    if (showForm) document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [showForm]);

  const [doneValue, setDoneValue] = useState(0);
  const filter = () => {
    const x = filterValues;
    x.done = Number(doneValue);
    functions.setFilterValues(x);
    console.log(filterValues);
  };
  if (showForm) {
    return (
      <>
        <div className='filter-button' onClick={toggleForm}></div>
        <Mask onClose={toggleForm} />
        <div className='task-filter-div'>
          <CloseButton close={toggleForm} />
          <label htmlFor='filter-done'>Filter by completion</label>
          <select
            name='filter-done'
            id='filter-done'
            value={doneValue}
            onChange={(e) => setDoneValue(e.target.value)}
          >
            <option value={0}>All</option>
            <option value={1}>Incomplete</option>
            <option value={2}>Completed</option>
          </select>
          <div className='flex'>
            <button className='submit-button' onClick={filter}>
              Filter
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='filter-button' onClick={toggleForm}></div>
      </>
    );
  }
};

export default FilterButton;
