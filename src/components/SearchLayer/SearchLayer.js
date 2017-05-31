import React from 'react';

const SearchLayer = ({onKeyUpSearch}) => {
    let input;
    return (
        <form action="#" className="search-layer">
            <label htmlFor="searchLayer" className="search-layer--title">
                Ou pesquise por aqui:
                <span className="search-layer--icon fa fa-search"></span>
                <input
                    type="text"
                    id="searchLayer"
                    ref={node => {input = node;}}
                    onKeyUp={() => {
                        onKeyUpSearch(input.value)
                    }}
                    className="search-layer--input"
                    placeholder="Ex.: IDEB, Escola, Batalhões da PMERJ"/>
            </label>
        </form>
    );
};

export default SearchLayer;
