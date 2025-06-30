import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/admin/AdminLayout';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCompanies: 0,
    totalBenefits: 0
  });

  useEffect(() => {
    // Simular carregamento de estatísticas básicas
    setStats({
      totalUsers: 1247,
      totalCompanies: 89,
      totalBenefits: 156
    });
  }, []);

  return (
    <AdminLayout 
      title="Dashboard" 
      subtitle="Painel de controle administrativo"
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
              <p className="text-sm text-gray-600">Empresas Cadastradas</p>
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
              <p className="text-sm text-gray-600">Benefícios Disponíveis</p>
              <p className="text-2xl font-bold text-text">{stats.totalBenefits}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-text mb-6">Ações Principais</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin/users"
            className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-center group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">👥</div>
            <h4 className="text-lg font-semibold text-text mb-2">Gerenciar Usuários</h4>
            <p className="text-sm text-gray-600">Cadastrar, editar e remover usuários do sistema</p>
          </Link>

          <Link
            to="/admin/companies"
            className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 text-center group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">🏢</div>
            <h4 className="text-lg font-semibold text-text mb-2">Gerenciar Empresas</h4>
            <p className="text-sm text-gray-600">Cadastrar e administrar empresas parceiras</p>
          </Link>

          <Link
            to="/admin/benefits"
            className="p-6 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-200 text-center group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">🎁</div>
            <h4 className="text-lg font-semibold text-text mb-2">Gerenciar Benefícios</h4>
            <p className="text-sm text-gray-600">Cadastrar e configurar benefícios disponíveis</p>
          </Link>
        </div>
      </div>

      {/* Quick Info */}
      <div className="mt-8 bg-principal/10 p-6 rounded-lg">
        <h4 className="text-lg font-semibold text-text mb-2">Bem-vindo ao Painel Administrativo</h4>
        <p className="text-gray-700">
          Use as opções acima para gerenciar usuários, empresas e benefícios da plataforma Benefix. 
          Todas as alterações são salvas automaticamente.
        </p>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;