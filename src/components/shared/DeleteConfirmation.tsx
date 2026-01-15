import {
//   AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

interface DeleteConfirmationProps {
    handleDelete: () => void;
    title: string;
    description: string;
    buttonText: string;
}

const DeleteConfirmation = ({handleDelete, title, description, buttonText} : DeleteConfirmationProps) => {
  return (
     <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle> {title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleDelete} variant="destructive">{buttonText}</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
  )
}

export default DeleteConfirmation