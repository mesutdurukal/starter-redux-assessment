import { createSlice } from '@reduxjs/toolkit';
import { selectSearchTerm } from '../search/search.slice';
import photos from './photos.data.js';

const initialState = {
  photos,
};

const options = {
  name: 'photos',
  initialState,
  reducers: {
    // Task 1: Create an `addPhoto()` case reducer that adds a photo to state.photos.
    // Task 1 Hint: You can use state.photos.unshift()
    // `unshift()` documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    addPhoto: (state, action)=>{state.photos.unshift(action.payload)},

    // Task 6: Create an `removePhoto()` case reducer that removes a photo from state.photos
    // Task 6 Hint: You can use state.photos.splice()
    // `splice()` documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    removePhoto: (state, action)=>{state.photos.splice(state.photos.findIndex((photo) => photo.id === action.payload), 1)},
  },
};

const photosSlice = createSlice(options);

export const { addPhoto, removePhoto } = photosSlice.actions;

export default photosSlice.reducer;

export const selectAllPhotos = (state) => state.photos.photos;
export const selectFilteredPhotos = (state) => {
  // Task 12: Complete `selectFilteredPhotos()` selector to return a filtered list of photos whose captions match the user's search term
    const photos = selectAllPhotos(state);
    const searchTerm = selectSearchTerm(state);
    return photos.filter((photo) =>
        photo.caption.toLowerCase().includes(searchTerm.toLowerCase())
    );
};
