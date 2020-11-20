import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorToast: React.FC<{ error?: Error }> = ({ children, error }) => {
  const notify = (message: string) => toast.error(message);

  useEffect(() => {
    if (error) {
      notify(error.message);
    }
  }, [error]);

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default ErrorToast;
