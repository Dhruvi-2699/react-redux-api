import { ButtonComponent } from "./components/ButtonComponent";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto w-1/2">
        <h1 className="text-center text-2xl py-2">User List</h1>
        <ButtonComponent btnText={"Add User"} />
      </div>
    </>
  );
}

export default App;
