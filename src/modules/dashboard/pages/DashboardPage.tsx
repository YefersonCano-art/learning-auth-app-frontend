import { Button } from "../../../components/ui";
import { useLogout } from "../../auth/hooks/useLogout";
import { useStoredUser } from "../../auth/hooks/useStoredUser";

export const DashboardPage = () => {
  const { logout } = useLogout();
  const { user } = useStoredUser();

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="flex flex-col gap-2">
        <p className="text-center text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Bienvenido al dashboard {user?.name}
        </p>
        <Button variant="primario" onClick={logout}>
          Cerrar sesión
        </Button>
      </div>
    </main>
  );
};
