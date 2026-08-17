import { clsx } from 'clsx';
import { Search, X } from 'lucide-react';
import type { ReactNode } from 'react';

interface TripBirdyToolbarSearchProps {
  /** Visible field label. Also used as the accessible name. */
  label: string;
  /** Required id so the label is programmatically associated with the input. */
  inputId: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  onClear?: () => void;
  showClearButton?: boolean;
  containerClassName?: string;
  inputClassName?: string;
  children?: ReactNode;
}

/**
 * Labeled search field used by our Manage screens (see reference/ManageTripsPage).
 * Always pass `label` and `inputId` — the label is what makes the field accessible.
 */
export function TripBirdyToolbarSearch({
  label,
  inputId,
  value,
  onChange,
  placeholder,
  ariaLabel,
  onClear,
  showClearButton = true,
  containerClassName,
  inputClassName,
  children,
}: TripBirdyToolbarSearchProps) {
  return (
    <div className={clsx('w-full', containerClassName)}>
      <label htmlFor={inputId} className="block text-sm font-medium text-tripBirdyBlack mb-2">
        {label}
      </label>
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tripBirdyGray"
          aria-hidden="true"
        />
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-label={ariaLabel ?? label}
          className={clsx(
            'w-full pl-9 pr-9 py-2 text-sm bg-white border border-gray-300 rounded-lg',
            'focus:ring-2 focus:ring-proBlue focus:border-transparent',
            inputClassName,
          )}
        />
        {showClearButton && value && onClear ? (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-tripBirdyGray hover:text-tripBirdyBlack"
          >
            <X className="w-4 h-4" />
          </button>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export default TripBirdyToolbarSearch;
