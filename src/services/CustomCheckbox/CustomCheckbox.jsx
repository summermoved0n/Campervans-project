import React, { useState } from 'react';
import css from './CustomCheckbox.module.css';

export default function CustomCheckbox({ component, text }) {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  const clickOnCheckbox = e => {
    console.log(e.target.value);
    setIsChecked(!isChecked);
  };

  return (
    <label className={css.custom_checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={clickOnCheckbox}
        value={text}
      />
      <span className={css.checkbox_label}>
        {component}
        {text}
      </span>
    </label>
  );
}
