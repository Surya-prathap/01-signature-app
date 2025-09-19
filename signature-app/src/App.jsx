import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [savedName, setSavedName] = useState("");
  const [savedDate, setSavedDate] = useState("");

  const handleSubmit = () => {
    setSavedName(name);
    setSavedDate(date);
    setName("");
    setDate("");
  };
  const handleReset = () => {
    setSavedName("");
    setSavedDate("");
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="container">
      <h1 className="heading">SIGNATURE APP</h1>
      <h1>{savedName || "Name"}</h1>
      <h2>{savedDate ? formatDate(savedDate) : "Date"}</h2>
      <p>
        <p>
          <b>It is begginer friendly project based on useState() hook</b>
        </p>
        This is a simple react project.Enter Name and Date you want and click
        submit button then signature with that name and date is displayed.If you
        want to reset it click the reset button.
      </p>
      <input
        type="text"
        value={name}
        placeholder="Enter your name..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input type="submit" onClick={handleSubmit} />
      <input type="reset" onClick={handleReset} />
    </div>
  );
}

export default App;
