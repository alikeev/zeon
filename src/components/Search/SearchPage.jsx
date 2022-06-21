import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = ({ }) => {
    const navigate = useNavigate();
    const [value, setValue] = useState();

    const search = (e) => {
        if (value) {
            navigate(`/result/${value}`);
        }
    };

    return (
        <div className="search">
            <form onSubmit={search} className="searchInputs">
                <input
                    onChange={(e) => setValue(e.target.value)}
                    className="inp"
                    type="text"
                    placeholder="поиск"
                />
                <div className="searchIcon">
                    {" "}
                    <SearchIcon />
                </div>
            </form>
            <div className="dataResult"></div>
        </div>
    );
};

export default SearchBar;