import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import css from './CamperList.module.css';
import { getAdvertsThunk } from '../../redux/advert/advertsOperations';
import { selectAllAdverts } from '../../redux/advert/advertsSelectors';
import Filter from 'components/Filter/Filter';
import CamperListItems from 'components/CamperListItems/CamperListItems';

export default function CamperList() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAllAdverts);

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  return (
    <section className={css.catalog_section}>
      <div className={css.filter_block}>
        <Filter />
      </div>

      <div className={css.catalog_block}>
        <ul>
          {adverts.map(advert => (
            <CamperListItems key={advert._id} id={advert._id} advert={advert} />
          ))}
        </ul>
      </div>
    </section>
  );
}
