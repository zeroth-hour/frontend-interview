import { clsx } from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'green' | 'red' | 'gray';

interface TripBirdyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-proBlue text-white hover:bg-maxBlue',
  secondary: 'bg-white text-proBlue hover:text-maxBlue border border-proBlue',
  outline: 'bg-white text-proBlue hover:text-maxBlue border-2 border-proBlue',
  green: 'bg-tripBirdyGreen text-white hover:bg-tripBirdyGreenHover',
  red: 'bg-tripBirdyRed text-white hover:bg-tripBirdyRedHover',
  gray: 'bg-tripBirdyGray text-white hover:bg-tripBirdyGrayHover',
};

/**
 * Shared action button. Use this for any button so styling, hover, and focus
 * treatment stay consistent across the app. (The production version also takes
 * an optional Font Awesome `icon`; omitted here to keep the starter lean.)
 */
export function TripBirdyButton({
  children,
  variant = 'outline',
  fullWidth = false,
  className,
  type = 'button',
  ...rest
}: TripBirdyButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        'font-bold rounded-lg py-2 px-4 text-sm transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-proBlue',
        VARIANT_CLASSES[variant],
        fullWidth && 'w-full',
        rest.disabled && 'opacity-60 cursor-not-allowed',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default TripBirdyButton;
