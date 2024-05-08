import css from './Features.module.css';
import icons from '../Images/sprite.svg';

export default function Features({ advert }) {
  const { adults, details, form, length, width, height, tank, consumption } =
    advert;
  console.log(advert);

  return (
    <div>
      <ul>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-users`}></use>
          </svg>
          <span>{adults} adults</span>
        </li>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-automatic`}></use>
          </svg>
          <span>Automatic</span>
        </li>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-automatic`}></use>
          </svg>
          <span>AC</span>
        </li>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-petrol`}></use>
          </svg>
          <span>Petrol</span>
        </li>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-kitchen`}></use>
          </svg>
          <span>kitchen</span>
        </li>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-bed`}></use>
          </svg>
          <span>{details.bads} beds</span>
        </li>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-air-conditioner`}></use>
          </svg>
          <span>{details.airConditioner} air conditioner</span>
        </li>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-disk`}></use>
          </svg>
          <span>CD</span>
        </li>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-radio`}></use>
          </svg>
          <span>Radio</span>
        </li>
        <li>
          <svg width={20} height={20}>
            <use xlinkHref={`${icons}#icon-radio`}></use>
          </svg>
          <span>{details.hob} hobs</span>
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
