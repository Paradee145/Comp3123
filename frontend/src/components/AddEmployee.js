import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({ firstName: '', lastName: '', email: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/employees', employee)
            .then(() => navigate('/'))
            .catch((error) => console.error(error));
    };

    return (
        <div className="container mt-4">
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={employee.firstName}
                        onChange={(e) => setEmployee({ ...employee, firstName: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={employee.lastName}
                        onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={employee.email}
                        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>{' '}
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    );
};

export default AddEmployee;
