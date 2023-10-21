import { createContext, useState } from "react";
import Background from "./components/background/Background";
import Header from "./components/header/Header";
import Images from "./components/images/Images";
import Search from "./components/search/Search";
import useAxios from "./hooks/useAxios";

// create context
export const ThemeContext = createContext(null)
export const ImageContext = createContext();

const product_per_page = 100;

function App() {
  // const[theme, setTheme] = useState("light");

  // const toggleTheme = ()=>{
  //   setTheme((curr)=> (curr === "light" ? "dark":"light"))
  // }

  const [searchValue, setSearchValue] = useState("");
  const { response, isLoading, error, fetchData} = useAxios(
    `search/photos?page=1&per_page=${product_per_page}&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchValue,
    setSearchValue,
  };

  return (
    // <ThemeContext.Provider value={{theme, toggleTheme}}>

    <ImageContext.Provider value={value}>
    {/* <div className="App" id={theme}> */}
      <Header />
      <Background>
        <Search />
      </Background>
      <Images />
      {/* </div> */}
    </ImageContext.Provider>
    // </ThemeContext.Provider>
  );
}

export default App;
