import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/employees')
            .then((response) => setEmployees(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Employees List</h2>
            <Link to="/add-employee" className="btn btn-primary mb-3">Add Employee</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Link to={`/view-employee/${employee._id}`} className="btn btn-info">View</Link>{' '}
                                <Link to={`/update-employee/${employee._id}`} className="btn btn-warning">Edit</Link>{' '}
                                <button className="btn btn-danger" onClick={() => handleDelete(employee._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    function handleDelete(id) {
        axios.delete(`http://localhost:5000/api/employees/${id}`)
            .then(() => setEmployees(employees.filter((employee) => employee._id !== id)))
            .catch((error) => console.error(error));
    }
};

export default EmployeeList;
