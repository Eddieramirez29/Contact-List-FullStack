import "../style-sheets/contactManager.css";


function ContactManager()
{
    return(
        <>
        <div className="management-buttons">
            <button className="main-page">Main Page</button>
            <button className="create-contact">Create Contact</button>
            <button className="contact-list">Contact List</button>
        </div>
        <div className="management-buttons">
            <button className="profile">Profile</button>
            <button className="exit">Exit</button>
        </div>
        </>
    );
}

export default ContactManager;