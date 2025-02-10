import { useState, createContext, useContext } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [city, setCity] = useState("Mumbai"); // ✅ State with setter function

  return (
    <HeaderContext.Provider value={{ city, setCity }}> {/* ✅ Provide both */}
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContext;