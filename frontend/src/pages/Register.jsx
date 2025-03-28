import React from "react";
import { useState } from "react";
import { register } from "../services/auth.service";

import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await register(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div>
          <label htmlFor="firstName">Apellido(s)</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            placeholder="Ingresa tu(s) apellido(s)"
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Ingresa tu correo"
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Ingresa contraseña"
          />
        </div>
        <button onClick={handleSubmit} type="submit" disabled={isLoading}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
