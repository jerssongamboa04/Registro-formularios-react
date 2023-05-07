import './App.css';

import UseForm from "./Components/UseForm/UserForm.jsx";
import SearchUser from "./Components/SearchUser/SearchUser.jsx";
import UserList from "./Components/UserList/UserList.jsx";
import UserCard from "./Components/UserCard/UserCard.jsx";


function App() {
  return (
    <div className="App">
     <UseForm/>
     <SearchUser/>
     <UserCard/>
    </div>
  );
}

export default App;
