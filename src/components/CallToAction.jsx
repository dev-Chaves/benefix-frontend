const CallToAction = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-r from-principal to-durk">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-background mb-6">
          Pronto para Transformar sua Gestão de Benefícios?
        </h2>
        <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
          Junte-se a mais de 500 empresas que já revolucionaram a experiência dos seus colaboradores com o Benefix.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-background text-principal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Começar Teste Gratuito
          </button>
          <button className="border-2 border-background text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-background hover:text-principal transition-colors duration-200">
            Agendar Demonstração
          </button>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-background/80">
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span>
            <span>30 dias grátis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span>
            <span>Sem compromisso</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-300">✓</span>
            <span>Suporte incluído</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;