import { useState, useEffect } from 'react';

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    question: ''
  });

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({ firstName: '', email: '', question: '' });
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12">
          {/* Close button */}
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-full p-1"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <h2 id="modal-heading" className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Need to Know More?
          </h2>
          <p className="text-center text-gray-700 mb-8 text-lg">
            I usually answer questions the same day.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="modal-firstName"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="modal-firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="modal-email"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="modal-question"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Question
              </label>
              <textarea
                id="modal-question"
                name="question"
                rows="5"
                value={formData.question}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow resize-y"
                aria-required="true"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 shadow-md"
            >
              Send Message
            </button>

            <p className="text-sm text-gray-600 text-center">
              * Please note that your email address will never be sold or used for unsolicited communication.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;

