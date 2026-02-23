import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Button, InputForm } from "../../../components/ui";
import { toast } from "sonner";

const schema = z.object({
  email: z
    .email("Ingresa un correo válido")
    .min(1, "Ingresa tu correo electrónico"),
  password: z
    .string()
    .min(6, "Ingresa una contraseña de al menos 6 caracteres"),
});

type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    console.log("Datos del formulario:", data);

    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      navigate("/dashboard");
    } else {
      const error = await response.json();
      toast.error(error.message || "Error al iniciar sesión");
    }
  };

  return (
    <form
      className="flex flex-col gap-2 w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputForm
        name="email"
        label="Correo Electrónico"
        control={control}
        error={errors.email}
        type="email"
        placeholder="Ejem: juan@ejemplo.com"
      />
      <InputForm
        name="password"
        label="Contraseña"
        control={control}
        error={errors.password}
        type="password"
        placeholder="Mínimo 6 caracteres"
      />

      <Button className="mt-4" variant="primario" type="submit">
        Iniciar Sesión
      </Button>
      <div className="flex gap-2 mt-2">
        <p className="text-text">¿Aún no estás registrado? </p>
        <Link className="font-bold text-blue-700" to="/register">
          Crea una cuenta.
        </Link>
      </div>
    </form>
  );
};
export default LoginForm;
