const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      position: "Gerente de RH",
      company: "TechCorp",
      image: "👩‍💼",
      text: "O Benefix revolucionou nossa gestão de benefícios. Agora conseguimos ter controle total e nossos colaboradores estão muito mais satisfeitos."
    },
    {
      name: "João Santos",
      position: "Diretor de Pessoas",
      company: "InnovaTech",
      image: "👨‍💼",
      text: "Implementação rápida e suporte excepcional. Em menos de uma semana já estávamos operando com total eficiência."
    },
    {
      name: "Ana Costa",
      position: "Coordenadora de RH",
      company: "StartupXYZ",
      image: "👩‍💻",
      text: "A plataforma é intuitiva e nossos colaboradores adoraram o app mobile. Facilitou muito o acesso aos benefícios."
    },
    {
      name: "Carlos Oliveira",
      position: "CEO",
      company: "EmpresaABC",
      image: "👨‍💼",
      text: "ROI impressionante! Reduzimos custos administrativos em 40% e aumentamos a satisfação dos funcionários."
    }
  ];

  return (
    <section id="depoimentos" className="py-16 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de empresas que transformaram sua gestão de benefícios com o Benefix
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="text-lg font-semibold text-text">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-principal font-medium">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;