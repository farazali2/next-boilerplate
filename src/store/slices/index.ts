//Importing slices
import AppReducer, { AppSlice } from '@app/store/slices/app.slice';
import LoginReducer, { LoginSlice } from '@app/store/slices/login.slice';
import UniversitiesReducer, {
  UniversitiesSlice,
} from '@app/store/slices/universities.slice';

const reducers = {
  [AppSlice.name]: AppReducer,
  [UniversitiesSlice.name]: UniversitiesReducer,
  [LoginSlice.name]: LoginReducer,
};

export default reducers;
