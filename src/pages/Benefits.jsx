import { useState, useEffect } from 'react';
import AdminLayout from '../components/admin/AdminLayout';

const Benefits = () => {
  const [benefits, setBenefits] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBenefit, setEditingBenefit] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    value: '',
    provider: '',
    eligibility: '',
    status: 'active'
  });

  useEffect(() => {
    // Simular carregamento de benefícios
    const mockBenefits = [
      { 
        id: 1, 
        name: 'Vale Refeição', 
        description: 'Auxílio alimentação para colaboradores',
        category: 'Alimentação',
        value: 'R$ 25,00/dia',
        provider: 'VR Benefícios',
        eligibility: 'Todos os funcionários',
        status: 'active' 
      },
      { 
        id: 2, 
        name: 'Plano de Saúde', 
        description: 'Cobertura médica completa',
        category: 'Saúde',
        value: 'R$ 350,00/mês',
        provider: 'Unimed',
        eligibility: 'Funcionários CLT',
        status: 'active' 
      },
      { 
        id: 3, 
        name: 'Seguro de Vida', 
        description: 'Proteção para colaboradores e família',
        category: 'Segurança',
        value: 'R$ 50,00/mês',
        provider: 'Porto Seguro',
        eligibility: 'Todos os funcionários',
        status: 'inactive' 
      }
    ];
    setBenefits(mockBenefits);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingBenefit) {
      // Editar benefício existente
      setBenefits(benefits.map(benefit => 
        benefit.id === editingBenefit.id 
          ? { ...formData, id: editingBenefit.id }
          : benefit
      ));
    } else {
      // Adicionar novo benefício
      const newBenefit = {
        ...formData,
        id: Date.now()
      };
      setBenefits([...benefits, newBenefit]);
    }
    
    // Resetar formulário
    setFormData({ name: '', description: '', category: '', value: '', provider: '', eligibility: '', status: 'active' });
    setShowForm(false);
    setEditingBenefit(null);
  };

  const handleEdit = (benefit) => {
    setEditingBenefit(benefit);
    setFormData(benefit);
    setShowForm(true);
  };

  const handleDelete = (benefitId) => {
    if (confirm('Tem certeza que deseja excluir este benefício?')) {
      setBenefits(benefits.filter(benefit => benefit.id !== benefitId));
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
      title="Gerenciar Benefícios" 
      subtitle="Cadastre e configure benefícios disponíveis"
    >
      <div className="mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-principal text-white px-4 py-2 rounded-lg hover:bg-principal/90 transition-colors"
        >
          {showForm ? 'Cancelar' : 'Novo Benefício'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingBenefit ? 'Editar Benefício' : 'Novo Benefício'}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Benefício</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              >
                <option value="">Selecione uma categoria</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Saúde">Saúde</option>
                <option value="Transporte">Transporte</option>
                <option value="Educação">Educação</option>
                <option value="Lazer">Lazer</option>
                <option value="Segurança">Segurança</option>
                <option value="Financeiro">Financeiro</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Valor</label>
              <input
                type="text"
                name="value"
                value={formData.value}
                onChange={handleChange}
                required
                placeholder="Ex: R$ 25,00/dia"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fornecedor</label>
              <input
                type="text"
                name="provider"
                value={formData.provider}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="3"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Elegibilidade</label>
              <select
                name="eligibility"
                value={formData.eligibility}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-principal focus:border-transparent"
              >
                <option value="">Selecione a elegibilidade</option>
                <option value="Todos os funcionários">Todos os funcionários</option>
                <option value="Funcionários CLT">Funcionários CLT</option>
                <option value="Gerentes e acima">Gerentes e acima</option>
                <option value="Funcionários com mais de 1 ano">Funcionários com mais de 1 ano</option>
                <option value="Funcionários tempo integral">Funcionários tempo integral</option>
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
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-principal text-white px-6 py-2 rounded-lg hover:bg-principal/90 transition-colors mr-2"
              >
                {editingBenefit ? 'Atualizar' : 'Cadastrar'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingBenefit(null);
                  setFormData({ name: '', description: '', category: '', value: '', provider: '', eligibility: '', status: 'active' });
                }}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit.name}</h3>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mt-1">
                  {benefit.category}
                </span>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                benefit.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {benefit.status === 'active' ? 'Ativo' : 'Inativo'}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Valor:</span>
                <span className="font-medium">{benefit.value}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Fornecedor:</span>
                <span className="font-medium">{benefit.provider}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Elegibilidade:</span>
                <span className="font-medium text-xs">{benefit.eligibility}</span>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
              <button
                onClick={() => handleEdit(benefit)}
                className="text-principal hover:text-principal/80 text-sm font-medium"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(benefit.id)}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {benefits.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🎁</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum benefício cadastrado</h3>
          <p className="text-gray-500">Clique em "Novo Benefício" para começar.</p>
        </div>
      )}
    </AdminLayout>
  );
};

export default Benefits;