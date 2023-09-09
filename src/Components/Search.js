import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Card, Button, Collapse } from 'react-bootstrap';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVeg, setIsVeg] = useState(null); // Default to null (no filter)
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchValue, vegFilter) => {
    try {
      const response = await axios.get('http://localhost:3001/recipes/search/${keyword.name}', {
        params: { keyword: searchValue, isVeg: vegFilter },
      });

      setSearchResults(response.data.map(result => ({ ...result, isCollapsed: true })));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {
    handleSearch(searchTerm, isVeg);
  }, [searchTerm, isVeg]);

  const onSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setIsVeg(selectedValue === 'true' ? true : selectedValue === 'false' ? false : null);
  };

  const toggleCollapse = (index) => {
    const updatedResults = [...searchResults];
    updatedResults[index].isCollapsed = !updatedResults[index].isCollapsed;
    setSearchResults(updatedResults);
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            {/* Search input */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter name to search"
              value={searchTerm}
              onChange={onSearchInputChange}
            />
          </div>
          <div className="col-md-2">
            {/* Filter dropdown */}
            <select
              className="form-control"
              value={isVeg === true ? 'true' : isVeg === false ? 'false' : 'null'}
              onChange={handleFilterChange}
            >
              <option value="null">All</option>
              <option value="true">Veg</option>
              <option value="false">Non-Veg</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          {searchResults.map((result, index) => (
            <Col key={result._id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={result.imageUrl} alt={result.food} />
                <Card.Body>
                  <Card.Title>{result.food}</Card.Title>
                  <Button
                    className="btn btn-warning"
                    onClick={() => toggleCollapse(index)}
                  >
                    {result.isCollapsed ? 'Show Recipe' : 'Hide Recipe'}
                  </Button>
                  <Collapse in={!result.isCollapsed}>
                    <div className="mt-2">
                      {isVeg != null && (
                        <p className={`badge ${isVeg ? 'bg-success' : 'bg-danger'}`}>
                          {isVeg ? 'Veg' : 'Non-Veg'}
                        </p>
                      )}
                      <p>{result.recipe}</p>
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
