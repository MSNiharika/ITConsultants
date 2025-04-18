import React from 'react';

const Clients = () => (
  <section className="py-20 bg-gray-100 text-center">
    <h2 className="text-4xl font-semibold text-blue-800 mb-12">Our Clients</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
      <div><img src="/path/to/client-logo1.png" alt="Client 1" className="h-20 mx-auto" /></div>
      <div><img src="/path/to/client-logo2.png" alt="Client 2" className="h-20 mx-auto" /></div>
      <div><img src="/path/to/client-logo3.png" alt="Client 3" className="h-20 mx-auto" /></div>
      <div><img src="/path/to/client-logo4.png" alt="Client 4" className="h-20 mx-auto" /></div>
    </div>
  </section>
);

export default Clients;