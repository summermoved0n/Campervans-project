import { Route, Routes } from 'react-router-dom';

import CamperList from 'pages/CamperList/CamperList';
import Favorite from 'pages/Favorite/Favorite';
import Home from 'pages/Home/Home';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<CamperList />} />
        <Route path="favorites" element={<Favorite />} />
      </Route>
    </Routes>
  );
}
