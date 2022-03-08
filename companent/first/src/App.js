import "./App.css";
// import Header from "./components/Header";
import User from "./components/User";
const friends = [
  {
    id: 1,
    name: "at",
  },
  {
    id: 2,
    name: "kafasi",
  },
  {
    id: 3,
    name: "ibo",
  },
];
function App() {
  return (
    <div>
      {/* <h1>Hello React i came </h1>
      <Header /> */}
      <User
        name="Ali"
        surname="Veli"
        age="18"
        isLoggedIn={true}
        friends={friends}
        location={{ title: "izmir", zip: 35320 }}
      />
    </div>
  );
}
User.defaultProps = {
  isLoggedIn: false,
};
export default App;
