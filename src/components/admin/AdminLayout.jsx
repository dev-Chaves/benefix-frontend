import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children, title, subtitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                {/* Mobile menu button */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <span className="sr-only">Abrir menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                
                <div className="ml-4 lg:ml-0">
                  <h1 className="text-2xl font-bold text-text">{title}</h1>
                  {subtitle && (
                    <p className="text-sm text-gray-600">{subtitle}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
                  <span className="sr-only">Notificações</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2v4.5L16.5 8 18 9.5V14l-1.5-1.5L15 14l-1.5-1.5L12 14l-1.5-1.5L9 14V9.5L10.5 8 9 6.5V2l1.5 1.5z" />
                  </svg>
                </button>
                
                {/* User menu */}
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Bem-vindo,</p>
                    <p className="font-semibold text-text">{user?.username}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;