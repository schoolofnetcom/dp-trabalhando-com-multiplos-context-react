import React, { useContext } from 'react';
import { AuthContext } from './AuthContextProvider';
import { ThemeContext } from './ThemeContextProvider';

function App() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, lightTheme, darkTheme, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <div className="App">
      <button style={{ background: theme.button, color: theme.color }} onClick={toggleTheme}>ToggleTheme</button>
      <button style={{ background: theme.button, color: theme.color }} onClick={toggleAuth}>ToggleAuth</button>
      Logged in: {isAuth && 'Logged in'}
    </div>
  );
}

export default App;
