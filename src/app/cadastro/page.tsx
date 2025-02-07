'use client'
import React, { useState, useRef, useEffect } from 'react';
import Stepper from 'bs-stepper';
import 'bs-stepper/dist/css/bs-stepper.min.css';

export default function Page() {
  const [isValid, setIsValid] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    age: '',
    address: ''
  });

  const stepperRef = useRef<Stepper | null>(null);

  useEffect(() => {
    const stepperElement = document.querySelector('#stepper1');
    if (stepperElement) {
      stepperRef.current = new Stepper(stepperElement, {
        linear: false,
        animation: true
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    setIsValid(true); // Reset validity on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = document.getElementById('email') as HTMLInputElement;
    if (!emailInput.checkValidity()) {
      setIsValid(false);
      emailInput.reportValidity();
    } else {
      setIsValid(true);
      stepperRef.current?.next();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      ...formData
    });
    alert('Formulário enviado com sucesso!');
  };

  return (
    <div className="container mx-auto max-w-4xl min-h-screen max-h-auto p-10">
      <h1 className="text-4xl font-bold text-center mt-8">Formulário</h1>
      <div id="stepper1" className="bs-stepper">
        <div className="bs-stepper-header" role="tablist">
          <div className="step" data-target="#email-part">
            <button type="button" className="step-trigger" role="tab" aria-controls="email-part" id="email-part-trigger">
              <span className="bs-stepper-circle">1</span>
              <span className="bs-stepper-label">Email</span>
            </button>
          </div>
          <div className="line"></div>
          <div className="step" data-target="#form-part">
            <button type="button" className="step-trigger" role="tab" aria-controls="form-part" id="form-part-trigger">
              <span className="bs-stepper-circle">2</span>
              <span className="bs-stepper-label">Formulário</span>
            </button>
          </div>
        </div>
        <div className="bs-stepper-content">
          <div id="email-part" className="content" role="tabpanel" aria-labelledby="email-part-trigger">
            <form onSubmit={handleSubmit}>
              <div className="mt-8 mx-auto">
                <label htmlFor="email">Digite seu email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 w-full"
                  placeholder="Insira seu email"
                  required
                />
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-primary text-white"
                >
                  Próximo
                </button>
                {!isValid && (
                  <p className="text-red-500 mt-2">
                    Por favor, insira um email válido.
                  </p>
                )}
              </div>
            </form>
          </div>
          <div id="form-part" className="content" role="tabpanel" aria-labelledby="form-part-trigger">
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
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="Digite seu nome"
                  required
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
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="Digite sua idade"
                  required
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
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="Digite seu endereço"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-primary text-white"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}