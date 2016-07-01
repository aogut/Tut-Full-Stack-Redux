import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ENTRIES':
    console.log('Reducer: setting entries');
    return setEntries(state, action.entries);
  case 'NEXT':
    console.log('Reducer: next');
    return next(state);
  case 'VOTE':
    console.log('Reducer: vote');
    // return vote(state, action.entry);
    return state.update('vote',
                        voteState => vote(voteState, action.entry));
  }
  return state;
}
