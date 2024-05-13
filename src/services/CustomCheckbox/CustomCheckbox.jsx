import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './CustomCheckbox.module.css';
import { toggleCheckboxFilter } from '../../redux/advert/advertsSlice';

export default function CustomCheckbox({ component, text }) {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxChange = e => {
    const { checked, name } = e.target;
    setIsChecked(!isChecked);
    dispatch(toggleCheckboxFilter({ [name]: checked }));
  };

  const getName = name => {
    if (name === 'AC') {
      return 'airConditioner';
    }
    if (name === 'Automatic') {
      return 'transmission';
    }
    if (name === 'Kitchen') {
      return 'kitchen';
    }
    if (name === 'TV') {
      return 'TV';
    }
    if (name === 'Shower/WC') {
      return 'shower';
    }
  };

  return (
    <label className={css.custom_checkbox}>
      <input
        type="checkbox"
        name={getName(text)}
        checked={isChecked}
        onChange={onCheckboxChange}
        value={text}
      />
      <span className={css.checkbox_label}>
        {component}
        {text}
      </span>
    </label>
  );
}
