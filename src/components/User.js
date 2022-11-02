export const User = ({user}) => {
  return(
    <div>
      <div className="container">
        <div className="card" key={user.id}>

          <div className="card-image">
            <img className="profile-img" alt="ProfileImg" src={user.picture?.medium} />
          </div>

          <div className="info">
            <h3 className="username">{user.name?.title}. {user.name?.first}. {user.name?.last}</h3>
            <h4 className="email">{user.email}</h4>
            <p className="add">{user.location?.city}. {user.location?.state}</p>
            <p className="phone">{user.phone}</p>
            <p className="age">{user.dob.age}</p>
          </div>
        </div>
      </div>
    </div>
  )
}