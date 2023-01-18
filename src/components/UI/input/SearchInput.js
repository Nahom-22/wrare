import React, { useEffect, useState } from "react";
import Button from "../button/Button";

function SearchInput(props) {
  const [searchValue, setSearchValue] = useState('');
  const[result, setResult]=useState()
  const handleChange=(e)=>{
    setSearchValue(e.target.value)
  } 
  useEffect(()=>{
    setResult(searchValue.charAt(0).toUpperCase() + searchValue.slice(1))
  },[searchValue,setResult])
  const handleSubmit=(e)=>{
    e.preventDefault();
    props.onGetValue(result)
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
    <input
      type="search"
      onChange={handleChange}
      placeholder="search for authors, works"
    />
    <Button type="submit">Search</Button>
    </form>
  );
}

export default SearchInput;
