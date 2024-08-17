import './ProfileCard.css'; 
import profileImage from '../../assets/images/avatar-jessica.jpeg';

    function ProfileCard() {
    
    return (
        <div className="profile-card">
            <img src={profileImage} alt="Profile Image" className="profile-image" />
            <h1>Jessica Randall</h1>
            <h2>London, United Kingdom</h2>
            <p>&quot;Front-end developer and avid reader.&quot;</p>
            <button className="button">GitHub</button>
            <button className="button">Frontend Mentor</button>
            <button className="button">LinkedIn</button>
            <button className="button">Twitter</button>
            <button className="button">Instagram</button>
        </div>
    );
}

export default ProfileCard;
