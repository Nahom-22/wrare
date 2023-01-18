import React, { useEffect, useState } from "react";
import { worksList } from "../../assets/data/DummyData";
import SearchInput from "../UI/input/SearchInput";
import Work from "./work/Work";
import { authors } from "../../assets/data/DummyData";

import "./works.css";
import FilteredList from "../fitleredList/FilteredList";

function Works() {
  const [searchValue, setSearchValue] = useState();
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const getValue = (val) => {
    setSearchValue(val);
  };
  useEffect(() => {
    searchValue && setIsSearchEmpty(false);
  }, [searchValue, setIsSearchEmpty]);
  const filteredWorks = worksList.filter((workItem) =>
    workItem.title.includes(searchValue)
  );
  console.log(isSearchEmpty);
  const filteredAuthors = authors.filter(
    (auth) =>
      auth.firstname.includes(searchValue) ||
      auth.lastname.includes(searchValue)
  );

  return (
    <div className="works">
      <SearchInput onGetValue={getValue} />
      {!isSearchEmpty ? (
        <FilteredList authors={filteredAuthors} worksList={filteredWorks} />
      ) : (
        <ul className="works-list">
          {worksList.map((item) => (
            <li key={item.id}>
              <Work
                id={item.id}
                title={item.title}
                body={item.body}
                liked={item.liked}
                item={item}
                author={item.author}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Works;
