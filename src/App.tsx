import ResponsiveAppBar from "./components/AppBar/appBar.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.page";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar />
            <Router>
                <Routes>
                    <Route path="/" Component={LandingPage} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
