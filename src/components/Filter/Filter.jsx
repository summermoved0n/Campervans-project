import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
import CustomCheckbox from 'services/CustomCheckbox/CustomCheckbox';
import {
  getCheckboxFilteredArray,
  setFilter,
} from '../../redux/advert/advertsSlice';
import { selectCheckboxFilter } from '../../redux/advert/advertsSelectors';
import { AirConditioner } from 'Icons/AirConditioner';
import { Automatic } from 'Icons/Automatic';
import { Kitchen } from 'Icons/Kitchen';
import { Shower } from 'Icons/Shower';
import { Television } from 'Icons/Television';

export default function Filter() {
  const dispatch = useDispatch();
  const checkboxFilter = useSelector(selectCheckboxFilter);

  const locationHandleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(getCheckboxFilteredArray(checkboxFilter));
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
            />
          </li>
          <li className={css.checkbox_item}>
            <CustomCheckbox
              text={'Automatic'}
              component={<Automatic size={32} />}
            />
          </li>
          <li className={css.checkbox_item}>
            <CustomCheckbox
              text={'Kitchen'}
              component={<Kitchen size={32} />}
            />
          </li>
          <li className={css.checkbox_item}>
            <CustomCheckbox text={'TV'} component={<Television size={32} />} />
          </li>
          <li className={css.checkbox_item}>
            <CustomCheckbox
              text={'Shower/WC'}
              component={<Shower size={32} />}
            />
          </li>
        </ul>

        {/* <p>Vehicle type</p>
        <label>
          <input type="checkbox" />
          Van
        </label>
        <label>
          <input type="checkbox" />
          Fully Integrated
        </label>
        <label>
          <input type="checkbox" />
          Alcove
        </label> */}
        <button type="submit">Search</button>
      </form>
    </>
  );
}
