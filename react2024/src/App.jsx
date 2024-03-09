import "./App.css";
import Home from "./components/Home";
import Footer from "./components/footer";
import Header from "./components/header";
import Students from "./components/student";
import UserInfo from "./components/userInfo";

function App() {
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

        <UserInfo isLoggedIn={true} userName="Tamoor" />
        <Footer />
      </div>
    </>
  );
}

export default App;
