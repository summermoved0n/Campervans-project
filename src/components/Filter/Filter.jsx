import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './Filter.module.css';
import CustomCheckbox from 'services/CustomCheckbox/CustomCheckbox';
import CustomRadioBtn from 'services/CustomRadioBtn/CustomRadioBtn';

import {
  setFilter,
  setRadioBtnFilter,
  toggleCheckboxFilter,
} from '../../redux/advert/advertsSlice';
import { AirConditioner } from 'Icons/AirConditioner';
import { Automatic } from 'Icons/Automatic';
import { Kitchen } from 'Icons/Kitchen';
import { Shower } from 'Icons/Shower';
import { Television } from 'Icons/Television';

export default function Filter() {
  const [checkboxGroup, setCheckboxGroup] = useState({
    airConditioner: false,
    transmission: false,
    kitchen: false,
    TV: false,
    shower: false,
  });
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  const locationHandleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(toggleCheckboxFilter(checkboxGroup));
    dispatch(setRadioBtnFilter(selectedOption));
  };

  return (
    <>
      <div className={css.filter_conteiner}>
        <p>Location</p>
        <input type="text" onChange={locationHandleChange} />
      </div>
      <form className={css.filter_conteiner} onSubmit={onFormSubmit}>
        <p>Filters</p>
        <p>Vehicle equipment</p>
        <hr />
        <ul className={css.checkbox_list}>
          <li className={css.checkbox_item}>
            <CustomCheckbox
              text={'AC'}
              component={<AirConditioner size={32} />}
              setCheckboxGroup={setCheckboxGroup}
            />
          </li>
          <li className={css.checkbox_item}>
            <CustomCheckbox
              text={'Automatic'}
              component={<Automatic size={32} />}
              setCheckboxGroup={setCheckboxGroup}
            />
          </li>
          <li className={css.checkbox_item}>
            <CustomCheckbox
              text={'Kitchen'}
              component={<Kitchen size={32} />}
              setCheckboxGroup={setCheckboxGroup}
            />
          </li>
          <li className={css.checkbox_item}>
            <CustomCheckbox
              text={'TV'}
              component={<Television size={32} />}
              setCheckboxGroup={setCheckboxGroup}
            />
          </li>
          <li className={css.checkbox_item}>
            <CustomCheckbox
              text={'Shower/WC'}
              component={<Shower size={32} />}
              setCheckboxGroup={setCheckboxGroup}
            />
          </li>
        </ul>

        <br />
        <p>Vehicle type</p>
        <hr />
        <ul className={css.radiobtn_list}>
          <li className={css.radiobtn_item}>
            <CustomRadioBtn
              text={'Van'}
              component={<Automatic size={32} />}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </li>
          <li className={css.radiobtn_item}>
            <CustomRadioBtn
              text={'Fully Integrated'}
              component={<Automatic size={32} />}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </li>
          <li className={css.radiobtn_item}>
            <CustomRadioBtn
              text={'Alcove'}
              component={<Automatic size={32} />}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </li>
        </ul>

        <button type="submit">Search</button>
      </form>
    </>
  );
}
