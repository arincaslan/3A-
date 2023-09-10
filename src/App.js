import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Tools/Navbar/Navbar";
import HomePage from "./components/pages/Anasayfa/Homepage";
import RegisterForm from "./components/pages/KayıtSayfası/RegisterForm";
import UserInterface from "./components/pages/UserInterface/UserInterface";
import CreateForm from "./components/pages/UserInterface/CreateForm/CreateForm";
import ReportDetail from "./components/pages/UserInterface/ReportDetail/ReportDetail";
import MyReports from "./components/pages/UserInterface/MyReports/MyReports";
import MyProfile from "./components/pages/UserInterface/MyProfile/MyProfile";
import { UserProvider } from "./services/HOC/UserProvider";
import "@fontsource/josefin-sans";
import "@fontsource/nunito";
import "@fontsource/roboto";
import "@fontsource/open-sans";
import "@fontsource/montserrat";


// Özel bir tema oluşturun
const customTheme = extendTheme({
  colors: {
    // örneğin yeni bir renk ekleyin
    primary: {
      100: '#C4F1F9',
      // ...
      700: '#285E61',
      900: "#065666",
    },
    secondary: {
      100: '#C6F6D5',
      500: '#38A169',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    }
  },
  fonts: {
    body: `'Raleway', sans-serif`,
    body2: "Roboto, sans-serif",
    heading1: "Nunito, sans-serif",
    heading2: "Josefin Sans, sans-serif",
    heading3: "Roboto, sans-serif",
    heading4: "Montserrat, sans-serif",
    heading5: "Open Sans, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  // Diğer özelleştirmeleri buraya ekleyebilirsiniz.
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState(null);

  function handleLoginSuccess() {
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <ChakraProvider theme={customTheme}>
      <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout}/>}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <UserInterface onLogout={handleLogout} />
              ) : (
                <HomePage onLoginSuccess={handleLoginSuccess} />
              )
            }
          />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/create-report" element={<UserProvider><CreateForm onSubmit={handleFormSubmit} /></UserProvider>} />
          <Route path="/report-detail" element={<UserProvider><ReportDetail /></UserProvider>} />
          <Route path="/my-reports" element={<MyReports />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
