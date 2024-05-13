import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import css from './CamperList.module.css';
import { getAdvertsThunk } from '../../redux/advert/advertsOperations';
import { selectVisibleAdverts } from '../../redux/advert/advertsSelectors';
import Filter from 'components/Filter/Filter';
import CamperListItems from 'components/CamperListItems/CamperListItems';

export default function CamperList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(4);
  const dispatch = useDispatch();
  const filteredAdverts = useSelector(selectVisibleAdverts);

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  const totalPages = Math.ceil(filteredAdverts.length / perPage);
  const indexLastItem = currentPage * perPage;
  const currentAdverts = filteredAdverts.slice(0, indexLastItem);

  console.log(currentAdverts);

  return (
    <section className={css.catalog_section}>
      <div className={css.filter_block}>
        <Filter />
      </div>

      <div className={css.catalog_block}>
        {currentAdverts.length > 0 ? (
          <ul>
            {currentAdverts.map(advert => (
              <CamperListItems
                key={advert._id}
                id={advert._id}
                advert={advert}
              />
            ))}
          </ul>
        ) : (
          <p>
            Can't find any campervan in this location <span>🤷‍♂️</span>
          </p>
        )}
        <br />
        {currentPage < totalPages && (
          <button
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
