import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ConfirmActionProps {
    handleConfirm: () => void;
    title: string;
    description: string;

}
const ConfirmAction = ({title, description, handleConfirm}: ConfirmActionProps) => {
  return (

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm {title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    
  );
};

export default ConfirmAction;
