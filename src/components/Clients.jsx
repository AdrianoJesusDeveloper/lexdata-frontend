import React from 'react';

const Clients = () => {
  const clients = [
    {
      name: "Escritórios de Advocacia",
      description: "Departamentos jurídicos que necessitam de automação, análise preditiva e ferramentas tecnológicas."
    },
    {
      name: "Pequenas e Médias Empresas",
      description: "PMEs que buscam soluções acessíveis e escaláveis para competir com inteligência de dados."
    },
    {
      name: "Investidores e Fundos",
      description: "Investidores estratégicos que necessitam de due diligence aprofundada e análise de risco."
    },
    {
      name: "Startups & Empresas Tech",
      description: "Empresas de tecnologia que precisam de compliance e estruturação jurídico-financeira."
    }
  ];

  return (
    <section id="clientes" className="clients">
      <div className="container">
        <h2>Para Quem Atuamos</h2>
        <p className="section-subtitle">
          Atendemos organizações que buscam excelência na integração entre jurídico, dados e finanças
        </p>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <h3>{client.name}</h3>
              <p>{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;