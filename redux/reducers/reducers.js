import {combineReducers} from 'redux';

import {fetchUserPostsReducer} from './fetchUserPostsReducer';
import {notificationsReducer} from './notificationsReducer';
import {helperReducer} from './helperReducer'


const reducer = combineReducers({

     fetchUserPostsReducer,
     notificationsReducer,
     helperReducer,
     
})

export default reducer;