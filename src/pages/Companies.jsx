import { useState, useEffect } from 'react';
import AdminLayout from '../components/admin/AdminLayout';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    cnpj: '',
    email: '',
    phone: '',
    address: '',
    sector: '',
    status: 'active'
  });

  useEffect(() => {
    // Simular carregamento de empresas
    const mockCompanies = [
      { 
        id: 1, 
        name: 'TechCorp Ltda', 
        cnpj: '12.345.678/0001-90', 
        email: 'contato@techcorp.com', 
        phone: '(11) 9999-9999',
        address: 'São Paulo, SP',
        sector: 'Tecnologia',
        status: 'active' 
      },
      { 
        id: 2, 
        name: 'StartupX', 
        cnpj: '98.765.432/0001-10', 
        email: 'hello@startupx.com', 
        phone: '(11) 8888-8888',
        address: 'Rio de Janeiro, RJ',
        sector: 'Inovação',
        status: 'active' 
      },
      { 
        id: 3, 
        name: 'Indústria ABC', 
        cnpj: '11.222.333/0001-44', 
        email: 'contato@abc.com', 
        phone: '(11) 7777-7777',
        address: 'Belo Horizonte, MG',
        sector: 'Industrial',
        status: 'inactive' 
      }
    ];
    setCompanies(mockCompanies);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingCompany) {
      // Editar empresa existente
      setCompanies(companies.map(company => 
        company.id === editingCompany.id 
          ? { ...formData, id: editingCompany.id }
          : company
      ));
    } else {
      // Adicionar nova empresa
      const newCompany = {
        ...formData,
        id: Date.now()
      };
      setCompanies([...companies, newCompany]);
    }
    
    // Resetar formulário
    setFormData({ name: '', cnpj: '', email: '', phone: '', address: '', sector: '', status: 'active' });
    setShowForm(false);
    setEditingCompany(null);
  };

  const handleEdit = (company) => {
    setEditingCompany(company);
    setFormData(company);
    setShowForm(true);
  };

  const handleDelete = (companyId) => {
    if (confirm('Tem certeza que deseja excluir esta empresa?')) {
      setCompanies(companies.filter(company => company.id !== companyId));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AdminLayout 
      title="Gerenciar Empresas" 
      subtitle="Cadastre e gerencie empresas parceiras"
    >
      <div className="mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-principal text-white px-4 py-2 rounded-lg hover:bg-principal/90 transition-colors"
        >
          {showForm ? 'Cancelar' : 'Nova Empresa'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingCompany ? 'Editar Empresa' : 'Nova Empresa'}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CNPJ</label>
              <input
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                required
                placeholder="00.000.000/0000-00"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(00) 0000-0000"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Setor</label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              >
                <option value="">Selecione um setor</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Saúde">Saúde</option>
                <option value="Educação">Educação</option>
                <option value="Financeiro">Financeiro</option>
                <option value="Industrial">Industrial</option>
                <option value="Varejo">Varejo</option>
                <option value="Serviços">Serviços</option>
                <option value="Inovação">Inovação</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              >
                <option value="active">Ativa</option>
                <option value="inactive">Inativa</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-principal text-white px-6 py-2 rounded-lg hover:bg-principal/90 transition-colors mr-2"
              >
                {editingCompany ? 'Atualizar' : 'Cadastrar'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingCompany(null);
                  setFormData({ name: '', cnpj: '', email: '', phone: '', address: '', sector: '', status: 'active' });
                }}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CNPJ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Setor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {companies.map((company) => (
                <tr key={company.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{company.name}</div>
                      <div className="text-sm text-gray-500">{company.address}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.cnpj}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{company.sector}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      company.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {company.status === 'active' ? 'Ativa' : 'Inativa'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => handleEdit(company)}
                      className="text-principal hover:text-principal/80 mr-3"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(company.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Companies;