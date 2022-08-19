import React, {useState} from 'react'
import TranslateDropdown from './TranslateDropdown'
import Convert from './Convert'

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options =[
    {
    label:'Africans',
    value: 'af'
   },
   {
    label:'Arabics',
    value: 'ar'
   },
   {
    label:'Hindi',
    value: 'hi'
   },
]

const Translate =()=>{
    const [language, setLanguage]= useState(options[0])
    const [text,setText] = useState('')
    return(
      <>
      
      <input className="mb-2 ml-3 mt-2" value={text} onChange = {(e)=>setText(e.target.value)} />
      <TranslateDropdown options={options} language={language} onSelectChange={setLanguage}/>
      <hr/>
      <Convert text={text} language={language}/>
      </>
    )
}

export default Translate