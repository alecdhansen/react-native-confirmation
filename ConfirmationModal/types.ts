export type ConfirmationModalProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onConfirm: any;
  message: string;
  confirmText?: string;
  cancelText?: string;
};
