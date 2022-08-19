import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import s from './Filter.module.css';

const Filter = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className={s.filterContainer}>
      <h4 className={s.title}>Find contacts by name</h4>

      <input
        className={s.input}
        type="text"
        value={value}
        name="filter"
        onChange={event => {
          handleChange(event);
          return dispatch(setFilter(event.currentTarget.value));
        }}
      ></input>
    </div>
  );
};

export default Filter;
