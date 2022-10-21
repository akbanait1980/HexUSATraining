import SearchPost from "./components/PostList";
//import PostList from "./components/PostList";
import SearchUsers from "./components/UserList";
//import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          {/* <PostList /> */}
          <SearchPost />
        </div>
        <div className="col-lg-6">
          {/* <UserList /> */}
          <SearchUsers />
        </div>
      </div>
    </div>
  );
}
export default App;
