import React from 'react';

const Services = () => (
  <section className="py-20 bg-gray-100 text-center">
    <h2 className="text-4xl font-semibold mb-12 text-blue-800">Our Services</h2>
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12">
      <div className="bg-white shadow-md p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Consulting</h3>
        <p>Strategic IT consulting to drive business growth and efficiency.</p>
      </div>
      <div className="bg-white shadow-md p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Development</h3>
        <p>Custom software development for your specific business needs.</p>
      </div>
      <div className="bg-white shadow-md p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">Support</h3>
        <p>Ongoing support to ensure your systems run smoothly.</p>
      </div>
    </div>
  </section>
);

export default Services;