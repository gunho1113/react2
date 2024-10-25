import axios from "axios";
import { useEffect, useState } from "react";

export default async function RestApi() {
  const [users, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios("http://localhost:3001/test");
        setUser(rse.data);
      } catch (error) {
        console.error("Error fetching");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <h1>loading...</h1>;
  if (!users) return <h1>No User found</h1>;
  return (
    <ul>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.id}</h1>
          <h3>{user.name}</h3>
          <h3>{user.title}</h3>
          <h3>{user.body}</h3>
        </div>
      ))}
    </ul>
  );
}
