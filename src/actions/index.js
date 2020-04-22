import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  // dispatch an action to the reducer
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
