//@ts-nocheck
import BasicCard from "./Components/Form";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from "./Components/Quiz";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { questions } from "./Data";
export const UserContext = createContext();
export const question = createContext();
function App() {
    const ques = useState(questions);
    const value = useState({
      one:false,
      two:false,
      three:false,
      four:false,
      five:false,
    })
    
  return (
    <div className="App">
      <question.Provider value={ques}>
        <UserContext.Provider value={value}>
       <Router>
    <Routes>
      <Route exact path="/" element={<BasicCard/>} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  </Router>
  </UserContext.Provider>
   </question.Provider>
        
    </div>
  );
}

export default App;
