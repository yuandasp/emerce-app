import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  form: {
    username: "",
    fullName: "",
    email: "",
    role: "",
    id: 0,
    errMsg: "",
  },
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setForm: (state, action) => {
      state.form = action.payload;
    },
  },
});

export const { setForm } = usersSlice.actions;

export default usersSlice.reducer;

export const registerHandler = (form, resetForm) => {
  return async (dispatch) => {
    try {
      let response = await Axios.post("http://localhost:2000/users", {
        ...form,
        role: "user",
      });
      //   console.log(response.data);
      //   const { fullName, username, email, role, id } = response.data;

      //   delete response.data.password;
      dispatch(
        // setForm(response.data)
        setForm({
          fullName: response.data.fullName,
          username: response.data.username,
          email: response.data.email,
          role: response.data.role,
          id: response.data.id,
        })
      );
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginHandler = ({ username, password }) => {
  return async (dispatch) => {
    try {
      let response = await Axios.get("http://localhost:2000/users", {
        params: {
          username,
        },
      });
      //   console.log(response.data);
      if (response.data.length) {
        if (password === response.data[0].password) {
          delete response.data[0].password;
          dispatch(setForm(response.data[0]));
        } else {
          //Handle error wrong password
          dispatch(setForm({ errMsg: "Wrong password!" }));
        }
      } else {
        //Handle error username not found
        dispatch(setForm({ errMsg: "User not found!" }));
      }
    } catch (error) {
      console.log(error); //di sini masih nampilin error
    }
  };
};

export const logoutHandler = (dispatch) => {
  dispatch(setForm(initialState));
};
