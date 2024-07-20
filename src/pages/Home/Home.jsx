import bigCampervan from '../../images/big_camparvan.jpg';
import midCampervan from '../../images/mideum_campervan.jpg';
import smallCampervan from '../../images/small_campervan.jpg';

import css from './Home.module.css';
import HowItWorks from 'components/HowItWorks/HowItWorks';
import WhyChooseUs from 'components/WhyChooseUs/WhyChooseUs';
import { TextLink } from 'services/styles/styledComponents';

export default function Home() {
  return (
    <div className={css.home_conteiner}>
      <h1 className={css.main_title}>Discover the World with Our Campervans</h1>
      <div className={css.home_content_wraper}>
        <div className={css.home_content_left}>
          <img src={bigCampervan} alt="campervan in desert" width={300} />
          <WhyChooseUs />
        </div>
        <img
          className={css.camper_img}
          src={midCampervan}
          alt="campervan in desert"
          width={300}
        />
        <div className={css.home_content_right}>
          <HowItWorks />
          <img src={smallCampervan} alt="campervan in desert" width={300} />

          <h2 className={css.main_subtitle}>
            Ready to Embark on an Adventure?
          </h2>
          <p className={css.home_text}>
            Plan your next trip with us! Visit our{' '}
            <TextLink to="/catalog">Catalog</TextLink> section to view available
            campervans, or contact us for more information. We look forward to
            being a part of your unforgettable journeys!
          </p>
        </div>
      </div>
    </div>
  );
}
