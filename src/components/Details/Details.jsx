import { useState } from "react";
import InputBox from "../InputBox";
import Button from "../Button";

function Details({SetUserDeatils}) {
    const [details, setDetails] = useState({
        name: "",
        description: "",
        hobbies: "",
        linkedinUrl: "",
        githubUrl: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3005/api/v1/cards/createCard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)
            });
            const data = await response.json();
            if (response.ok) {
                SetUserDeatils(data.data); // Store the returned user ID in the parent component's state
            } else {
                console.error('Failed to create card:', data.message);
            }
        } catch (error) {
            console.error('Error during card creation:', error);
        }
    };

    return (
        <div className="card">
            <h2 className="name">Enter Your Name</h2>
            <InputBox name="name" message="Enter Your Name" value={details.name} onChange={handleInputChange} />

            <h2 className="description">Give a brief Description</h2>
            <InputBox name="description" message="Description" value={details.description} onChange={handleInputChange} />

            <h4 className="description">Enter your Hobbies</h4>
            <InputBox name="hobbies" message="Hobbies (separated by commas)" value={details.hobbies} onChange={handleInputChange} />

            <div className="socialLinks">
                <InputBox name="linkedinUrl" message="Your LinkedIn URL" value={details.linkedinUrl} onChange={handleInputChange} />
                <InputBox name="githubUrl" message="Your GitHub URL" value={details.githubUrl} onChange={handleInputChange} />
            </div>

            <Button message="Submit" onClick={handleSubmit} />
        </div>
    );
}
export default Details;