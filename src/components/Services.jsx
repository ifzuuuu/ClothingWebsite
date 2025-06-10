import React from 'react';
import '../css/Services.css';
import { Home, Shield, Truck, Clock } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Home Eye Test",
    description: "Professional eye testing at your doorstep with certified optometrists",
    colorClass: "bg-blue"
  },
  {
    icon: Shield,
    title: "1 Year Warranty",
    description: "Complete protection against manufacturing defects and damages",
    colorClass: "bg-green"
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary delivery on all orders above $50 with tracking",
    colorClass: "bg-purple"
  },
  {
    icon: Clock,
    title: "Express Service",
    description: "Same-day repairs and 24-hour lens replacement service",
    colorClass: "bg-amber"
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Why Choose Us</h2>
          <p className="services-subtitle">
            Experience exceptional service and care with every purchase
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className={`service-icon-wrapper ${service.colorClass}`}>
                <service.icon size={32} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
