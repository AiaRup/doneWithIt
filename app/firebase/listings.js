const endpoint = 'listings';

const getListings = (db) => {
  return db.collection(endpoint).get();
};

const addListing = (db, listing) => {
  let data = { ...listing, categoryId: listing.category.value };
  delete data.category;

  const proccesedImages = listing.images.map((image, index) => ({
    name: 'image' + index,
    type: 'image/jpeg',
    uri: image,
  }));

  data = { ...data, images: proccesedImages };

  if (listing.location) {
    data['location'] = listing.location;
  }

  return db.collection(endpoint).add(data);
};

export default {
  addListing,
  getListings,
};
