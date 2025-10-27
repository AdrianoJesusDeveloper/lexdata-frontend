import React from 'react';

const WhyChoose = () => {
  const reasons = [
    {
      title: "Integração Única",
      description: "Combinamos Direito, Dados e Finanças em uma abordagem integrada que poucos conseguem oferecer."
    },
    {
      title: "Soluções Preditivas",
      description: "Utilizamos IA e machine learning para antecipar cenários e prever resultados judiciais."
    },
    {
      title: "Expertise Tecnológica",
      description: "Domínio completo em Big Data, IA e Cloud (AWS), garantindo soluções modernas e seguras."
    },
    {
      title: "Consultoria 360°",
      description: "Atuação completa nos níveis estratégico, operacional, jurídico e financeiro."
    },
    {
      title: "Resultados Mensuráveis",
      description: "Aumento de eficiência, redução de riscos e otimização de resultados com métricas claras."
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <h2>Por Que Escolher LexData & Finance Solutions?</h2>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;