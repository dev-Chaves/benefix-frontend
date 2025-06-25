const Hero = () => {
  return(
    <div className="flex justify-center items-center min-h-screen">
      <section className="w-full max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-24 flex flex-col" >
            <h2 className="font-bold text-center md:text-left">
              Sobre o Benefix
            </h2>
            <p className="block mt-2">
                Benefix é um software que proporciona pro colaborador uma melhor visualização dos seus benefícios e conexão com a empresa, já pensou em ter acesso em poder consultar benefícios, seu plano, descontos e muito mais em um só app?
            </p>
            <span className="block text-2xl font-bold text-text mt-4">
                Esse é o Benefix
            </span>
          </div>
          <div className="flex justify-center items-center">
            <img className="w-md hover:w-xl transition-all duration-500" src="/mockup.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
export default Hero