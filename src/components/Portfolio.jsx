import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      number: "1",
      title: "Finanças & Investimentos",
      description: "Planejamento financeiro, tributário, e previdenciário modelos de análise de risco e scoring, estudos preditivos de mercado."
    },
    {
      number: "2",
      title: "Tecnologia & Cloud",
      description: "Aplicativos web e automações em nuvem AWS, integração de dados através de ETL, APIs e Data Lakes."
    },
    {
      number: "3",
      title: "Inteligência Competitiva",
      description: "Monitoramento de concorrência e tendências de mercado, relatórios interativos com dashboards personalizados."
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfólio Completo de Serviços</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-number">{item.number}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;