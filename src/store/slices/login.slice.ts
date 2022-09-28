import { createSlice } from '@reduxjs/toolkit';
import { ILoginDTO } from '@app/types/dto/authentication/login.dto';
import { LoginAction } from '@app/store/actions/auth.actions';

interface LoginState {
  dto: ILoginDTO;
  loading: boolean;
  errors: Array<string>;
}

const initialState: LoginState = {
  dto: {
    email: '',
    password: '',
  },
  loading: false,
  errors: [],
};

export const LoginSlice = createSlice({
  //Slice Name
  name: 'login',

  //Slice Initial State
  initialState,

  /**
   * Standard reducer logic with auto generated
   * action types per reducer
   */
  reducers: {
    /**
     * Reducer action to set login dto
     * @param state
     * @param action
     */
    setDto: (state, action) => {
      state.dto = action.payload;
    },

    /**
     * Reducer action to set universities
     * loading state
     * @param state
     * @param action
     */
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
     * Adding reducer to action builder
     * for login action pending
     */
    builder.addCase(LoginAction.pending, (state) => {
      //Setting loading state to true
      state.loading = true;
      //Setting errors to empty
      state.errors = [];
    });

    /**
     * Adding reducer to action builder
     * for login action fulfilled
     */
    builder.addCase(LoginAction.fulfilled, (state) => {
      //Setting loading state to false
      state.loading = false;
      //Clearing dto
      state.dto = {
        email: '',
        password: '',
      };
    });

    /**
     * Adding reducer to action builder
     * for login action rejected
     */
    builder.addCase(LoginAction.rejected, (state, action) => {
      state.loading = false;
      state.errors.push(
        action.payload
          ? action.payload.message
          : (action.error.message as string)
      );
    });
  },
});

//Exporting slice actions
export const { setDto, setLoading } = LoginSlice.actions;

//Exporting reducer
export default LoginSlice.reducer;
