import { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './Models/company';
import { searchCompanies } from './Services/api';
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio';

function App() {

  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValue, setPortfolioValue] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValue.find((portfolioValue) => portfolioValue === e.target[0].value);
    if (exists) {
      setServerError("Company already exists in portfolio");
      return;
    }
    const updatedPortfolio = [...portfolioValue, e.target[0].value];
    setPortfolioValue(updatedPortfolio);
  }
  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
    }
    else if (result && Array.isArray(result.data)) {
      setSearchResults(result.data);
    }
  }


  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <ListPortfolio portfolioValues={portfolioValue}/>
      <CardList searchResults={searchResults} onPortfolioCreate={onPortfolioCreate}/>
      {serverError && <h1>{serverError}</h1>}
    </div>
  );
}

export default App;
