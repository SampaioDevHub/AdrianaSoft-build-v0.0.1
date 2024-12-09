import { Dashboard } from "@/presentation/pages/dashbord";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="routers">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
