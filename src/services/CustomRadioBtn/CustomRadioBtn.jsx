import React from 'react';

import css from './CustomRadioBtn.module.css';

export default function CustomRadioBtn({
  component,
  text,
  selectedOption,
  setSelectedOption,
}) {
  const onRadioChange = e => {
    const { value } = e.target;
    setSelectedOption(value);
  };

  const getNameOfCamperForm = name => {
    if (name === 'Van') {
      return 'panelTruck';
    }
    if (name === 'Fully Integrated') {
      return 'fullyIntegrated';
    }
    if (name === 'Alcove') {
      return 'alcove';
    }
  };

  return (
    <label className={css.custom_radio}>
      <input
        type="radio"
        name="campervans"
        checked={selectedOption === getNameOfCamperForm(text)}
        onChange={onRadioChange}
        value={getNameOfCamperForm(text)}
      />
      <span className={css.radio_label}>
        {component}
        {text}
      </span>
    </label>
  );
}
