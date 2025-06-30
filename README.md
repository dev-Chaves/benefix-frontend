# Benefix - Plataforma de Gestão de Benefícios Corporativos

## 🚀 Sobre o Projeto

O Benefix é uma plataforma completa de gestão de benefícios corporativos que revoluciona a forma como empresas administram e colaboradores acessam seus benefícios. Nossa solução integra tecnologia de ponta com uma experiência de usuário excepcional.

## ✨ Funcionalidades Principais

### 📊 Dashboard Administrativo Simplificado
- Visão geral com estatísticas essenciais
- Acesso rápido às funcionalidades principais
- Interface limpa e focada

### 👥 Gestão de Usuários
- Cadastro completo de usuários
- Edição de informações pessoais e profissionais
- Controle de status (ativo/inativo)
- Associação com empresas

### 🏢 Gestão de Empresas
- Cadastro de empresas parceiras
- Informações completas (CNPJ, contato, setor)
- Controle de status das parcerias
- Organização por setores

### 🎁 Gestão de Benefícios
- Cadastro de benefícios por categoria
- Configuração de valores e fornecedores
- Definição de elegibilidade
- Controle de status dos benefícios

## 🔐 Área Administrativa

### Acesso
- **Login**: `/admin/login`
- **Registro**: `/admin/register`
- **Dashboard**: `/admin/dashboard`

### Credenciais de Teste
- **Usuário**: admin
- **Senha**: admin123

### Tokens de Registro
- `ADMIN_TOKEN_2024`
- `BENEFIX_ADMIN_KEY`
- `SUPER_ADMIN_ACCESS`

## 🛠️ Estrutura do Projeto

```
src/
├── components/
│   ├── admin/
│   │   ├── AdminLayout.jsx      # Layout base para páginas admin
│   │   └── AdminSidebar.jsx     # Navegação lateral
│   ├── NavBar.jsx               # Barra de navegação principal
│   └── ProtectedRoute.jsx       # Proteção de rotas
├── contexts/
│   └── AuthContext.jsx          # Gerenciamento de autenticação
├── pages/
│   ├── AdminDashboard.jsx       # Dashboard principal
│   ├── Benefits.jsx             # Gerenciamento de benefícios
│   ├── Companies.jsx            # Gerenciamento de empresas
│   ├── LandingPage.jsx          # Página inicial
│   ├── Login.jsx                # Login administrativo
│   ├── Register.jsx             # Registro administrativo
│   └── Users.jsx                # Gerenciamento de usuários
└── main.jsx                     # Configuração de rotas
```

## 🎨 Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Tailwind CSS** - Estilização
- **Context API** - Gerenciamento de estado
- **LocalStorage** - Persistência de dados

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

O projeto estará disponível em `http://localhost:5173`

## 📱 Rotas Disponíveis

### Públicas
- `/` - Landing page
- `/admin/login` - Login administrativo
- `/admin/register` - Registro administrativo

### Protegidas (requer autenticação)
- `/admin/dashboard` - Dashboard principal
- `/admin/users` - Gerenciamento de usuários
- `/admin/companies` - Gerenciamento de empresas
- `/admin/benefits` - Gerenciamento de benefícios

## 🎯 Funcionalidades do Admin

### Dashboard
- Estatísticas resumidas (usuários, empresas, benefícios)
- Acesso rápido às funcionalidades principais
- Interface intuitiva e responsiva

### Usuários
- ✅ Cadastrar novos usuários
- ✅ Editar informações existentes
- ✅ Excluir usuários
- ✅ Controlar status (ativo/inativo)
- ✅ Associar com empresas

### Empresas
- ✅ Cadastrar empresas parceiras
- ✅ Editar informações corporativas
- ✅ Excluir empresas
- ✅ Organizar por setores
- ✅ Controlar parcerias ativas

### Benefícios
- ✅ Cadastrar benefícios por categoria
- ✅ Configurar valores e fornecedores
- ✅ Definir critérios de elegibilidade
- ✅ Gerenciar status dos benefícios
- ✅ Interface visual em cards

## 🔒 Segurança

- Autenticação baseada em tokens
- Rotas protegidas com ProtectedRoute
- Validação de formulários
- Persistência segura no LocalStorage

## 🎨 Design System

### Cores
- **Principal**: #9CB8A2 (Verde suave)
- **Texto**: Tons de cinza
- **Background**: Branco e cinza claro
- **Status**: Verde (ativo), Vermelho (inativo)

### Componentes
- Cards informativos
- Formulários responsivos
- Tabelas organizadas
- Botões com estados hover
- Layout adaptativo

## 📋 Próximos Passos

- [ ] Integração com API backend
- [ ] Validações mais robustas
- [ ] Sistema de notificações
- [ ] Relatórios e dashboards avançados
- [ ] Exportação de dados
- [ ] Sistema de permissões granular

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Benefix** - Simplificando a gestão de benefícios corporativos 🎁