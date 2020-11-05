import React, { useState } from 'react';
import ImageModal from '../../components/image-modal/ImageModal';
import ImageList from '../../components/image-list/ImageList';
import SearchInput from '../../components/search-input/SearchInput';

import './GalleryPage.scss';

function GalleryPage() {
  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState(null);

  const onSubmit = () => {
    setSearchTerm(encodeURIComponent(inputText));
    setInputText('');
  };

  const onChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div id='gallery-page'>
      <SearchInput onChange={onChange} onSubmit={onSubmit} value={inputText} />
      <ImageList searchTerm={searchTerm} />
      <ImageModal />
    </div>
  );
}

export default GalleryPage;
