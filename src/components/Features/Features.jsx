import css from './Features.module.css';
import { Adults } from 'Icons/Adults';
import { AirConditioner } from 'Icons/AirConditioner';
import { Automatic } from 'Icons/Automatic';
import { Bed } from 'Icons/Bed';
import { CompactDisk } from 'Icons/CompactDisk';
import { Conditioner } from 'Icons/Conditioner';
import { Cooker } from 'Icons/Cooker';
import { Kitchen } from 'Icons/Kitchen';
import { Petrol } from 'Icons/Petrol';
import { Radio } from 'Icons/Radio';

export default function Features({ advert }) {
  const { adults, details, form, length, width, height, tank, consumption } =
    advert;

  const getSeparateValue = value => {
    const formattedLength = value.replace(/(\d*\.?\d+)([a-zA-Z]+)/, '$1 $2');
    return formattedLength;
  };

  const setUpperCaseLetter = word => {
    switch (word) {
      case 'alcove':
        return 'Alcove';
      case 'fullyIntegrated':
        return 'Fully integrated';
      case 'panelTruck':
        return 'Panel truck';
      default:
        return;
    }
  };

  return (
    <div className={css.features_conteiner}>
      <ul className={css.features_list}>
        <li className={css.features_item}>
          <Adults size={20} />
          <span className={css.features_item_text}>{adults} adults</span>
        </li>
        <li className={css.features_item}>
          <Automatic size={20} />
          <span className={css.features_item_text}>Automatic</span>
        </li>
        <li className={css.features_item}>
          <AirConditioner size={20} />
          <span className={css.features_item_text}>AC</span>
        </li>
        <li className={css.features_item}>
          <Petrol />
          <span className={css.features_item_text}>Petrol</span>
        </li>
        <li className={css.features_item}>
          <Kitchen size={20} />
          <span className={css.features_item_text}>kitchen</span>
        </li>
        <li className={css.features_item}>
          <Bed />
          <span className={css.features_item_text}>{details.bads} beds</span>
        </li>
        <li className={css.features_item}>
          <Conditioner />
          <span className={css.features_item_text}>
            {details.airConditioner} air conditioner
          </span>
        </li>
        <li className={css.features_item}>
          <CompactDisk />
          <span className={css.features_item_text}>CD</span>
        </li>
        <li className={css.features_item}>
          <Radio />
          <span className={css.features_item_text}>Radio</span>
        </li>
        <li className={css.features_item}>
          <Cooker />
          <span className={css.features_item_text}>{details.hob} hob</span>
        </li>
      </ul>
      <h3 className={css.features_details_title}>Vehicle details</h3>
      <ul className={css.features_details_list}>
        <li className={css.features_details_item}>
          <span className={css.features_details_text}>Form</span>
          <span className={css.features_details_text}>
            {setUpperCaseLetter(form)}
          </span>
        </li>
        <li className={css.features_details_item}>
          <span className={css.features_details_text}>Length</span>
          <span className={css.features_details_text}>
            {getSeparateValue(length)}
          </span>
        </li>
        <li className={css.features_details_item}>
          <span className={css.features_details_text}>Width</span>
          <span className={css.features_details_text}>
            {getSeparateValue(width)}
          </span>
        </li>
        <li className={css.features_details_item}>
          <span className={css.features_details_text}>Heigth</span>
          <span className={css.features_details_text}>
            {getSeparateValue(height)}
          </span>
        </li>
        <li className={css.features_details_item}>
          <span className={css.features_details_text}>Tank</span>
          <span className={css.features_details_text}>
            {getSeparateValue(tank)}
          </span>
        </li>
        <li className={css.features_details_item}>
          <span className={css.features_details_text}>Consumption</span>
          <span className={css.features_details_text}>{consumption}</span>
        </li>
      </ul>
    </div>
  );
}
