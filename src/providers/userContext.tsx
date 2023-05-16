import { createContext, useState } from "react";
import {
  TChildren,
  TContext,
  TLoginUser,
  TUsers,
  formDataRequest,
} from "./interfaces/users.interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext<TContext>({} as TContext);

export const UserProvider = ({ children }: TChildren) => {
  const [users, setUsers] = useState<TUsers[]>([] as TUsers[]);

  const navigate = useNavigate();

  const registerUser = (data: formDataRequest) => {
    const id = users.length + 1;
    const newUser = {
      id: id,
      ...data,
    };
    const findUser = users.find((user) => {
      return user.email == data.email;
    });
    if (findUser) {
      toast.error("this user already exists");
    } else if (data.passwordReapeat !== data.password) {
      toast.error("mismatched password");
    } else {
      toast.success("account created successfully");
      setUsers([...users, newUser]);
    }
  };

  const loginUser = (dataLogin: TLoginUser) => {
    const findUser = users.find((user) => {
      return (
        user.email == dataLogin.email && user.password == dataLogin.password
      );
    });
    if (!findUser) {
      toast.error("Incorrect Email or Password");
    } else {
      toast.success("successful login");
      navigate("/dashboard");
    }
  };

  return (
    <UserContext.Provider value={{ registerUser, loginUser, users }}>
      {children}
    </UserContext.Provider>
  );
};
