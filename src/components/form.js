import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MembershipForm() {
  const [formData, setFormData] = useState({
    location: '',
    club: '',
    name: '',
    email: '',
    contact: '',
    dateOfJoining: '',
    membershipPackage: '',
    termsAccepted: false,
  });

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem('gymFormData');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('gymFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('gymFormData'); // clear data after submission

    const message = `Get Special Membership Offer\n
Location: ${formData.location}\n
Program: ${formData.club}\n
Name: ${formData.name}\n
Email: ${formData.email}\n
Contact Number: ${formData.contact}\n
Tentative Date of Joining: ${formData.dateOfJoining}\n
Membership Package: ${formData.membershipPackage}\n
I accept the Terms & Conditions: ${formData.termsAccepted ? 'Yes' : 'No'}`;

    const whatsappURL = `https://wa.me/6385706756?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="bg-gray-200 p-6 rounded-xl max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Membership Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-600">Location *</label>
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
          <label htmlFor="club" className="block text-sm font-medium text-gray-600">Program *</label>
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Contact */}
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-600">Contact Number *</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Date of Joining */}
        <div>
          <label htmlFor="dateOfJoining" className="block text-sm font-medium text-gray-600">Tentative Date of Joining *</label>
          <input
            type="date"
            name="dateOfJoining"
            id="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Membership Package */}
        <div>
          <label htmlFor="membershipPackage" className="block text-sm font-medium text-gray-600">Membership Package *</label>
          <select
            name="membershipPackage"
            id="membershipPackage"
            value={formData.membershipPackage}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Package</option>
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="1 Year">12 Months</option>
          </select>
        </div>

        {/* Terms */}
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
            I accept the <Link to="/terms" className="text-blue-600 underline hover:text-blue-800">Terms & Conditions</Link>
          </label>
        </div>

        {/* Submit */}
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
