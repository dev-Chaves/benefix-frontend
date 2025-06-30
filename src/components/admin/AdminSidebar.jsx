import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      icon: '📊'
    },
    {
      path: '/admin/users',
      name: 'Usuários',
      icon: '👥'
    },
    {
      path: '/admin/companies',
      name: 'Empresas',
      icon: '🏢'
    },
    {
      path: '/admin/benefits',
      name: 'Benefícios',
      icon: '🎁'
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        {/* Header */}
        <div className="p-6 border-b flex-shrink-0">
          <Link to="/" className="flex items-center">
            <h2 className="text-xl font-Logo text-principal">Benefix</h2>
            <span className="ml-2 text-sm text-gray-500">Admin</span>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="mt-6 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center px-6 py-3 text-left w-full transition-colors duration-200
                ${isActive(item.path) 
                  ? 'bg-principal text-white border-r-4 border-gray-800' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl mr-3">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
        
        {/* Footer Button */}
        <div className="p-6 border-t flex-shrink-0">
          <Link
            to="/"
            className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 w-full"
            onClick={() => setIsOpen(false)}
          >
            <span className="mr-2">🏠</span>
            <span>Voltar ao Site</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;