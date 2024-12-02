import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ViewEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/employees/${id}`)
            .then((response) => setEmployee(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className="container mt-4">
            <h2>View Employee</h2>
            <p><strong>First Name:</strong> {employee.firstName}</p>
            <p><strong>Last Name:</strong> {employee.lastName}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
        </div>
    );
};

export default ViewEmployee;
