import './App.css';
import { Routes, Route } from "react-router-dom";
import AddExpenses from './AddExpenses';
import ListExpenses from './ListExpenses';
import SideBar from './Components/Sidebar';
import SavingAmount from './SavingAmount';

function App() {
  return (
    <>
    <SideBar/>
    <Routes>
    <Route path="/" element={<AddExpenses />} />
    <Route path="/expenselist" element={<ListExpenses />} />
    <Route path="/savingamount" element={<SavingAmount />} />
  </Routes>
  </>
  );
}

export default App;
