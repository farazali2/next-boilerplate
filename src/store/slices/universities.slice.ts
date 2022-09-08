import { createSlice } from '@reduxjs/toolkit';
import { UniversityEntity } from '@app/types/entities/university.entity';
import { getUniversities } from '@app/store/actions/universities.actions';

interface UniversitiesState {
  list: Array<UniversityEntity>;
  loading: boolean;
  error: string | null;
}

const initialState: UniversitiesState = {
  list: [],
  loading: false,
  error: null,
};

export const UniversitiesSlice = createSlice({
  
  //Slice Name
  name: 'universities',
  
  //Slice Initial State
  initialState,
  
  /**
   * Standard reducer logic with auto generated 
   * action types per reducer
   */
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },

  /**
   * Reducers with additional action types
   * @param builder 
   */
  extraReducers: (builder) => {

    /**
     * Adding reducer to reducer builder 
     * for get universites
     */
     builder.addCase(getUniversities.pending, (state, action) => {
      //Setting loading state to true
      state.loading = true;
      //Clearing list
      state.list = [];
     });

    /**
     * Adding reducer to reducer builder 
     * for get universites
     */
    builder.addCase(getUniversities.fulfilled, (state, action) => {
      //Setting loading state to false
      state.loading = false;
      //Adding universities to the list
      state.list = action.payload;
    });

  }

});

/**
 * Exporting actions
 */
export const { setList, setLoading } = UniversitiesSlice.actions;

export default UniversitiesSlice.reducer;
