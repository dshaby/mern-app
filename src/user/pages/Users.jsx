import UsersList from "../components/UsersList";

const Users = (props) => {
  const USERS = [
    {
      id: "u1",
      name: "Daniel Shaby",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQEcf3YnTWxmRA/profile-displayphoto-shrink_800_800/0/1628197960316?e=1657152000&v=beta&t=HBhLA_lEy77PTWYGCGCXuJkNwXQFpuomrj_d86UYkho",
      placeCount: 3,
    },
  ];

  return (
    <div>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
