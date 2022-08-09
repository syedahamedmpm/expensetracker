import './App.css';
import { Routes, Route } from "react-router-dom";
import AddExpenses from './AddExpenses';
import ListExpenses from './ListExpenses';

function App() {
  return (
    <Routes>
    <Route path="/" element={<AddExpenses />} />
    <Route path="/expenselist" element={<ListExpenses />} />
  </Routes>
  );
}

export default App;
