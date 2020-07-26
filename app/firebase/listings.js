const endpoint = 'listings';

const getListings = (firebase) => {
  return firebase.firestore().collection(endpoint).get();
};

const addListing = (firebase, listing) => {
  console.log('listing', listing);

  let data = {
    ...listing,
    categoryId: listing.category.value,
    price: +listing.price,
  };
  delete data.category;

  const proccesedImages = listing.images.map((image) => {
    return { url: image };
  });

  data = { ...data, images: proccesedImages };

  if (listing.location) {
    data['location'] = listing.location;
  }

  return firebase.firestore().collection(endpoint).add(data);
};

export default {
  addListing,
  getListings,
};
