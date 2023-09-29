export interface ConfirmationModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onConfirm: () => void | Promise<void>;
  secondaryOnConfirm?: () => void | Promise<void>;
  secondaryOnConfirmText?: string;
  message?: string;
  onConfirmText?: string;
  onConfirmTextColor?: string;
  cancelText?: string;
  cancelTextColor?: string;
  colorScheme?: "system" | "light" | "dark";
};
