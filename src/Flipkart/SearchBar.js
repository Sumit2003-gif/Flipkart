import { useState } from "react";
// import React {useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { setSearchTerm } from "./Flipkart Redux/CreateSearch";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = () => {
    const [input,setInput] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSearch = () =>{
        dispatch(setSearchTerm(input))
        navigate('/search')
    }
    return(
<form onSubmit={handleSearch} className='flex items-center bg-white rounded px-4 py-1 w-full'>
      <input
        type='text'
        placeholder='Search for products, brands and more'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='outline-none text-black w-full'
      />
      <button type="submit">
        <Search size={20} color="blue" />
      </button>
    </form>
  )
    
}
export default SearchBar