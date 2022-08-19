import Accordion from './component/Accordion'
import Search from './component/Search'
import Dropdown from './component/Dropdown'
import Translate from './component/Translate'
import Route from './component/Route'
import Header from './component/Header'

function App() {
  const lists = [
    {
      title: 'what is React?',
      description: "React is javascript fronend library",
    },
    {
      title: 'How react works faster than traditional Javascript?',
      description: "React uses virtual DOM concept which compares the actual dom and make changes whereever necessary",
    },
    {
      title: 'What is JSX?',
      description: "JSX stands for javascript syntax extension"
    }
  ]
  const colors = ['red', 'green', 'blue'];
  // if(window.location.pathname==='/Accordion'){
  //  return <Accordion lists={lists}/>
  // } else if(window.location.pathname==='/Searh'){
  //  return <Search />
  // }else if(window.location.pathname==='/Dropdown'){
  //   return <Dropdown colors={colors}/>
  // }
  return (
    // <Accordion lists={lists}/>
    // <Search />
    // <Dropdown colors={colors}/>
    <>
    <Header />
    <Route path="/">
      <Accordion lists={lists}/>
    </Route>
    <Route path='/list'>
      <Search />
    </Route>
    <Route path='/dropdown'>
      <Dropdown colors={colors}/>
    </Route>
    <Route path='/translate'>
  <Translate />
    </Route>
    </>
    
  )
}

export default App;
