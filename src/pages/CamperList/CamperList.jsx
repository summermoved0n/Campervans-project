import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import css from './CamperList.module.css';
import { getAdvertsThunk } from '../../redux/advert/advertsOperations';
import {
  selectCheckboxFilter,
  selectRadioBtnFilter,
  selectVisibleAdverts,
} from '../../redux/advert/advertsSelectors';
import Filter from 'components/Filter/Filter';
import CamperListItems from 'components/CamperListItems/CamperListItems';

export default function CamperList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(4);
  const dispatch = useDispatch();
  const filteredAdverts = useSelector(selectVisibleAdverts);
  const checkboxFilter = useSelector(selectCheckboxFilter);
  const radioBtnFilter = useSelector(selectRadioBtnFilter);

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  const filteredCampers = filteredAdverts.filter(camper => {
    return (
      (!checkboxFilter.airConditioner || camper.details.airConditioner) &&
      (!checkboxFilter.transmission || camper.transmission) &&
      (!checkboxFilter.kitchen || camper.details.kitchen) &&
      (!checkboxFilter.TV || camper.details.TV) &&
      (!checkboxFilter.shower || camper.details.shower) &&
      (!radioBtnFilter || camper.form === radioBtnFilter)
    );
  });

  const totalPages = Math.ceil(filteredCampers.length / perPage);
  const indexLastItem = currentPage * perPage;
  const currentAdverts = filteredCampers.slice(0, indexLastItem);

  return (
    <section className={css.catalog_section}>
      <div className={css.filter_block}>
        <Filter />
      </div>

      <div className={css.catalog_block}>
        {currentAdverts.length > 0 ? (
          <ul className={css.catalog_list}>
            {currentAdverts.map(advert => (
              <CamperListItems
                key={advert._id}
                id={advert._id}
                advert={advert}
              />
            ))}
          </ul>
        ) : (
          <p className={css.cstalog_nocontent_msg}>
            Can't find any campervan in this location <span>🤷‍♂️</span>
          </p>
        )}
        {currentPage < totalPages && (
          <button
            className={css.load_more_btn}
            type="button"
            onClick={() => {
              setCurrentPage(prev => prev + 1);
            }}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
}
