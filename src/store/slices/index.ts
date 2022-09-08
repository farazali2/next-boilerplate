//Importing slices
import AppReducer, { AppSlice } from '@app/store/slices/app.slice';
import UniversitiesReducer, { UniversitiesSlice } from '@app/store/slices/universities.slice';

export default {
  [AppSlice.name]: AppReducer,
  [UniversitiesSlice.name]: UniversitiesReducer
}