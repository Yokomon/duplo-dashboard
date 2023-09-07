import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import {
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { Variant } from "./components/types";
import { Button } from "./components/Buttons/Button";
import { auth, db } from "./base";
import { getAuthFormText } from "./utils/getAuthFormText";
import useStore from "./hooks/useStore";
import { getRegistrationSchema } from "./schemas/registration";
import { Input } from "./components/Input";
import { getErrorMessage } from "./utils/getErrorMessage";
import { Roles } from "./types/Roles";

function App() {
  const { add, profile } = useStore();
  const navigate = useNavigate();
  const [variant, setVariant] = useState<Variant>("REGISTER");
  const [isLoading, setIsLoading] = useState(false);

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
    resolver: yupResolver<FieldValues>(getRegistrationSchema(variant)),
  });

  const onSubmit = async ({ email, password, name }: FieldValues) => {
    setIsLoading(!isLoading);
    if (variant === "REGISTER") {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          addDoc(collection(db, "users"), {
            name,
            email,
            password,
            role: Roles.USER,
          });
          add({
            name,
            email,
            role: Roles.USER,
          });

          navigate("/home");
        })
        .catch((error: AuthError) => {
          setIsLoading(false);
          if (getErrorMessage[error.code]) {
            return toast.error(getErrorMessage[error.code]);
          } else {
            toast.error("Something went wrong. Please try again later");
          }
        });
    } else {
      await signInWithEmailAndPassword(auth, email, password)
        .then(async ({ user }) => {
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("email", "==", user?.email));
          const querySnapshot = await getDocs(q);

          querySnapshot.forEach((doc) => {
            const role = doc.data().role;
            const email = doc.data().email;
            const name = doc.data().name;
            if (email === user.email && role === Roles.USER) {
              add({
                name,
                email,
                role,
              });
              return navigate("/home");
            } else if (role === Roles.HR && email === user.email) {
              add({
                name,
                email,
                role,
              });
              return navigate("/dashboard");
            }
            setIsLoading(false);
            return toast.error("Admin cannot login here");
          });
        })
        .catch((error: AuthError) => {
          if (getErrorMessage[error.code]) {
            setIsLoading(false);
            return toast.error(getErrorMessage[error.code]);
          }
        });
    }
  };

  const handleVariant = useCallback(() => {
    if (variant === "REGISTER") {
      setVariant("LOGIN");
    } else {
      setVariant("REGISTER");
    }
  }, [variant]);

  useEffect(() => {
    if (profile?.role === Roles.ADMIN) return navigate("/admin-dashboard");
    if (profile?.role === Roles.USER) return navigate("/home");
    if (profile?.role === Roles.HR) return navigate("/dashboard");
  }, [profile, navigate]);

  return (
    <main className="min-h-screen max-w-[117rem] mx-auto p-6 sm:p-10 md:p-28 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center space-y-4 sm:space-x-4 lg:justify-between">
      <div className="sm:mx-4 lg:mx-0 w-full lg:w-1/2">
        <div className="flex items-center space-x-4">
          <h1 className="bg-clip-text text-transparent h-14 sm:h-20 bg-gradient-to-r from-sky-400 to-sky-600 text-5xl sm:text-7xl">
            Duplo test
          </h1>
        </div>
        <p className="text-lg sm:text-xl py-2 sm:py-4">
          Manage, Interact, Explore: Your Admin Hub for Connections!
        </p>
        <p className="py-5 sm:py-2 text-base text-gray-600">
          Our advanced admin user system is your key to effortless control and
          optimization. With robust tools at your fingertips, you can
          efficiently manage resources, track performance metrics, and ensure
          smooth operations. Elevate your administrative capabilities with our
          intuitive platform, designed to empower you.
        </p>
      </div>
      <div className="w-full lg:w-1/2 border border-gray-200 shadow-sm rounded-md py-3 sm:py-6 px-2 sm:px-6 lg:px-12">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-base sm:text-lg text-gray-700 leading-7 mb-6 text-center">
            {variant === "REGISTER"
              ? getAuthFormText["defaultHeading"]
              : getAuthFormText["userAccountHeading"]}
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mx-4">
          {variant === "REGISTER" ? (
            <Input
              id="name"
              label="Name"
              register={register}
              type="text"
              errors={errors}
              placeholder="Enter full name"
              required
            />
          ) : null}
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
              {variant === "REGISTER"
                ? getAuthFormText["signUp"]
                : getAuthFormText["signIn"]}
            </Button>
          </div>
        </form>
        <div className="mt-5 text-gray-600 text-sm text-center">
          <p>
            {variant === "REGISTER"
              ? getAuthFormText["isAccount"]
              : getAuthFormText["noAccount"]}
            <span
              onClick={handleVariant}
              className="underline underline-offset-1 cursor-pointer mx-2"
            >
              {variant === "REGISTER"
                ? getAuthFormText["login"]
                : getAuthFormText["register"]}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
