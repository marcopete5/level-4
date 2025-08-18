import React, { useState, useContext } from 'react';
import { UglyThingsContext } from '../uglyThingsContext';

export default function UglyThing({ thing }) {
    const { deleteUglyThing, editUglyThing, addComment } =
        useContext(UglyThingsContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        title: thing.title,
        description: thing.description
    });

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = () => {
        editUglyThing(thing._id, editData);
        setIsEditing(false);
    };

    return (
        <div className="ugly-thing-item">
            {isEditing ? (
                <div className="edit-form">
                    <input
                        type="text"
                        name="title"
                        value={editData.title}
                        onChange={handleEditChange}
                    />
                    <input
                        type="text"
                        name="description"
                        value={editData.description}
                        onChange={handleEditChange}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <>
                    <h2>{thing.title}</h2>
                    <p>{thing.description}</p>
                    <img src={thing.imgUrl} alt={thing.title} />
                    <div className="buttons-container">
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => deleteUglyThing(thing._id)}>
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
