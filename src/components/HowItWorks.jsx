import Cards from "./HowItWorkComponents/Cards"
import TitleBar from "./HowItWorkComponents/TitleBar"

const HowItWorks = () => {
  return (
    <div>
        <section className="p-8">
            <TitleBar/>
            <div className="grid grid-cols-2 p-8 gap-4">
               <Cards title="Por onde começar ?" description="Cadastre sua empresa no nosso APP e comece o processo"/>
               <Cards title="Por onde começar ?" description="Cadastre sua empresa no nosso APP e comece o processo"/>
               <Cards title="Por onde começar ?" description="Cadastre sua empresa no nosso APP e comece o processo"/>
               <Cards title="Por onde começar ?" description="Cadastre sua empresa no nosso APP e comece o processo"/>
            </div>
        </section>
    </div>
  )
}

export default HowItWorks