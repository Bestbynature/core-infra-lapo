import AppRoutes from "./routes/app-routes";
import { FormProvider } from "./utils/context/form-provider";
import { ModalProvider } from "./utils/context/modal-provider";

function App() {
  return (
    <>
      <ModalProvider>
        <FormProvider>
          <AppRoutes />
        </FormProvider>
      </ModalProvider>
    </>
  );
}

export default App;
