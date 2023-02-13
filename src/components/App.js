import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeContext } from "../context/theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <UserProvider>
        {/* {wrap components that need access to context data in the provider with} */}

        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
