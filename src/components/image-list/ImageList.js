import React, { Fragment } from 'react';
import ImageItem from '../image-item/ImageItem';
import { useSWRInfinite } from 'swr';
import { getKey } from '../../util/constants';
import Loader from '../loader/Loader';
import './ImageList.scss';

function ImageList({ searchTerm }) {
  const {
    data: galleryResult,
    size,
    setSize,
    isValidating,
    error,
  } = useSWRInfinite(getKey(searchTerm));

  if (error) {
    return (
      <div className='error-message'>
        <p>There was a problem, please try searching again</p>
      </div>
    );
  }
  if (searchTerm && !galleryResult) return <Loader />;

  const onClick = () => {
    setSize(size + 1);
  };

  return (
    <Fragment>
      {searchTerm && (
        <Fragment>
          <ul className='image-list'>
            {galleryResult &&
              galleryResult.map((galleries) => {
                return galleries.map((gallery) => (
                  <ImageItem key={gallery.id} gallery={gallery} />
                ));
              })}
          </ul>
          {isValidating && <Loader />}
          <button
            className='load-more'
            disabled={isValidating}
            onClick={onClick}
          >
            Load More
          </button>
        </Fragment>
      )}
    </Fragment>
  );
}

export default ImageList;
