// Desc: Card component for displaying information
import { CompanySearch } from "../../Models/company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import "./Card.css";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: React.SyntheticEvent) => void;

}

const Card: React.FC<Props> = ({ id,searchResult,onPortfolioCreate }: Props): JSX.Element => {
  return (
    <div className="card">
      <div className="details">
        <h1>{searchResult.name}</h1>
        <h2>{searchResult.symbol}</h2>
        <p>${searchResult.currency}</p>
      </div>
      <p className="info">{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  )
}

export default Card;