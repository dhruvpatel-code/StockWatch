import CardPortfolio from '../CardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
}

const ListPortfolio = ({portfolioValues}: Props) => {
  return (
    <>
        <h1>My Portfolio</h1>
        <ul>
            {portfolioValues.map((portfolioValue) => {
            return <CardPortfolio portfolioValues={portfolioValue}/>
            })}
        </ul>
    </>
  )
}

export default ListPortfolio