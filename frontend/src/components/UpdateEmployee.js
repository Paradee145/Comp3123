import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({ firstName: '', lastName: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/employees/${id}`)
            .then((response) => setEmployee(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/employees/${id}`, employee)
            .then(() => navigate('/'))
            .catch((error) => console.error(error));
    };

    return (
        <div className="container mt-4">
            <h2>Update Employee</h2>
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
                <button type="submit" className="btn btn-primary">Update</button>{' '}
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateEmployee;
