"use client";

import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@heroui/react";
import { Eye, EyeClosed } from "lucide-react";
import Cookies from "cookies-js";
import { useRouter } from "next/navigation";

const FormData = () => {
  const { login, isPending, error } = useLogin();
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const dataToSend = {
        email: email,
        password: password,
      };
      const user = await login(dataToSend);

      if (user.token) {
        Cookies.set("token", user.token);
        Cookies.set("userId", user.user.id);
      }
      window.location.href = "/";
    } catch (err) {
      console.error("Error al iniciar sesión", err);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="h-auto flex items-center justify-center gap-4 w-[90%] md:w-[600px]">
        <CardHeader className="flex justify-center">
          <h1 className="text-[24px]">Iniciar sesión</h1>
        </CardHeader>

        <CardBody className="gap-2">
          <Input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Ingresa tu email"
            className="max-w-full"
          />
          <Input
            name="password"
            className="max-w-full "
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={() => toggleVisibility()}
              >
                {isVisible ? (
                  <Eye className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeClosed className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error.message}</p>}
        </CardBody>

        <CardFooter className="flex justify-center">
          <Button
            color="warning"
            fullWidth
            onPress={handleSubmit}
            disabled={isPending}
            isLoading={isPending}
          >
            Iniciar sesión
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FormData;
