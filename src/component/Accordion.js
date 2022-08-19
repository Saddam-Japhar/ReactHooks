import React,{ useState } from "react";

const Accordion = ({lists}) => {
 const [activeIndex, setActiveIndex] = useState(null)
 const handleClick = (index)=> {
     setActiveIndex(index)
 }
 const renderList = lists.map((list, index)=>{
     console.log("activeIndex",activeIndex);
     console.log("index",index)
     const show = index===activeIndex? 'show':'collapse'
     console.log("printing show", show)
     return (
        <React.Fragment>
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button onClick={()=>handleClick(index)} className="btn btn-link" data-toggle={show} data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {list.title}
              </button>
            </h5>
          </div>
      
          <div id="collapseOne" className={show} aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              {list.description}
            </div>
          </div>
        </div>
      </React.Fragment>
     )
 })   
  return (
    <>
      {renderList}
    </>
  );
};

export default Accordion;
