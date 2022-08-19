import React from "react"
import Translate from "./Translate"


const TranslateDropdown =({options, language, onSelectChange})=> {

    const renderItem = options.map((option, index)=>{
        return (   
        <a className="dropdown-item" key={option.value} onClick={()=>onSelectChange(option)}>{option.label}</a>
        )
      })
    return (
        <div className='ml-3'>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {language.label}
        </button>
        <div className="dropdown-menu">
            {renderItem}
          <div className="dropdown-divider"></div>
        </div>
      </div>
  </div>
    )
}

export default TranslateDropdown