
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import RecipeContainer from './Components/RecipeContainer/RecipeContainer'
import RecipeHeading from './Components/RecipeHeading/RecipeHeading'

function App() {
  

  return (
    <div className='w-11/12 mx-auto space-y-12 mb-12'>
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading></RecipeHeading>
      <RecipeContainer></RecipeContainer>
    </div>
  )
}

export default App
