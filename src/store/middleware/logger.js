export function logger(store /*{ getState, dispatch }*/) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      console.log("dispatching: next ", next);
      console.log("dispatching: action ", action);

      // if (action.type === "task/update") {
      //   return dispatch({
      //     type: "task/remove",
      //     payload: { ...action.payload },
      //   });
      // }

      let result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
}
