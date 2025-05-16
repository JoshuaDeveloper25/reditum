import CorreoEnviadoExitosamente from "./pages/CorreoEnviadoExitosamente/CorreoEnviadoExitosamente";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";
import { Suspense, lazy } from "react";

const LayoutEmpresasLazy = lazy(() => import("./pages/LayoutEmpresas"));

const ReditumInicioLazy = lazy(() =>
  import("./pages/LayoutEmpresas/Reditum/pages/ReditumInicio/ReditumInicio")
);

const ReditumContactoLazy = lazy(() =>
  import("./pages/LayoutEmpresas/Reditum/pages/ReditumContacto/ReditumContacto")
);

const router = createBrowserRouter([
  {
    element: <LayoutEmpresasLazy />,
    children: [
      {
        path: "/",
        element: <ReditumInicioLazy />,
        index: true,
      },

      {
        path: "/reditum-contacto",
        element: <ReditumContactoLazy />,
      },

      {
        element: <CorreoEnviadoExitosamente />,
        path: `/correo-enviado-exitosamente`,
      },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ToastContainer
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        position="bottom-center"
        autoClose={1500}
        theme="colored"
        draggable
        stacked
      />
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
