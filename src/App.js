import { Landing } from "./Page/Landing/Landing";
import { Term } from "./Page/Term/Term";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { Form } from "./Page/Form/Form";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/term" element={<Term />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
