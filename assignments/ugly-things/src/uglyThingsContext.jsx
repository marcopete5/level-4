import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const UglyThingsContext = createContext();

// Corrected API URL
const API_URL = 'https://api.vschool.io/test/thing';

function UglyThingsContextProvider(props) {
    const [uglyThings, setUglyThings] = useState([]);

    // Function to fetch all ugly things
    const getUglyThings = () => {
        axios
            .get(API_URL)
            .then((res) => setUglyThings(res.data))
            .catch((err) => console.error(err));
    };

    // Get all ugly things on component mount
    useEffect(() => {
        getUglyThings();
    }, []);

    // Add a new ugly thing
    const addUglyThing = (newThing) => {
        axios
            .post(API_URL, newThing)
            .then((res) => {
                setUglyThings((prevThings) => [...prevThings, res.data]);
            })
            .catch((err) => console.error(err));
    };

    // Delete an ugly thing
    const deleteUglyThing = (id) => {
        axios
            .delete(`${API_URL}/${id}`)
            .then(() => {
                setUglyThings((prevThings) =>
                    prevThings.filter((thing) => thing._id !== id)
                );
            })
            .catch((err) => console.error(err));
    };

    // Edit an ugly thing
    const editUglyThing = (id, updatedThing) => {
        axios
            .put(`${API_URL}/${id}`, updatedThing)
            .then((res) => {
                setUglyThings((prevThings) =>
                    prevThings.map((thing) =>
                        thing._id === id ? res.data : thing
                    )
                );
            })
            .catch((err) => console.error(err));
    };

    return (
        <UglyThingsContext.Provider
            value={{
                uglyThings,
                addUglyThing,
                deleteUglyThing,
                editUglyThing
            }}>
            {props.children}
        </UglyThingsContext.Provider>
    );
}

export { UglyThingsContextProvider, UglyThingsContext };
