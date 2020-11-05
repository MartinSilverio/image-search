import React from 'react';
import { SWRConfig } from 'swr';
import axios from 'axios';
import { requestOptions } from './util/constants';
import GalleryPage from './pages/gallery/GalleryPage';

import './App.scss';

const fetcher = (url) =>
  axios.get(url, requestOptions).then((res) => {
    return res.data.data;
  });

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: fetcher,
        revalidateOnFocus: false,
      }}
    >
      <div className='App'>
        <GalleryPage />
      </div>
    </SWRConfig>
  );
}

export default App;
