import "./styles.css";
const Content = ({ content }) => {
  if (content.category === "") return null;
  return (
    <div className="content-container">
      {content.category === "Users" ? (
        <table className="pure-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {content.data.map((value) => {
              return (
                <tr key={`user-${value.id}`}>
                  <td>{value.name}</td>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <table className="pure-table">
          <thead>
            <tr>
              <th>id</th>
              <th>userId</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {content.data.map((value) => {
              return (
                <tr key={`post-${value.id}`}>
                  <td>{value.id}</td>
                  <td>{value.userId}</td>
                  <td>{value.title}</td>
                  <td>{value.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Content;
