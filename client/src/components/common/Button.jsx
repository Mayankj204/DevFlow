import React from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/components/common/Button.jsx
 * PURPOSE: A highly reusable button component with different visual styles.
 *
 * PROPS:
 * - variant ('primary' | 'secondary'): The style of the button.
 * - children: The content inside the button (e.g., text, an icon).
 * - onClick: The function to call when the button is clicked.
 * - className: Optional additional classes for custom styling.
 * ==============================================================================
 */
const Button = ({ variant = 'primary', children, onClick, className = '', ...props }) => {
  // Base classes that apply to all variants
  const baseClasses = "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Variant-specific classes
  const variants = {
    primary: "bg-primary text-white shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 focus:ring-primary",
    secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-primary",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
