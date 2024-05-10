import React, { useState } from 'react';
import css from './CustomCheckbox.module.css';

export default function CustomCheckbox({ component, text }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className={css.custom_checkbox}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className={css.checkbox_label}>
        {component}
        {text}
      </span>
    </label>
  );
}
