import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [Term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    console.log("printing", result);
    const makeApiReqest = async () => {
      const searchResult = await axios("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: Term,
        },
      });
      setResult(searchResult.data.query.search);
    };

    const timeId = setTimeout(() => {
      if (Term) {
        makeApiReqest();
      }
    }, 500);
    console.log("printing timeId", timeId);
    return () => {
      clearTimeout(timeId);
    };
  }, [Term]);

  const changeHandler = (event) => {
    setTerm(event.target.value);
  };

  const renderItem = result.map((res, index) => {
    return (
      <React.Fragment>
        <div class="card" key={res.pageid}>
          <div class="card-body">
            <h5 class="card-title">{res.title}</h5>
            <p class="card-text">{res.snippet}</p>
            <a
              href={`https://en.wikipedia.org?curid=${res.pageid}`}
              class="btn btn-primary"
            >
              Read more on Wikipedia
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  });

  console.log("printing in console");
  return (
    <React.Fragment>
      <input value={Term} onChange={changeHandler} placeholder="Search Here" />
      {renderItem}
    </React.Fragment>
  );
};

export default Search;
