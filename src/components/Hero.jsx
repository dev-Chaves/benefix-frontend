const Hero = () => {
  return(
    <div id="sobre" className="flex justify-center items-center min-h-screen bg-gradient-to-br from-background to-gray-50">
      <section className="w-full max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Coluna de texto */}
          <div className="p-12">
            <h2 className="font-bold text-center md:text-left text-3xl md:text-4xl mb-6 text-text">
              Sobre o Benefix
            </h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              O Benefix é uma plataforma completa de gestão de benefícios corporativos que revoluciona a forma como empresas administram e colaboradores acessam seus benefícios. Nossa solução integra tecnologia de ponta com uma experiência de usuário excepcional.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-text mb-3">🎯 Nossa Missão</h3>
              <p className="text-gray-700">
                Simplificar a gestão de benefícios corporativos, proporcionando maior transparência, eficiência e satisfação tanto para empresas quanto para colaboradores.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              Como Surgiu?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              O Benefix nasceu durante um Hackathon universitário, onde identificamos a complexidade e ineficiência dos processos tradicionais de gestão de benefícios. A partir dessa demanda real do mercado, desenvolvemos uma solução inovadora que já atende centenas de empresas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-principal/10 p-4 rounded-lg">
                <h4 className="font-semibold text-text mb-2">🚀 Inovação</h4>
                <p className="text-sm text-gray-600">Tecnologia de ponta para gestão inteligente</p>
              </div>
              <div className="bg-principal/10 p-4 rounded-lg">
                <h4 className="font-semibold text-text mb-2">🤝 Confiança</h4>
                <p className="text-sm text-gray-600">Mais de 500 empresas confiam em nós</p>
              </div>
              <div className="bg-principal/10 p-4 rounded-lg">
                <h4 className="font-semibold text-text mb-2">⚡ Eficiência</h4>
                <p className="text-sm text-gray-600">Redução de 60% no tempo administrativo</p>
              </div>
              <div className="bg-principal/10 p-4 rounded-lg">
                <h4 className="font-semibold text-text mb-2">📈 Resultados</h4>
                <p className="text-sm text-gray-600">98% de satisfação dos usuários</p>
              </div>
            </div>
          </div>

          {/* Coluna da imagem */}
          <div className="flex justify-center items-center group p-8">
            <div className="relative">
              <img 
                className="
                  w-full max-w-lg
                  hover:scale-105 
                  hover:-rotate-1 
                  transition-all 
                  duration-700 
                  ease-out 
                  cursor-pointer
                  drop-shadow-2xl
                  rounded-lg
                " 
                src="/mockup.png" 
                alt="Mockup Benefix - Interface da plataforma mostrando dashboard e funcionalidades" 
              />
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 bg-principal text-background p-3 rounded-full shadow-lg">
                <span className="text-2xl">📱</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-durk text-background p-3 rounded-full shadow-lg">
                <span className="text-2xl">💼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seção adicional - Valores da empresa */}
        <div className="mt-16 px-12">
          <h3 className="text-3xl font-bold text-center text-text mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold text-text mb-3">Foco no Cliente</h4>
              <p className="text-gray-600">
                Desenvolvemos soluções pensando sempre na melhor experiência para nossos clientes e seus colaboradores.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-semibold text-text mb-3">Segurança</h4>
              <p className="text-gray-600">
                Protegemos os dados com os mais altos padrões de segurança e conformidade com regulamentações.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold text-text mb-3">Agilidade</h4>
              <p className="text-gray-600">
                Implementação rápida e suporte ágil para que sua empresa tenha resultados imediatos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero