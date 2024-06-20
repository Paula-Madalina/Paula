import React, { useState } from 'react';

function UserForm() {
    // Inițializează starea pentru nume și prenume
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div>
            <form>
                <label>
                    First Name:
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                    />
                </label>
            </form>
            <p>Hello, {firstName} {lastName}!</p>
        </div>
    );
}

export default UserForm;
