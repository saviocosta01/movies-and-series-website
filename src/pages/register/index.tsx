import { useForm } from "react-hook-form";
import { MainContainer, RegisterContainer, FormContent } from "./style";
import { Link } from "react-router-dom";
import { LogoSvg } from "../../assets/img-svg";
import { UserContext } from "../../providers/userContext";
import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { formData } from "../../providers/interfaces/users.interface";
import { Input } from "../../components/input";

export const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("Email Obrigatório").email("email invalido"),
    password: yup.string().required("Senha Obrigatoria"),
    passwordReapeat: yup.string().required("Senha Obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<formData>({
    resolver: yupResolver(formSchema),
  });

  return (
    <MainContainer>
      <LogoSvg />
      <RegisterContainer>
        <h2>Sign Up</h2>
        <FormContent onSubmit={handleSubmit(registerUser)}>
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

          <Input
            label={
              !errors.passwordReapeat?.message ? "Repeat password" : errors.passwordReapeat?.message
            }
            control={control}
            {...register("passwordReapeat")}
          />
          <button type="submit">Create an account</button>
        </FormContent>
        <div>
          <p>
            Already have an account?{" "}
            <Link to={"/"} className="page-login">
              Login
            </Link>
          </p>
        </div>
      </RegisterContainer>
    </MainContainer>
  );
};
