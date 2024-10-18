
import api from '../../modules/data'
import { Dispatch } from 'redux';


import { fetchDataStart, fetchDataSuccess, createItem, updateItem } from '../slices/dataSlice'

// export const fetchAllUsersData = () => {
//   return async (dispatch: Dispatch) => {
//     dispatch(fetchDataStart());
//     try {
//       const response = await api.get('/users');
//       dispatch(fetchDataSuccess(response.data));
//     } catch (error) {
//       // dispatch(fetchDataFailure(error.message.toString()));
//       console.error(error)
//     }
//   };
// };


export const fetchData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataStart());
    try {
      const response = await api.get('/posts');
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      // dispatch(fetchDataFailure(error.message.toString()));
      console.error(error)
    }
  };
};

export const createPost = (postData: { title: string, userId: number, body: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.post('/posts', postData);
      dispatch(createItem(response.data));
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
};

export const editPost = (id: number, postData: { title: string, userId: number, body: string }) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await api.put(`/posts/${id}`, postData);
      dispatch(updateItem(response.data));
    } catch (error) {
      console.error('Error editing post:', error);
    }
  }
}