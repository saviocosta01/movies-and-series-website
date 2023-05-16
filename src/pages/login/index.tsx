import { MainContainer, LoginContainer, LoginContent } from "./style";
import { LogoSvg } from "../../assets/img-svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TLoginUser } from "../../providers/interfaces/users.interface";
import { Input } from "../../components/input";


export const LoginPage = () => {
  const { loginUser } = useContext(UserContext);

  const formSchemaLogin = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("email invalido"),
    password: yup.string().required("Senha Obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TLoginUser>({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <MainContainer>
      <LogoSvg />
      <LoginContainer>
        <h2>Login</h2>
        <LoginContent onSubmit={handleSubmit(loginUser)}>
          <Input
            label={!errors.email?.message ? "Email" : errors.email?.message}
            control={control}
            {...register("email")}
          />

          <Input
            label={
              !errors.password?.message ? "Password" : errors.password?.message
            }
            control={control}
            {...register("password")}
          />
          <button type="submit">Login to your account</button>
        </LoginContent>
        <div>
          <p>
            Don’t have an account?{" "}
            <Link to={"/register"} className="page-register">
              Sign Up
            </Link>
          </p>
        </div>
      </LoginContainer>
    </MainContainer>
  );
};
