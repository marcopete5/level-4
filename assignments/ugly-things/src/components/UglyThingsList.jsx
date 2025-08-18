import React, { useContext } from 'react';
import { UglyThingsContext } from '../uglyThingsContext';
import UglyThing from './UglyThing';

export default function UglyThingsList() {
    const { uglyThings } = useContext(UglyThingsContext);

    return (
        <div className="ugly-things-list">
            {uglyThings.map((thing) => (
                <UglyThing key={thing._id} thing={thing} />
            ))}
        </div>
    );
}
