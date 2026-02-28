export const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <p className="text-xs font-medium tracking-[0.2em] text-zinc-400">
          404
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-zinc-900 sm:text-3xl">
          Página no encontrada
        </h1>
        <p className="mt-2 text-sm text-zinc-500">Esta ruta no existe.</p>
      </div>
    </main>
  );
};
