import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Button, InputForm } from "../../../components/ui";
import { toast } from "sonner";

const schema = z
  .object({
    nameUser: z.string().min(2, "Ingresa tu nombre de usuario."),
    name: z.string().min(2, "Ingresa tus nombres."),
    lastName: z.string().min(2, "Ingresa tus apellidos."),
    email: z
      .email("Ingresa un correo válido")
      .min(1, "Ingresa tu correo electrónico"),
    password: z
      .string()
      .min(6, "Ingresa una contraseña de al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "Confirma tu contraseña de al menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nameUser: "",
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });

  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    console.log("Datos del formulario:", data);
    const response = await fetch(`${API_BASE_URL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Usuario registrado:", result);
      toast.success("Usuario registrado exitosamente");
      navigate("/login");
    } else {
      const error = await response.json();
      const errorMessages = error.errors
        ?.map((e: any) => `${e.field}: ${e.message}`)
        .join(", ");
      console.error("Error al registrar usuario:", errorMessages || error);
      toast.error(
        `Error al registrar usuario: ${errorMessages || error.message || "Error desconocido"}`,
      );
    }
  };

  return (
    <form
      className="flex flex-col w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputForm
        name="nameUser"
        label="Nombre de Usuario"
        control={control}
        error={errors.nameUser}
        type="text"
        placeholder="Ejem: Juan123"
      />
      <div className="flex justify-between">
        <InputForm
          name="name"
          label="Nombre"
          control={control}
          error={errors.name}
          type="text"
          placeholder="Ejem: Juan"
        />
        <InputForm
          name="lastName"
          label="Apellido"
          control={control}
          error={errors.lastName}
          type="text"
          placeholder="Ejem: Pérez"
        />
      </div>
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
      <InputForm
        name="confirmPassword"
        label="Confirmar Contraseña"
        control={control}
        error={errors.confirmPassword}
        type="password"
        placeholder="Confirma tu contraseña"
      />

      <Button className="mt-4" variant="primario" type="submit">
        Registrar
      </Button>
      <div className="flex gap-2 my-8">
        <p className="text-text">¿Ya tienes una cuenta?</p>
        <Link className="font-bold text-blue-700" to="/login">
          Inicia sesión aquí.
        </Link>
      </div>
    </form>
  );
};
export default RegisterForm;
