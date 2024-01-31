// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { backendUrl } from '../../constants';

// export const titlesSlice = createSlice({
//   name: 'titles',
//   initialState: {
//     titlesLoading: false,
//     titles: [],
//   },
//   reducers: {
//     setTitles: async (state, { payload }) => {
//         state.titlesLoading = true;
//         await axios.get(backendUrl).then((response) => {
//             state.titles = response;
//         });
//         state.titlesLoading = false;
//     },
//   },
// })

// export const { setSingleTitle } = singleTitleSlice.actions;
// export const { singleTitleReducer } = singleTitleSlice.reducer;
