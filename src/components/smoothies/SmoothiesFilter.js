
export const SmoothiesFilter = ({ handleSearch, onChangeSort, sortBy }) => {

    const handleSortChange = (e) => {
        onChangeSort(e.target.value)
    }

    const handleFilterChange = (e) => {
        handleSearch(e.target.value)
    }

    return (
        <div>
            <label>
                <strong>Sort By:</strong>
                <input type="radio" value="Alphabetically" name="sort" checked={sortBy === "Alphabetically"} onChange={handleSortChange} />
                Alphabetically
            </label>
            <label>
                <input type="radio" value="Unorder" name="sort" checked={sortBy !== "Alphabetically"} onChange={handleSortChange} />
                Clear Sort
                </label>
            <input type="text" placeholder="Type a smoothie name..."
                onChange={handleFilterChange} />

        </div>
    )
}


