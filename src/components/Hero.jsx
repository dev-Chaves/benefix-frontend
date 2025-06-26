const Hero = () => {
  return(
    <div className="flex justify-center items-center min-h-screen">
      <section className="w-full max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Coluna de texto */}
          <div className="p-12"> {/* padding menor para não esmagar a imagem */}
            <h2 className="font-bold text-center md:text-left text-3xl md:text-4xl mb-4">
              Sobre o Benefix
            </h2>
            <p className="block mt-2">
              Benefix é um software que proporciona pro colaborador uma melhor visualização dos seus benefícios e conexão com a empresa, já pensou em ter acesso em poder consultar benefícios, seu plano, descontos e muito mais em um só app?
            </p>
            <h2 className="block text-2xl font-bold text-text mt-8">
              Como Surgiu?
            </h2>
            <p>
              Benefix surgiu a partir de um desafio de um Hackathon gerenciado pelo coordenador da minha Universidade, apartir dessa demanda selecionada, desenvolvemos
            </p>
          </div>
          <div className="flex justify-center items-center group">
            <img 
              className="
                w-lg 
                hover:scale-110 
                hover:-rotate-2 
                transition-all 
                duration-700 
                ease-out 
                cursor-pointer
                drop-shadow-lg
              " 
              src="/mockup.png" 
              alt="Mockup Benefix" 
            />
          </div>
        </div>
      </section>
    </div>
  )
}
export default Hero