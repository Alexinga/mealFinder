import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import FeaturesPage from "./Pages/FeaturesPage";
import MainPage from "./Pages/MainPage";
import PricingPage from "./Pages/PricingPage";
import LoginPage from "./Pages/LoginPage";
import AppMainPage from "./Pages/AppMainPage";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { MealProvider } from "./context/MealContext";
import MealDetail from "./ui/MealDetail";
import SearchContent from "./ui/SearchContent";
import DefaultApp from "./ui/DefaultApp";
import Save from "./ui/Save";

function App() {
  return (
    <AuthProvider>
      <MealProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainPage />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/features" element={<FeaturesPage />}></Route>
              <Route path="/pricing" element={<PricingPage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
            </Route>

            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppMainPage />
                </ProtectedRoute>
              }
            >
              <Route index element={<DefaultApp />}></Route>
              <Route path="search" element={<SearchContent />}></Route>
              <Route path="details/:mealId" element={<MealDetail />}></Route>
              <Route path="save" element={<Save />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MealProvider>
    </AuthProvider>
  );
}

export default App;
