export function logger(store) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // console.log("dispatching: action ", action);
      let result = next(action);
      // console.log("next state", store.getState());
      return result;
    };
  };
}
