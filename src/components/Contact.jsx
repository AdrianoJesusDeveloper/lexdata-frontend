import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service_type: 'consultoria',
    message: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ type: 'success', message: data.message });
        setFormData({ 
          name: '', 
          email: '', 
          company: '', 
          service_type: 'consultoria', 
          message: '', 
          phone: '' 
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Erro ao enviar mensagem. Tente novamente.' 
      });
    } finally {
      setLoading(false);
    }
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
        
        {/* Status Message */}
        {submitStatus && (
          <div className={`status-message ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
        
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
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Seu E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="text"
              name="company"
              placeholder="Sua Empresa"
              value={formData.company}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="text"
              name="phone"
              placeholder="Seu Telefone (opcional)"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />
            <select
              name="service_type"
              value={formData.service_type}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="consultoria">Consultoria Estratégica</option>
              <option value="legaltech">Soluções LegalTech</option>
              <option value="financas">Finanças & Investimentos</option>
              <option value="treinamento">Educação & Treinamentos</option>
              <option value="outro">Outro</option>
            </select>
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            ></textarea>
            <button 
              type="submit" 
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;