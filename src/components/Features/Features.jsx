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

  return (
    <div>
      <ul>
        <li>
          <Adults />
          <span>{adults} adults</span>
        </li>
        <li>
          <Automatic />
          <span>Automatic</span>
        </li>
        <li>
          <AirConditioner />
          <span>AC</span>
        </li>
        <li>
          <Petrol />
          <span>Petrol</span>
        </li>
        <li>
          <Kitchen />
          <span>kitchen</span>
        </li>
        <li>
          <Bed />
          <span>{details.bads} beds</span>
        </li>
        <li>
          <Conditioner />
          <span>{details.airConditioner} air conditioner</span>
        </li>
        <li>
          <CompactDisk />
          <span>CD</span>
        </li>
        <li>
          <Radio />
          <span>Radio</span>
        </li>
        <li>
          <Cooker />
          <span>{details.hob} hob</span>
        </li>
      </ul>
      <p>Vehicle details</p>
      <hr />
      <ul>
        <li className={css.item_details}>
          <span>Form</span>
          <span>{form}</span>
        </li>
        <li className={css.item_details}>
          <span>Length</span>
          <span>{length}</span>
        </li>
        <li className={css.item_details}>
          <span>Width</span>
          <span>{width}</span>
        </li>
        <li className={css.item_details}>
          <span>Heigth</span>
          <span>{height}</span>
        </li>
        <li className={css.item_details}>
          <span>Tank</span>
          <span>{tank}</span>
        </li>
        <li className={css.item_details}>
          <span>Consumption</span>
          <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
}
