import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona a implementação do Benefix?",
      answer: "A implementação é rápida e simples. Nossa equipe técnica realiza todo o setup em até 48 horas, incluindo migração de dados, treinamento da equipe e configuração personalizada dos benefícios da sua empresa."
    },
    {
      question: "O Benefix é compatível com sistemas de RH existentes?",
      answer: "Sim! O Benefix possui APIs robustas que permitem integração com os principais sistemas de RH do mercado, como SAP, Oracle, Workday e muitos outros. Nossa equipe técnica auxilia em todo o processo de integração."
    },
    {
      question: "Como é garantida a segurança dos dados?",
      answer: "Utilizamos criptografia de ponta a ponta, servidores em nuvem com certificação ISO 27001, backup automático e estamos em total conformidade com a LGPD. Seus dados e dos colaboradores estão 100% seguros."
    },
    {
      question: "Qual o custo da plataforma?",
      answer: "Oferecemos planos flexíveis baseados no número de colaboradores. Temos opções para empresas de todos os tamanhos, desde startups até grandes corporações. Entre em contato para um orçamento personalizado."
    },
    {
      question: "Existe suporte técnico disponível?",
      answer: "Sim! Oferecemos suporte técnico 24/7 via chat, email e telefone. Além disso, temos uma base de conhecimento completa e realizamos treinamentos regulares para sua equipe."
    },
    {
      question: "Posso personalizar os benefícios por departamento?",
      answer: "Absolutamente! O Benefix permite configuração granular de benefícios por cargo, departamento, senioridade ou qualquer critério que sua empresa utilize. Cada colaborador vê apenas os benefícios que tem direito."
    },
    {
      question: "Como os colaboradores acessam seus benefícios?",
      answer: "Os colaboradores podem acessar através do nosso app mobile (iOS e Android) ou pela plataforma web. O acesso é simples e intuitivo, permitindo consultar benefícios, usar descontos e acompanhar o histórico."
    },
    {
      question: "Existe período de teste gratuito?",
      answer: "Sim! Oferecemos 30 dias de teste gratuito com acesso completo a todas as funcionalidades. Nossa equipe fica disponível durante todo o período para auxiliar na configuração e uso da plataforma."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o Benefix e descubra como podemos ajudar sua empresa
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-text pr-4">
                  {faq.question}
                </h3>
                <span className={`text-2xl text-principal transition-transform duration-200 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <button className="bg-principal text-background px-8 py-3 rounded-lg font-semibold hover:bg-durk transition-colors duration-200">
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;