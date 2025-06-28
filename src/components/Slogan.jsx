const Slogan = () => {
  return (
    <div className="w-full max-w-xs md:max-w-xl lg:max-w-6xl flex flex-col mx-auto text-center justify-center px-4 py-16 gap-6">
        <h1 className="font-Logo text-6xl md:text-8xl font-semi mb-4 text-text">Benefix</h1>
        <h2 className="text-2xl md:text-4xl mb-4 text-text font-semibold">
          Conectando Empresas, Simplificando Benefícios.
        </h2>
        <h3 className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          A plataforma completa para administração de benefícios corporativos que revoluciona a experiência dos colaboradores e otimiza a gestão empresarial.
        </h3>
        
        {/* Badges de destaque */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-principal text-background px-4 py-2 rounded-full text-sm font-semibold">
            ✓ 500+ Empresas
          </div>
          <div className="bg-principal text-background px-4 py-2 rounded-full text-sm font-semibold">
            ✓ 50K+ Colaboradores
          </div>
          <div className="bg-principal text-background px-4 py-2 rounded-full text-sm font-semibold">
            ✓ 98% Satisfação
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button className="bg-principal text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-durk transition-colors duration-200 shadow-lg">
            Teste Grátis por 30 Dias
          </button>
          <button className="border-2 border-principal text-principal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-principal hover:text-background transition-colors duration-200">
            Ver Demonstração
          </button>
        </div>

        {/* Indicador de scroll */}
        <div className="mt-12 animate-bounce">
          <div className="text-principal text-2xl">↓</div>
          <p className="text-sm text-gray-600 mt-2">Descubra mais</p>
        </div>
    </div>
  )
}

export default Slogan