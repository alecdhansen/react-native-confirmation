export type ConfirmationModalProps = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onConfirm: any;
  message: string;
  confirmText?: string;
  confirmTextColor?: string;
  cancelText?: string;
  cancelTextColor?: string;
  confirmButtonActiveOpacity?: number;
  cancelButtonActiveOpacity?: number;
};
