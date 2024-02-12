import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export const ErrorAlert = ({ message }: { message: string }) => {
  return (
    <Alert
      className="fixed bg-white max-w-96 bottom-6 left-6"
      variant="destructive"
    >
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
