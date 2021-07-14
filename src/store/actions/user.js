export default function setUser(dispatch, name) {
  dispatch({
    type: 'login',
    payload: {
      user: name,
    },
  });
}
