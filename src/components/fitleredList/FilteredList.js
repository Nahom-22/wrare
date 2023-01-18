import React from "react";
import Author from "../authors/author/Author";
import Work from "../works/work/Work";

import './filteredList.css'

function FilteredList(props) {
  return (
    <React.Fragment>
      <div className="works-sec">
        <h2>Works</h2>
        <ul className="works-list">
          {props.worksList.map((item) => (
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
      </div>
      <div className="authors-sec">
        <h2>Authors</h2>
        <ul className="works-list">
          {props.authors.map((item) => (
            <li key={item.id}>
              <Author
                id={item.id}
                username={item.username}
                firstname={item.firstname}
                lastname={item.lastname}
                DOB={item.DOB}
              />
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default FilteredList;
