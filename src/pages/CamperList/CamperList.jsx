import Filter from 'components/Filter/Filter';
import css from './CamperList.module.css';
import CamperListItems from 'components/CamperListItems/CamperListItems';

export default function CamperList() {
  return (
    <section className={css.catalog_section}>
      <div className={css.filter_block}>
        <Filter />
      </div>

      <div className={css.catalog_block}>
        <CamperListItems />
      </div>
    </section>
  );
}
