export interface ConfirmationModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onConfirm: any;
  secondaryOnConfirm?: any;
  secondaryOnConfirmText?: string;
  message?: string;
  onConfirmText?: string;
  onConfirmTextColor?: string;
  cancelText?: string;
  cancelTextColor?: string;
  colorScheme?: "system" | "light" | "dark";
};
