import React, { useState } from 'react';
import { createEmployee } from '../services/api';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employeeData = { name, surname, department };
    try {
      await createEmployee(employeeData);
      alert('Employee created successfully');
      setName('');
      setSurname('');
      setDepartment('');
    } catch (error) {
      console.error('Error creating employee:', error);
      alert('Error creating employee');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          placeholder='First Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Surname'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Department'
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <button type='submit'>Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
