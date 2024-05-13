import React from 'react';

import css from './Filter.module.css';

import { AirConditioner } from 'Icons/AirConditioner';
import { Automatic } from 'Icons/Automatic';
import { Kitchen } from 'Icons/Kitchen';
import { Shower } from 'Icons/Shower';
import { Television } from 'Icons/Television';
import CustomCheckbox from 'services/CustomCheckbox/CustomCheckbox';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/advert/advertsSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const locationHandleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <>
      <div className={css.filter_conteiner}>
        <p>Location</p>
        <input type="text" onChange={locationHandleChange} />
      </div>
      <form className={css.filter_conteiner}>
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
        <button>Search</button>
      </form>
    </>
  );
}
