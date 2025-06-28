import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar se há usuário logado no localStorage ao inicializar
  useEffect(() => {
    const savedUser = localStorage.getItem('benefix_admin_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      // Simular chamada de API
      const savedUsers = JSON.parse(localStorage.getItem('benefix_admin_users') || '[]');
      const user = savedUsers.find(u => u.username === username && u.password === password);
      
      if (user) {
        const userSession = {
          id: user.id,
          username: user.username,
          loginTime: new Date().toISOString()
        };
        
        setUser(userSession);
        localStorage.setItem('benefix_admin_user', JSON.stringify(userSession));
        return { success: true };
      } else {
        return { success: false, error: 'Credenciais inválidas' };
      }
    } catch (error) {
      return { success: false, error: 'Erro interno do servidor' };
    }
  };

  const register = async (username, password, token) => {
    try {
      // Verificar se o token é válido (simulação)
      const validTokens = ['ADMIN2024', 'BENEFIX_ADMIN', 'SUPER_TOKEN'];
      
      if (!validTokens.includes(token)) {
        return { success: false, error: 'Token de administrador inválido' };
      }

      const savedUsers = JSON.parse(localStorage.getItem('benefix_admin_users') || '[]');
      
      // Verificar se o usuário já existe
      if (savedUsers.find(u => u.username === username)) {
        return { success: false, error: 'Nome de usuário já existe' };
      }

      const newUser = {
        id: Date.now().toString(),
        username,
        password,
        token,
        createdAt: new Date().toISOString()
      };

      savedUsers.push(newUser);
      localStorage.setItem('benefix_admin_users', JSON.stringify(savedUsers));
      
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Erro interno do servidor' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('benefix_admin_user');
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;