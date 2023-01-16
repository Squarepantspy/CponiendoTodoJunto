
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="container">
        <PersonCard firstName={"Pablo"} lastName={"Gonzalez"} age={28} hairColor={"Negro"}/>
        <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
        <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
        <PersonCard firstName={"Rhaenyra"} lastName={"Targaryen"} age={35} hairColor={"Blonde"}/>
    </div>
  );
}

export default App;
