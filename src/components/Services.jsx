import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Consultoria Estratégica & Inteligência de Negócios",
      items: [
        "Dashboards e BI integrados",
        "Análise preditiva para decisões estratégicas",
        "Planejamento estratégico baseado em dados"
      ]
    },
    {
      title: "Soluções Jurídico-Tecnológicas (LegalTech)",
      items: [
        "Automação de cálculos trabalhistas e contratos",
        "Previsão de resultados judiciais com IA",
        "Compliance digital e LGPD"
      ]
    },
    {
      title: "Educação & Treinamentos",
      items: [
        "Workshops e mentorias",
        "Cursos especializados em LegalTech",
        "Big Data e Inteligência Competitiva"
      ]
    }
  ];

  return (
    <section id="servicos" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <p className="section-subtitle">Soluções Integradas para o Seu Negócio</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;