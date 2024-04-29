import React from 'react';

import Cover from './Cover';
import Footer from './Footer';
import HeaderNavBar from './HeaderNavBar';
import Timeline from './Timeline';
import HowEsimWorks from './HowEsimWorks';
import 'pure-react-carousel/dist/react-carousel.es.css';

const HomePage = () => (
  <div>
    <HeaderNavBar />
    <Cover />
    <Timeline />
    <HowEsimWorks />
    <Footer />
  </div>
);

export default HomePage;
