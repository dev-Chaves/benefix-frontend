const Benefits = () => {
  const benefits = [
    {
      icon: "📊",
      title: "Dashboard Intuitivo",
      description: "Visualize todos os benefícios e métricas em um painel centralizado e fácil de usar."
    },
    {
      icon: "👥",
      title: "Gestão de Colaboradores",
      description: "Cadastre e gerencie todos os colaboradores da empresa de forma simples e organizada."
    },
    {
      icon: "🎯",
      title: "Benefícios Personalizados",
      description: "Configure benefícios específicos para diferentes cargos e departamentos."
    },
    {
      icon: "📱",
      title: "App Mobile",
      description: "Acesso completo via aplicativo móvel para colaboradores consultarem seus benefícios."
    },
    {
      icon: "🔒",
      title: "Segurança Avançada",
      description: "Proteção de dados com criptografia e conformidade com LGPD."
    },
    {
      icon: "📈",
      title: "Relatórios Detalhados",
      description: "Gere relatórios completos sobre utilização e custos dos benefícios."
    },
    {
      icon: "🤝",
      title: "Parcerias Estratégicas",
      description: "Acesso a rede de parceiros com descontos exclusivos para colaboradores."
    },
    {
      icon: "⚡",
      title: "Integração Rápida",
      description: "Implementação em até 48 horas com suporte técnico especializado."
    }
  ];

  return (
    <section id="beneficios" className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text mb-4">
            Por que escolher o Benefix?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece tudo que sua empresa precisa para gerenciar benefícios 
            de forma eficiente e proporcionar a melhor experiência aos colaboradores.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-text mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;