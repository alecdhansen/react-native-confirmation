export interface ConfirmationModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onConfirm: any;
  message: string;
  confirmText?: string;
  confirmTextColor?: string;
  cancelText?: string;
  cancelTextColor?: string;
};
