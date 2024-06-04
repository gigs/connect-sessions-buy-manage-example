import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Check } from 'lucide-react'

export const SuccessAlert = ({ message }: { message: string }) => {
  return (
    <Alert className="fixed bottom-6 left-6 max-w-96" variant="success">
      <Check className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
