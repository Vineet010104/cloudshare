import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import { Subscript, Upload } from "lucide-react";
import Dashboard from "./pages/Dashboard.jsx";


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/upload" element={<Upload />}/>
            <Route path="/my-files" element={<MyFiles />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/transactions" element={<Transactions />} />

        </Routes>
        </BrowserRouter>
    )
}

export default App;