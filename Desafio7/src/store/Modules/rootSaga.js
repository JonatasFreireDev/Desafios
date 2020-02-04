import { all } from 'redux-saga/effects';

import cart from './Cart/saga';

export default function* rootSaga() {
   return yield all([cart]);
}
