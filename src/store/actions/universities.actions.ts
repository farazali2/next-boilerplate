import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUniversities } from '@app/services/universities';

export const getUniversities = createAsyncThunk(
  //Action type
  'universities/fetchAll', 
  //Callback function
  async () => {
    //Making an api call
    const response = await fetchUniversities();
    //Return response json
    return response.data.json();
  }
);