import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();
startServer(store);

console.log("set entries with json");
store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});

console.log("dispatch next");
store.dispatch({type: 'NEXT'});
