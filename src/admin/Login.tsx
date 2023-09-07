import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { collection, getDocs, query, where } from "firebase/firestore";

import { getRegistrationSchema } from "../schemas/registration";
import { Input } from "../components/Input";
import { Button } from "../components/Buttons/Button";
import { auth, db } from "../base";
import useStore from "../hooks/useStore";
import { Roles } from "../types/Roles";
import { getErrorMessage } from "../utils/getErrorMessage";

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { profile, add } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver<FieldValues>(getRegistrationSchema()),
  });

  const onSubmit = async ({ email, password }: FieldValues) => {
    setIsLoading(!isLoading);

    await signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("role", "==", Roles.ADMIN));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const role = doc.data().role;
          const email = doc.data().email;
          if (email === user.email && role === Roles.ADMIN) {
            add({
              name: Roles.ADMIN,
              email,
              role,
            });
            return navigate("/admin-dashboard");
          }

          setIsLoading(false);
          return toast.error("User is not admin");
        });
      })
      .catch((error) => {
        setIsLoading(false);
        if (getErrorMessage[error.code]) {
          toast.error(getErrorMessage[error.code]);
        } else {
          toast.error("Something went wrong. Please try again later");
        }
      });
  };

  useEffect(() => {
    if (profile?.role === Roles.ADMIN) return navigate("/admin-dashboard");
    if (profile?.role === Roles.USER) return navigate("/home");
    if (profile?.role === Roles.HR) return navigate("/dashboard");
  }, [profile, navigate]);

  return (
    <main className="min-h-screen max-w-[117rem] justify-center mx-auto p-6 sm:p-10 md:p-28 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center space-y-4 sm:space-x-4">
      <div className="w-[50rem] border border-gray-200 shadow-sm rounded-md py-3 sm:py-6 px-2 sm:px-6 lg:px-12">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-base sm:text-lg text-gray-700 leading-7 mb-6 text-center">
            Welcome back to Admin panel
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mx-4">
          <Input
            id="email"
            label="Email"
            register={register}
            errors={errors}
            placeholder="Enter email address"
            required
          />
          <Input
            id="password"
            label="Password"
            register={register}
            type="password"
            errors={errors}
            placeholder="Enter password"
            required
          />
          <div className="py-4">
            <Button
              fullWidth
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
