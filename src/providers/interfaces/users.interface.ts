export type TChildren = {
  children: React.ReactNode;
};

export type TUsers = {
  id: number;
  email: string;
  password: string;
};

export type formData = {
  id: number;
  email: string;
  password: string;
  passwordReapeat: string;
};
export type formDataRequest = Omit<formData, "id">;

export type TLoginUser = {
  email: string;
  password: string;
};

export type TContext = {
  users: TUsers[];
  registerUser: (data: formDataRequest) => void;
  loginUser: (dataLogin: TLoginUser) => void;
};
