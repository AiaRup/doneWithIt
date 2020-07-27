import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = (
  { title, price, category, description, images, location },
  onUploadProgress
) => {
  const data = new FormData();
  data.append('title', title);
  data.append('price', price);
  data.append('categoryId', category.value);
  data.append('description', description);

  images.forEach((image, index) =>
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    })
  );

  location && data.append('location', JSON.stringify(location));
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
