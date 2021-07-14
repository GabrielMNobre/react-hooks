export default function numberAdd(dispatch, number) {
  dispatch({
    type: 'number_add',
    payload: { number },
  });
}
