import React, { useEffect, useState } from 'react';

function Card({ userDeatils }) {

    return (
        <div className="card">
            <h2>{userDeatils.name}</h2>
            <p>{userDeatils.description}</p>
            <p>Hobbies: {userDeatils.hobbies.join(', ')}</p>
            <p><a href={userDeatils.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href={userDeatils.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
    );
}

export default Card;
