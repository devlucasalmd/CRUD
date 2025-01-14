import React, { useState } from "react";
import "./FormCreate.css";

function CreateItem() {
  const [formData, setFormData] = useState({
    nome: "",
    valor: "",
    descricao: "",
    categoria: "",
    data: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="create-form">
      <h1>Adicionar Item</h1>
      <InputField
        type="text"
        name="nome"
        placeholder="Nome"
        icon="user"
        value={formData.nome}
        onChange={handleChange}
      />
      <div className="input-group">
        <span className="currency-prefix">R$</span>
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={formData.valor}
          onChange={handleChange}
          className="input-field with-currency"
        />
      </div>
      <InputField
        type="text"
        name="descricao"
        placeholder="Descrição"
        icon="info-circle"
        value={formData.descricao}
        onChange={handleChange}
      />
      <InputField
        type="text"
        name="categoria"
        placeholder="Categoria"
        icon="tag"
        value={formData.categoria}
        onChange={handleChange}
      />
      <InputField
        type="date"
        name="data"
        placeholder="Data"
        icon="calendar"
        value={formData.data}
        onChange={handleChange}
      />
      <button type="submit" className="create-button">
        Criar
      </button>
    </form>
  );
}

function InputField({ type, name, placeholder, icon, value, onChange }) {
  return (
    <div className="input-group">
      <i className={`icon ${icon}`}></i>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}

export default CreateItem;
