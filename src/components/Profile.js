const Profile = (props) => {
    const {name} = props;
    return (
        <div className="profile">
            <h1>
                {name} kaka.
            </h1>
        </div>
    );
}

export default Profile;