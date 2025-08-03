import React, { useEffect } from 'react';

/**
 * ==============================================================================
 * FILE: /client/src/components/common/Modal.jsx
 * PURPOSE: A reusable and enhanced modal/dialog component.
 *
 * PROPS:
 * - isOpen (boolean): Controls the visibility of the modal.
 * - onClose (function): Function to call when the modal should be closed.
 * - title (string): The title to display in the modal header.
 * - children (node): The content to display in the modal body.
 * - size ('sm'|'md'|'lg'|'xl'): Optional size of the modal. Defaults to 'lg'.
 * - footer (node): Optional content for the modal's footer (e.g., buttons).
 * ==============================================================================
 */
const Modal = ({ isOpen, onClose, title, children, size = 'lg', footer }) => {
  // Effect to handle the Escape key press for closing the modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  // Define size classes for the modal panel
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    // Backdrop with fade-in animation
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Panel with scale-up animation */}
      <div
        className={`bg-white rounded-xl shadow-lg w-full ${sizeClasses[size]} mx-auto transform transition-transform duration-300 animate-scaleUp`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {children}
        </div>

        {/* Optional Modal Footer */}
        {footer && (
          <div className="px-6 py-4 bg-gray-50 rounded-b-xl border-t border-gray-200 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// Add keyframe animations to your global CSS file (e.g., index.css)
/*
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleUp {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
.animate-scaleUp {
  animation: scaleUp 0.3s ease-out forwards;
}
*/

export default Modal;
