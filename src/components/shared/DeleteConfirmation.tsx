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

}

const DeleteConfirmation = ({handleDelete, title, description} : DeleteConfirmationProps) => {
  return (
     <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete {title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleDelete} variant="destructive">Delete</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
  )
}

export default DeleteConfirmation