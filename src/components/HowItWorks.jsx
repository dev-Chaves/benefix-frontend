import Cards from "./HowItWorkComponents/Cards"
import TitleBar from "./HowItWorkComponents/TitleBar"

const HowItWorks = () => {
  return (
    <div>
        <section className="p-8">
            <TitleBar/>
            <div className="grid grid-cols-2 p-8 gap-8">
               <Cards title="Primeira Etapa" description="Cadastre sua empresa no nosso App "/>
               <Cards title="Segunda Etapa" description="Adicione os beneficios que sua empresa fornece"/>
               <Cards title="Terceira Etapa" description="Cadastre os colaboradores da empresa"/>
               <Cards title="Quarta Etapa" description="Veja seus colaboradores e seus beneficios cadastrados"/>
            </div>
        </section>
    </div>
  )
}

export default HowItWorks