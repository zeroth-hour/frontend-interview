import { clsx } from 'clsx';
import type { ReactNode } from 'react';

interface TripBirdyCardProps {
  /** Render as a static container (`div`) or an interactive, keyboard-focusable card (`button`). */
  as?: 'div' | 'button';
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
  className?: string;
  bodyClassName?: string;
  'aria-label'?: string;
}

/**
 * Card shell with optional header/body/footer. Pass `as="button"` for a clickable
 * card; it renders a real button so keyboard and focus handling come for free.
 */
export function TripBirdyCard({
  as = 'div',
  header,
  children,
  footer,
  onClick,
  className,
  bodyClassName,
  ...rest
}: TripBirdyCardProps) {
  const isButton = as === 'button';
  const commonClassName = clsx(
    'rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm text-left w-full',
    isButton && 'hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-proBlue',
    className,
  );
  const body = (
    <>
      {header}
      <div className={clsx('p-4', bodyClassName)}>{children}</div>
      {footer}
    </>
  );

  if (isButton) {
    return (
      <button type="button" onClick={onClick} className={commonClassName} {...rest}>
        {body}
      </button>
    );
  }

  return (
    <div onClick={onClick} className={commonClassName} {...rest}>
      {body}
    </div>
  );
}

export default TripBirdyCard;
