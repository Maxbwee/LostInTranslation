const ProfileHeader = ({username}) => {
    return(
        <header className="ProfileHeader">
            <h4>Welcome back {username} </h4>
        <p>
        Here you may see your recent translations. <br/> 
        You may logout and select a different profile or clear your recent translations
        </p>
        </header>
    )
}
export default ProfileHeader