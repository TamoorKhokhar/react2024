import "./App.css";
import Home from "./components/home";
import List from "./components/List";
import Footer from "./components/footer";
import Header from "./components/header";
import Students from "./components/student";
import UserInfo from "./components/userInfo";
import Button from "./components/button";
import UseStateMyComponent from "./components/useStateMyComponent";
import OnChangeComponent from "./components/onChangeComponent";
import ColorPicker from "./components/colorPicker";
import UpdateStateFunction from "./components/updateStateFunction";
import UpdateStateOfAnArray from "./components/updateStateOfAnArray";

function App() {
  const Fruits = [
    { name: "apple", calories: 22 },
    { name: "banana", calories: 55 },
    { name: "mango", calories: 100 },
    { name: "strawberry", calories: 110 },
    { name: "pineapple", calories: 120 },
  ];
  const cricketTeam = [
    { name: "Ali", calories: 22 },
    { name: "tamooer", calories: 55 },
    { name: "ali ss", calories: 100 },
    { name: "hammad", calories: 110 },
    { name: "shaoor", calories: 120 },
  ];
  return (
    <>
      <div>
        <Header />

        <Home
          background="powderblue"
          question="what is component in React?"
          answer="Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components."
        />

        <Students name="Tamoor" age="24" isStudent={false} background="gray" />
        <Students
          name="Ali"
          age="23"
          isStudent={true}
          background="powderBlue"
        />

        <UserInfo isLoggedIn={true} userName="Tamoor" />

        <List background="gray" items={Fruits} category="Fruits" />
        <List background="gray" items={cricketTeam} category="Cricket" />

        <Button />

        <UseStateMyComponent />

        <OnChangeComponent />

        <ColorPicker />

        <UpdateStateFunction />

        <UpdateStateOfAnArray />

        <Footer />
      </div>
    </>
  );
}

export default App;
