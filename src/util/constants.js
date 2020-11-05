export const buildRequestURL = (searchTerm, index) =>
  `https://api.imgur.com/3/gallery/search/top/${index}?q=${searchTerm}`;

export const getKey = (searchTerm) => (pageIndex, previousPageData) => {
  if (!searchTerm || (previousPageData && !previousPageData.length))
    return null;
  return buildRequestURL(searchTerm, pageIndex);
};
export const requestOptions = {
  headers: {
    Authorization: 'Client-ID ba4d3fc04f7afba',
  },
};
