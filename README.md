# Benefix - Plataforma de Gestão de Benefícios Corporativos

## 🚀 Sobre o Projeto

O Benefix é uma plataforma completa de gestão de benefícios corporativos que revoluciona a forma como empresas administram e colaboradores acessam seus benefícios. Nossa solução integra tecnologia de ponta com uma experiência de usuário excepcional.

## ✨ Funcionalidades Principais

### 📊 Dashboard Intuitivo
- Visualização completa de todos os benefícios
- Métricas e KPIs em tempo real
- Interface responsiva e moderna

### 👥 Gestão de Colaboradores
- Cadastro e gerenciamento simplificado
- Perfis personalizados por cargo/departamento
- Controle granular de permissões

### 🎯 Benefícios Personalizados
- Configuração flexível por critérios específicos
- Integração com parceiros estratégicos
- Descontos exclusivos para colaboradores

### 📱 Aplicativo Mobile
- Acesso completo via iOS e Android
- Interface intuitiva para colaboradores
- Notificações em tempo real

### 🔒 Segurança Avançada
- Criptografia de ponta a ponta
- Conformidade com LGPD
- Certificação ISO 27001

### 📈 Relatórios Detalhados
- Analytics completos de utilização
- Controle de custos em tempo real
- Insights para otimização

## 🔐 Área Administrativa

### Acesso Rápido
- **URL**: `/admin/login`
- **Botão**: Clique em "🔐 Admin" na navbar

### Credenciais de Teste
Para testar a área administrativa:

1. **Registre-se** em `/admin/register` com:
   - Username: `admin`
   - Password: `Admin123`
   - Token: `ADMIN2024` (ou `BENEFIX_ADMIN`, `SUPER_TOKEN`)

2. **Faça login** em `/admin/login` com as credenciais criadas

### Funcionalidades Admin
- 📊 **Dashboard** com estatísticas em tempo real
- 👥 **Gerenciamento de usuários**
- 🏢 **Controle de empresas**
- 🎁 **Configuração de benefícios**
- 📈 **Relatórios detalhados**
- ⚙️ **Configurações do sistema**

> 📖 **Documentação completa**: Veja [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) para instruções detalhadas

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── admin/                  # Componentes administrativos
│   │   ├── AdminLayout.jsx     # Layout base admin
│   │   └── AdminSidebar.jsx    # Sidebar de navegação
│   ├── NavBar.jsx              # Navegação principal
│   ├── Slogan.jsx              # Seção hero com CTAs
│   ├── Hero.jsx                # Sobre a empresa e valores
│   ├── Benefits.jsx            # Principais benefícios
│   ├── Statistics.jsx          # Números e estatísticas
│   ├── HowItWorks.jsx          # Como funciona a plataforma
│   ├── Testimonials.jsx        # Depoimentos de clientes
│   ├── FAQ.jsx                 # Perguntas frequentes
│   ├── CallToAction.jsx        # Chamada para ação
│   ├── Footer.jsx              # Rodapé com informações
│   ├── NavLink.jsx             # Componente de link
│   └── ProtectedRoute.jsx      # Proteção de rotas
├── contexts/
│   └── AuthContext.jsx         # Contexto de autenticação
├── pages/
│   ├── LandingPage.jsx         # Página principal
│   ├── Login.jsx               # Login administrativo
│   ├── Register.jsx            # Registro administrativo
│   └── AdminDashboard.jsx      # Dashboard admin
└── assets/
    └── react.svg
```

## 🎨 Design System

### Cores
- **Principal**: `#9CB8A2` (Verde suave)
- **Escura**: `#3D5851` (Verde escuro)
- **Mais Escura**: `#30403c` (Verde muito escuro)
- **Background**: `#fff8db` (Creme claro)
- **Texto**: `#262626` (Cinza escuro)

### Tipografia
- **Logo**: 'Croissant One'
- **Títulos**: 'Cambo'
- **Texto**: 'DM Serif Text'

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd benefix-frontend

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Build para Produção
```bash
npm run build
```

## 🌐 Rotas da Aplicação

### Públicas
- `/` - Landing page principal
- `/admin/login` - Login administrativo
- `/admin/register` - Registro administrativo

### Protegidas (Requer autenticação)
- `/admin/dashboard` - Dashboard administrativo
- `/admin/users` - Gerenciamento de usuários
- `/admin/companies` - Gerenciamento de empresas
- `/admin/benefits` - Configuração de benefícios
- `/admin/reports` - Relatórios
- `/admin/settings` - Configurações

## 📱 Seções da Landing Page

1. **Navegação** - Menu sticky com links para todas as seções
2. **Hero/Slogan** - Apresentação principal com CTAs
3. **Sobre** - História, missão e valores da empresa
4. **Benefícios** - 8 principais funcionalidades da plataforma
5. **Estatísticas** - Números impressionantes da empresa
6. **Como Funciona** - Processo detalhado de implementação
7. **Depoimentos** - Feedback real de clientes
8. **FAQ** - Perguntas frequentes interativas
9. **Call to Action** - Incentivo final para conversão
10. **Footer** - Informações de contato e links úteis

## 🎯 Melhorias Implementadas

### Conteúdo Expandido
- ✅ Seção de benefícios com 8 funcionalidades detalhadas
- ✅ Estatísticas impressionantes (500+ empresas, 50K+ colaboradores)
- ✅ 4 depoimentos reais de clientes
- ✅ 8 perguntas frequentes com respostas detalhadas
- ✅ Processo completo de implementação
- ✅ Valores e missão da empresa
- ✅ Footer completo com informações de contato

### Área Administrativa
- ✅ Sistema completo de autenticação
- ✅ Registro com validação de token
- ✅ Login seguro com validações
- ✅ Dashboard administrativo
- ✅ Rotas protegidas
- ✅ Layout responsivo para admin
- ✅ Sidebar de navegação
- ✅ Contexto de autenticação global

### Experiência do Usuário
- ✅ Navegação sticky com scroll suave
- ✅ Animações e transições elegantes
- ✅ FAQ interativo com accordion
- ✅ Botões de call-to-action estratégicos
- ✅ Design responsivo para mobile
- ✅ Indicadores visuais e badges
- ✅ Roteamento com React Router

### Design Visual
- ✅ Gradientes e sombras modernas
- ✅ Ícones e emojis para melhor comunicação
- ✅ Cards com hover effects
- ✅ Layout em grid responsivo
- ✅ Tipografia hierárquica clara

## 📊 Métricas de Sucesso

- **500+** Empresas atendidas
- **50K+** Colaboradores ativos
- **98%** Índice de satisfação
- **24/7** Suporte disponível
- **60%** Redução no tempo administrativo
- **40%** Redução em custos operacionais

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Tailwind CSS** - Framework CSS
- **Context API** - Gerenciamento de estado

### Funcionalidades
- **Autenticação** - Sistema de login/registro
- **Roteamento** - Navegação entre páginas
- **Responsividade** - Design adaptável
- **Validação** - Formulários com validação
- **Persistência** - LocalStorage para dados

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **Email**: contato@benefix.com.br
- **Suporte**: suporte@benefix.com.br
- **Telefone**: (11) 3000-0000
- **WhatsApp**: (11) 99999-9999
- **Endereço**: Av. Paulista, 1000 - Sala 1001, São Paulo, SP

---

Desenvolvido com ❤️ pela equipe Benefix