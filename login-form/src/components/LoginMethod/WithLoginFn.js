import React from "react";
import { useDispatch } from "react-redux";
import api from "../../api/axiosCline";
import { login } from "../../store/Slice/useSlice";

const initialValues = {
  prop1: "",
  prop2: "",
};
const LOGIN_URL = "/auth/login";

const WithLoginFn =
  (WrappedComponent, entity) =>
  ({ ...props }) => {
    const WRAPPED = WrappedComponent;
    const dispatch = useDispatch();
    let ErrMsg = "";
    function setErrMsg(err) {
      ErrMsg = err;
      console.log(ErrMsg);
    }
    function onSubmit(values) {
      console.log(values);
      const { prop1, prop2 } = values;
      Login(prop1, prop2);
    }
    function handleSuccess(response) {
      dispatch(login(response));
    }

    async function Login(prop1, prop2) {
      try {
        console.log("Login");
        const response = await api.post(
          LOGIN_URL,
          JSON.stringify({ [entity.toString()]: prop1, password: prop2 }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        handleSuccess(response.data);
      } catch (error) {
        if (!error?.response) {
          setErrMsg("No sever response");
        } else if (error.response?.status === 400) {
          console.log("err 400");
          setErrMsg("Wrong Email or Password");
        } else if (error.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else {
          setErrMsg("Login Failed");
        }
      }
    }
    console.log(ErrMsg);

    return (
      <div>
        <h1>{ErrMsg ? ErrMsg : null}</h1>
        <WRAPPED
          Login={Login}
          {...props}
          initialValues={initialValues}
          onSubmit={onSubmit}
        />
      </div>
    );
  };

export default WithLoginFn;
