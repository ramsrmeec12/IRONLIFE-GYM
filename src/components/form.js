import React, { useState } from 'react';

function MembershipForm() {
  const [formData, setFormData] = useState({
    location: '',
    club: '',
    name: '',
    email: '',
    contact: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message to send via WhatsApp
    const message = `Get Special Membership Offer\n
Location: ${formData.location}\n
Program: ${formData.club}\n
Name: ${formData.name}\n
Email: ${formData.email}\n
Contact Number: ${formData.contact}\n
I accept the Terms & Conditions: ${formData.termsAccepted ? 'Yes' : 'No'}`;

    const whatsappURL = `https://wa.me/9025416751?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp with the formatted message
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="bg-gray-200 p-6 rounded-xl max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Membership Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-600">
            Location *
          </label>
          <select
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Location</option>
            <option value="Ramapuram">Ramapuram</option>
            <option value="Porur">Porur</option>
          </select>
        </div>

        {/* Program */}
        <div>
          <label htmlFor="club" className="block text-sm font-medium text-gray-600">
            Program *
          </label>
          <select
            name="club"
            id="club"
            value={formData.club}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Program</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Weight Gain">Weight Gain</option>
            <option value="Body Recomposition">Body Recomposition</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="e.g. John"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email address *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="e.g. john@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Contact number */}
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-600">
            Contact number *
          </label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder="e.g. 12345"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            id="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
            className="h-4 w-4 text-blue-600"
          />
          <label htmlFor="termsAccepted" className="ml-2 text-sm text-gray-600">
            I accept the Terms & Conditions
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 bg-red-950 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MembershipForm;
