import React, { useState } from 'react';

import css from './CustomCheckbox.module.css';

export default function CustomCheckbox({ component, text, setCheckboxGroup }) {
  const [isChecked, setIsChecked] = useState(false);

  const onCheckboxChange = e => {
    const { checked, name } = e.target;
    setIsChecked(!isChecked);
    const data = { [name]: checked };
    setCheckboxGroup(prevState => ({ ...prevState, ...data }));
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
