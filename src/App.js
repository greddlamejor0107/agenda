import React, { useState } from 'react';
import './App.css';

function App() {
    const [contacts, setContacts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        birthDate: '',
        address: '',
        gender: '',
        maritalStatus: '',
        mobile: '',
        phone: '',
        email: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAddContact = () => {
        if (isEditing) {
            handleUpdateContact();
        } else {
            setContacts([...contacts, formData]);
            resetForm();
        }
    };

    const handleEditContact = (index) => {
        setFormData(contacts[index]);
        setIsEditing(true);
        setEditIndex(index);
    };

    const handleUpdateContact = () => {
        const updatedContacts = contacts.map((contact, index) => 
            index === editIndex ? formData : contact
        );
        setContacts(updatedContacts);
        resetForm();
    };

    const handleDeleteContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            lastName: '',
            birthDate: '',
            address: '',
            gender: '',
            maritalStatus: '',
            mobile: '',
            phone: '',
            email: ''
        });
        setIsEditing(false);
        setEditIndex(null);
    };

    return (
        <div className="App">
            <header>
                <h1>Agenda Electrónica</h1>
            </header>
            <form className="contact-form">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Apellido" />
                <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} placeholder="Fecha de Nacimiento" />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Dirección" />
                <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Género" />
                <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} placeholder="Estado Civil" />
                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Móvil" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo Electrónico" />
                
                <button type="button" onClick={handleAddContact}>
                    {isEditing ? "Actualizar Contacto" : "Agregar Contacto"}
                </button>
                {isEditing && <button type="button" onClick={resetForm}>Cancelar</button>}
            </form>
            
            <div className="contact-list">
                <h2>Lista de Contactos</h2>
                {contacts.map((contact, index) => (
                    <div key={index} className="contact-card">
                        <p><strong>Nombre:</strong> {contact.name} {contact.lastName}</p>
                        <p><strong>Fecha de Nacimiento:</strong> {contact.birthDate}</p>
                        <p><strong>Dirección:</strong> {contact.address}</p>
                        <p><strong>Género:</strong> {contact.gender}</p>
                        <p><strong>Estado Civil:</strong> {contact.maritalStatus}</p>
                        <p><strong>Móvil:</strong> {contact.mobile}</p>
                        <p><strong>Teléfono:</strong> {contact.phone}</p>
                        <p><strong>Correo Electrónico:</strong> {contact.email}</p>
                        <button onClick={() => handleEditContact(index)}>Editar</button>
                        <button onClick={() => handleDeleteContact(index)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
