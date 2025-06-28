const Statistics = () => {
  const stats = [
    {
      number: "500+",
      label: "Empresas Atendidas",
      description: "Confiaram na nossa plataforma"
    },
    {
      number: "50K+",
      label: "Colaboradores",
      description: "Utilizam nossos serviços diariamente"
    },
    {
      number: "98%",
      label: "Satisfação",
      description: "Índice de aprovação dos usuários"
    },
    {
      number: "24/7",
      label: "Suporte",
      description: "Atendimento disponível sempre"
    }
  ];

  return (
    <section className="py-16 px-8 bg-principal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-background mb-4">
            Números que Impressionam
          </h2>
          <p className="text-xl text-background/90 max-w-3xl mx-auto">
            Resultados que comprovam a eficiência e confiabilidade da nossa plataforma
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-background mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-background mb-1">
                {stat.label}
              </div>
              <div className="text-background/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;