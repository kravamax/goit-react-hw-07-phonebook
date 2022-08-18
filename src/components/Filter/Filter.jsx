import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  return (
    <div className={s.filterContainer}>
      <h4 className={s.title}>Find contacts by name</h4>
      <input
        className={s.input}
        type="text"
        // value={value}
        onChange={event => dispatch(setFilter(event.target.value))}
      ></input>
    </div>
  );
};

export default Filter;
