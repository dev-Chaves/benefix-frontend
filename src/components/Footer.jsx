const Footer = () => {
  return (
    <footer id="contato" className="bg-durk text-background py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-Logo mb-4">Benefix</h3>
            <p className="text-background/80 mb-4">
              Conectando empresas e simplificando benefícios para criar um ambiente de trabalho mais satisfatório e produtivo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                📧
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                📱
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                🌐
              </a>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Integrações</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Segurança</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">API</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Atualizações</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Imprensa</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Parceiros</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Documentação</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Status do Sistema</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contato</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Treinamentos</a></li>
            </ul>
          </div>
        </div>

        {/* Informações de Contato */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-2">📍 Endereço</h5>
              <p className="text-background/80">
                Av. Paulista, 1000 - Sala 1001<br />
                São Paulo, SP - 01310-100
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">📞 Telefone</h5>
              <p className="text-background/80">
                (11) 3000-0000<br />
                WhatsApp: (11) 99999-9999
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">✉️ Email</h5>
              <p className="text-background/80">
                contato@benefix.com.br<br />
                suporte@benefix.com.br
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/80">
            © 2024 Benefix. Todos os direitos reservados. | 
            <a href="#" className="hover:text-background transition-colors ml-1">Política de Privacidade</a> | 
            <a href="#" className="hover:text-background transition-colors ml-1">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;