import React, { useState, useContext } from 'react';
import { UglyThingsContext } from '../uglyThingsContext';

export default function Form() {
    const { addUglyThing } = useContext(UglyThingsContext);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imgUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUglyThing(formData);
        setFormData({ title: '', description: '', imgUrl: '' }); // Clear form
    };

    return (
        <form onSubmit={handleSubmit} className="ugly-form">
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <input
                type="text"
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleChange}
                placeholder="Image URL"
                required
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Why is it ugly?"
                required
            />
            <button>Submit</button>
        </form>
    );
}
