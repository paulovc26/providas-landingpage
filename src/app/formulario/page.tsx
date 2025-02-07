'use client'
import React, { useState } from 'react';

export default function Page() {
  const [number, setNumber] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumber(value);
    setIsValid(true); // Reset validity on change
  };

  const handleSubmit = () => {
    if (number !== '112233') {
      setIsValid(false);
      alert('NIS inválido');
    } else {
      setIsValid(true);
      setIsVerified(true);
      alert('NIS válido');
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      NIS: number,
      ...formData
    });
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className="container mx-auto max-w-4xl min-h-screen max-h-auto p-10">
      <h1 className="text-4xl font-bold text-center mt-8">Formulário</h1>
      <div className="mt-8 mx-auto">
        {!isVerified ? (
          <>
            <label htmlFor="nis">Digite seu número NIS</label>
            <input
              type="text"
              value={number}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Insira seu NIS"
            />
            <button
              onClick={handleSubmit}
              className="mt-4 px-4 py-2 bg-primary text-white"
            >
              Verificar
            </button>
            {!isValid && (
              <p className="text-red-500 mt-2">
                Por favor, insira um NIS válido.
              </p>
            )}
          </>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Idade
              </label>
              <input
                type="number"
                id="age"
                value={formData.age}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                placeholder="Digite sua idade"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Endereço
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded p-2"
                placeholder="Digite seu endereço"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-primary text-white"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}