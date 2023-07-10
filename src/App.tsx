import { useState } from "react";
import "./App.css";
import { Button, CommentSection } from "./components";


function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <CommentSection apiKey='asdadasd' open={open} width={500} anchor='right' onClose={() => setOpen(false)} backgroundColor='blue' />
    </div>
  );
}

export default App;
