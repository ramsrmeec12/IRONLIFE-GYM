import React from 'react';

function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-900">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to our gym! By signing up for any of our memberships or using our facilities and services, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Membership</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>All memberships are non-transferable and non-refundable.</li>
        <li>Members must present a valid fingerprint ID on entry.</li>
        <li>Management reserves the right to cancel or suspend a membership for misuse or misconduct.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Health and Safety</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Members should consult a physician before beginning any exercise program.</li>
        <li>Please inform the trainer of any medical conditions or injuries before starting workouts.</li>
        <li>Use gym equipment responsibly and return it to its place after use.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Code of Conduct</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Respect all members, staff, and equipment.</li>
        <li>Use a towel during workouts and clean equipment after use.</li>
        <li>Disruptive, abusive, or inappropriate behavior will result in membership termination.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Locker and Personal Belongings</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Lockers are available for daily use only. Personal belongings should not be left overnight.</li>
        <li>We are not responsible for any lost, stolen, or damaged belongings.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Payment and Refund</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>All payments must be made in advance for the selected membership package.</li>
        <li>There will be no refunds once the payment is made, except in cases of serious illness (with medical proof).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Free Trial</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Free trial is subject to availability and can be availed only once per person.</li>
        <li>Management holds the right to reject a free trial request without stating any reason.</li>
      </ul>

      <p className="mt-6 text-sm text-gray-600 italic">
        By using our services, you confirm that you have read, understood, and agreed to these Terms and Conditions. These terms may be updated at any time without prior notice.
      </p>
    </div>
  );
}

export default TermsAndConditions;
