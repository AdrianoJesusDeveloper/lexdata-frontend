import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você integraria com o backend
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2>Entre em Contato</h2>
        <p className="section-subtitle">
          Transforme Dados em Decisões Estratégicas
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Vamos conversar!</h3>
            <p>
              Juntos, inovamos e crescemos. Vamos construir o futuro do seu negócio 
              com inteligência, tecnologia e visão estratégica.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <span className="icon">📧</span>
                <span>email@lexdatafinance.com</span>
              </div>
              <div className="contact-method">
                <span className="icon">🌐</span>
                <span>www.lexdatafinance.com</span>
              </div>
              <div className="contact-method">
                <span className="icon">📱</span>
                <span>/LexDataFinance</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Sua Empresa"
              value={formData.company}
              onChange={handleChange}
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Selecione o serviço de interesse</option>
              <option value="consultoria">Consultoria Estratégica</option>
              <option value="legaltech">Soluções LegalTech</option>
              <option value="financas">Finanças & Investimentos</option>
              <option value="treinamento">Educação & Treinamentos</option>
            </select>
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;