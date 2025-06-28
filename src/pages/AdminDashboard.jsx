import { useState, useEffect } from 'react';
import AdminLayout from '../components/admin/AdminLayout';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCompanies: 0,
    totalBenefits: 0,
    activeUsers: 0
  });

  useEffect(() => {
    // Simular carregamento de estatísticas
    setStats({
      totalUsers: 1247,
      totalCompanies: 89,
      totalBenefits: 156,
      activeUsers: 892
    });
  }, []);

  return (
    <AdminLayout 
      title="Dashboard" 
      subtitle="Visão geral da plataforma Benefix"
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <span className="text-2xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total de Usuários</p>
              <p className="text-2xl font-bold text-text">{stats.totalUsers.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <span className="text-2xl">🏢</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Empresas Ativas</p>
              <p className="text-2xl font-bold text-text">{stats.totalCompanies}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full">
              <span className="text-2xl">🎁</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Benefícios Cadastrados</p>
              <p className="text-2xl font-bold text-text">{stats.totalBenefits}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="p-3 bg-principal/20 rounded-full">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Usuários Ativos</p>
              <p className="text-2xl font-bold text-text">{stats.activeUsers.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions and Session Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-text mb-4">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <span className="text-xl mr-3">📊</span>
                <div>
                  <p className="font-medium">Relatórios</p>
                  <p className="text-sm text-gray-600">Gerar relatórios detalhados</p>
                </div>
              </div>
            </button>
            
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <span className="text-xl mr-3">👥</span>
                <div>
                  <p className="font-medium">Gerenciar Usuários</p>
                  <p className="text-sm text-gray-600">Adicionar ou remover usuários</p>
                </div>
              </div>
            </button>
            
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <span className="text-xl mr-3">🏢</span>
                <div>
                  <p className="font-medium">Empresas</p>
                  <p className="text-sm text-gray-600">Gerenciar empresas cadastradas</p>
                </div>
              </div>
            </button>
            
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <span className="text-xl mr-3">⚙️</span>
                <div>
                  <p className="font-medium">Configurações</p>
                  <p className="text-sm text-gray-600">Configurar sistema</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-text mb-4">Sistema Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium">Servidor Principal</span>
              </div>
              <span className="text-green-600 text-sm">Online</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium">Base de Dados</span>
              </div>
              <span className="text-green-600 text-sm">Conectado</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="font-medium">API Externa</span>
              </div>
              <span className="text-blue-600 text-sm">Funcionando</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <span className="font-medium">Backup</span>
              </div>
              <span className="text-yellow-600 text-sm">Agendado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-text mb-4">Atividade Recente</h3>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-xl mr-3">📝</span>
            <div className="flex-1">
              <p className="font-medium">Nova empresa cadastrada</p>
              <p className="text-sm text-gray-600">TechStart Ltda se registrou na plataforma</p>
            </div>
            <span className="text-sm text-gray-500">2 horas atrás</span>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-xl mr-3">👤</span>
            <div className="flex-1">
              <p className="font-medium">Novo usuário ativo</p>
              <p className="text-sm text-gray-600">50 novos colaboradores acessaram hoje</p>
            </div>
            <span className="text-sm text-gray-500">4 horas atrás</span>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-xl mr-3">🎁</span>
            <div className="flex-1">
              <p className="font-medium">Benefício utilizado</p>
              <p className="text-sm text-gray-600">Vale-refeição foi o mais usado hoje</p>
            </div>
            <span className="text-sm text-gray-500">6 horas atrás</span>
          </div>
          
          <div className="flex items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-xl mr-3">📊</span>
            <div className="flex-1">
              <p className="font-medium">Relatório gerado</p>
              <p className="text-sm text-gray-600">Relatório mensal de utilização foi criado</p>
            </div>
            <span className="text-sm text-gray-500">1 dia atrás</span>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;