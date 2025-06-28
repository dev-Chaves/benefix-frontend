# 🔐 Área Administrativa - Benefix

## Visão Geral

A área administrativa do Benefix permite que administradores gerenciem a plataforma, usuários, empresas e benefícios de forma centralizada e segura.

## 🚀 Como Acessar

### 1. Acesso pela Landing Page
- Clique no botão "🔐 Admin" na barra de navegação
- Ou acesse diretamente: `http://localhost:5173/admin/login`

### 2. Registro de Administrador
Para criar uma conta de administrador, você precisa:
- **Username**: Nome de usuário único (mínimo 3 caracteres)
- **Password**: Senha segura (mínimo 6 caracteres, com maiúscula, minúscula e número)
- **Token**: Token de administrador válido

#### 🔑 Tokens Válidos para Teste:
- `ADMIN2024` - Token padrão
- `BENEFIX_ADMIN` - Token da empresa
- `SUPER_TOKEN` - Token super admin

### 3. Login
Após o registro, faça login com:
- **Username**: Seu nome de usuário
- **Password**: Sua senha

## 📱 Funcionalidades da Área Admin

### Dashboard Principal
- **Estatísticas em tempo real**:
  - Total de usuários: 1.247
  - Empresas ativas: 89
  - Benefícios cadastrados: 156
  - Usuários ativos: 892

- **Status do sistema**:
  - Servidor principal
  - Base de dados
  - API externa
  - Backup

- **Atividade recente**:
  - Novas empresas cadastradas
  - Usuários ativos
  - Benefícios utilizados
  - Relatórios gerados

### Navegação Lateral
- 📊 **Dashboard** - Visão geral
- 👥 **Usuários** - Gerenciar usuários
- 🏢 **Empresas** - Gerenciar empresas
- 🎁 **Benefícios** - Gerenciar benefícios
- 📈 **Relatórios** - Gerar relatórios
- ⚙️ **Configurações** - Configurar sistema

## 🔒 Segurança

### Autenticação
- Sistema de login seguro
- Tokens de administrador obrigatórios
- Sessões persistentes com localStorage
- Logout automático por segurança

### Validações
- **Username**: 3+ caracteres, apenas letras, números e underscore
- **Password**: 6+ caracteres, com maiúscula, minúscula e número
- **Token**: Verificação contra lista de tokens válidos

### Proteção de Rotas
- Rotas administrativas protegidas
- Redirecionamento automático para login
- Verificação de autenticação em tempo real

## 🎨 Interface

### Design Responsivo
- Layout adaptável para desktop e mobile
- Sidebar colapsável em dispositivos móveis
- Cards informativos com ícones

### Componentes Principais
- **AdminLayout**: Layout base com sidebar e header
- **AdminSidebar**: Navegação lateral
- **ProtectedRoute**: Proteção de rotas
- **AuthContext**: Gerenciamento de estado de autenticação

## 📊 Armazenamento de Dados

### LocalStorage
Os dados são armazenados localmente para demonstração:

```javascript
// Usuários registrados
localStorage.getItem('benefix_admin_users')

// Usuário logado
localStorage.getItem('benefix_admin_user')
```

### Estrutura de Dados

#### Usuário Registrado:
```json
{
  "id": "1234567890",
  "username": "admin",
  "password": "Admin123",
  "token": "ADMIN2024",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

#### Sessão do Usuário:
```json
{
  "id": "1234567890",
  "username": "admin",
  "loginTime": "2024-01-01T00:00:00.000Z"
}
```

## 🛠️ Desenvolvimento

### Estrutura de Arquivos
```
src/
├── contexts/
│   └── AuthContext.jsx        # Contexto de autenticação
├── components/
│   ├── admin/
│   │   ├── AdminLayout.jsx    # Layout administrativo
│   │   └── AdminSidebar.jsx   # Sidebar de navegação
│   └── ProtectedRoute.jsx     # Proteção de rotas
└── pages/
    ├── Login.jsx              # Página de login
    ├── Register.jsx           # Página de registro
    └── AdminDashboard.jsx     # Dashboard principal
```

### Tecnologias Utilizadas
- **React Router DOM**: Navegação entre páginas
- **Context API**: Gerenciamento de estado global
- **LocalStorage**: Persistência de dados
- **Tailwind CSS**: Estilização

## 🔄 Fluxo de Autenticação

1. **Registro**:
   - Usuário acessa `/admin/register`
   - Preenche formulário com token válido
   - Dados salvos no localStorage
   - Redirecionamento para login

2. **Login**:
   - Usuário acessa `/admin/login`
   - Credenciais verificadas
   - Sessão criada e salva
   - Redirecionamento para dashboard

3. **Navegação**:
   - Rotas protegidas verificam autenticação
   - Sidebar permite navegação entre seções
   - Logout limpa sessão e redireciona

## 🚀 Próximos Passos

### Funcionalidades Futuras
- [ ] Gerenciamento de usuários
- [ ] CRUD de empresas
- [ ] Configuração de benefícios
- [ ] Geração de relatórios
- [ ] Configurações do sistema
- [ ] Integração com API real
- [ ] Sistema de permissões
- [ ] Logs de auditoria

### Melhorias de Segurança
- [ ] Criptografia de senhas
- [ ] JWT tokens
- [ ] Rate limiting
- [ ] 2FA (autenticação de dois fatores)
- [ ] Sessões com expiração

---

## 💡 Dicas de Uso

1. **Primeiro Acesso**: Sempre registre-se primeiro com um token válido
2. **Navegação**: Use a sidebar para acessar diferentes seções
3. **Logout**: Sempre faça logout ao terminar para manter a segurança
4. **Mobile**: A interface é responsiva e funciona bem em dispositivos móveis

## 🆘 Suporte

Em caso de problemas:
1. Verifique se o token está correto
2. Confirme se as credenciais estão válidas
3. Limpe o localStorage se necessário: `localStorage.clear()`
4. Recarregue a página

---

**Desenvolvido com ❤️ pela equipe Benefix**