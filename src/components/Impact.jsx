import React from 'react';

const Impact = () => {
  const metrics = [
    {
      value: "85%",
      label: "Redução de Tempo",
      description: "Em processos jurídicos e análises financeiras através da automação inteligente"
    },
    {
      value: "3x",
      label: "Aumento de Precisão",
      description: "Nas previsões de resultados e análises de risco com uso de IA e Big Data"
    },
    {
      value: "60%",
      label: "Economia de Custos",
      description: "Redução média de custos operacionais jurídicos e financeiros dos clientes"
    }
  ];

  return (
    <section className="impact">
      <div className="container">
        <h2>Nosso Impacto em Números</h2>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <p className="metric-description">{metric.description}</p>
            </div>
          ))}
        </div>
        
        <div className="quote">
          <p>
            "A integração entre direito, dados e finanças não é mais uma opção — 
            é uma necessidade estratégica para empresas que desejam prosperar no cenário atual."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;