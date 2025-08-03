import React from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/components/common/Input.jsx
 * PURPOSE: A reusable and styled input field component.
 *
 * PROPS:
 * - id: A unique identifier for the input, used for the label's `htmlFor`.
 * - label: The text to display in the label above the input.
 * - type: The input type (e.g., 'text', 'email', 'password').
 * - placeholder: The placeholder text for the input field.
 * - className: Optional additional classes for the wrapper div.
 * ==============================================================================
 */
const Input = ({ id, label, type = 'text', placeholder, className = '', ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        {...props}
      />
    </div>
  );
};

export default Input;
