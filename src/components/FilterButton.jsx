'use strict';
import { useState } from 'react';
import Mask from './Mask';
import CloseButton from './CloseButton';

const FilterButton = ({ filterValues, setFilterValues }) => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const escape = (e) => {
    if (e.key === 'Escape' && showForm) {
      toggleForm();
      document.removeEventListener('keydown', escape);
    }
  };
  document.addEventListener('keydown', escape);
  const [doneValue, setDoneValue] = useState(0);
  const filter = () => {
    const x = filterValues;
    x.done = Number(doneValue);
    setFilterValues(x);
    console.log(filterValues);
  };
  if (showForm) {
    return (
      <>
        <div className='filter-button' onClick={toggleForm}></div>
        <Mask close={toggleForm} display={true} />
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
