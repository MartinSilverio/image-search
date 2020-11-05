import React from 'react';
import useModalStore from '../../util/store';
import './ImageItem.scss';

function ImageItem({ gallery }) {
  const { title = '', id, cover, is_album, link, type } = gallery;
  const setModalImage = useModalStore((state) => state.setModalImage);
  const toggleModal = useModalStore((state) => state.toggleModal);
  const setTitle = useModalStore((state) => state.setTitle);

  let imageURL;
  if (is_album) {
    imageURL = `https://i.imgur.com/${cover}.jpg`;
  } else if (type === 'video/mp4') {
    imageURL = `https://i.imgur.com/${id}.jpg`;
  } else {
    imageURL = link;
  }

  const onClick = () => {
    setModalImage(imageURL);
    setTitle(title);
    toggleModal();
  };
  return (
    <li className='image-item'>
      <img className='image' alt={title} src={imageURL} />
      <div className='image-overlay' onClick={onClick}>
        <button className='image-overlay-btn'>View →</button>
      </div>
    </li>
  );
}

export default ImageItem;
