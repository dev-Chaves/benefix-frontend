import Cards from "./HowItWorkComponents/Cards"
import TitleBar from "./HowItWorkComponents/TitleBar"

const HowItWorks = () => {
  return (
    <div id="como-funciona">
        <section className="p-8 bg-background">
            <TitleBar/>
            <div className="max-w-7xl mx-auto">
                {/* Primeira linha - Etapas principais */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-8 mb-12">
                    <Cards 
                        title="1. Cadastro da Empresa" 
                        description="Registre sua empresa na plataforma com informações básicas e configure o perfil organizacional completo."
                    />
                    <Cards 
                        title="2. Configuração de Benefícios" 
                        description="Adicione todos os benefícios que sua empresa oferece: plano de saúde, vale-refeição, gympass, e muito mais."
                    />
                    <Cards 
                        title="3. Gestão de Colaboradores" 
                        description="Cadastre colaboradores, defina perfis de acesso e configure benefícios específicos por cargo ou departamento."
                    />
                    <Cards 
                        title="4. Monitoramento e Relatórios" 
                        description="Acompanhe o uso dos benefícios, gere relatórios detalhados e otimize custos com insights inteligentes."
                    />
                </div>

                {/* Seção adicional - Processo detalhado */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h3 className="text-2xl font-bold text-text text-center mb-8">
                        Processo Completo de Implementação
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-principal text-background w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Análise e Planejamento</h4>
                            <p className="text-gray-600">
                                Nossa equipe analisa suas necessidades e planeja a implementação personalizada para sua empresa.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-principal text-background w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Configuração e Migração</h4>
                            <p className="text-gray-600">
                                Configuramos a plataforma e migramos seus dados existentes de forma segura e eficiente.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-principal text-background w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h4 className="text-lg font-semibold mb-2">Treinamento e Go-Live</h4>
                            <p className="text-gray-600">
                                Treinamos sua equipe e acompanhamos o lançamento para garantir uma transição suave.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Funcionalidades avançadas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-text mb-4">🔧 Funcionalidades Avançadas</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Integração com sistemas de RH existentes</li>
                            <li>• Automação de processos administrativos</li>
                            <li>• Notificações inteligentes para colaboradores</li>
                            <li>• Dashboard executivo com KPIs</li>
                            <li>• Controle de custos em tempo real</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-xl font-semibold text-text mb-4">📱 Experiência do Colaborador</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>• App mobile intuitivo e responsivo</li>
                            <li>• Consulta de benefícios em tempo real</li>
                            <li>• Histórico completo de utilização</li>
                            <li>• Acesso a descontos exclusivos</li>
                            <li>• Suporte direto via chat</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HowItWorks