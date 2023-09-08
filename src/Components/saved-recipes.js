import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Collapse, Modal, Form } from 'react-bootstrap';
// import './Veg.css';
// import { useAuth0 } from "@auth0/auth0-react";

const SavedRecipes = () => {
  // const { isAuthenticated } = useAuth0();
  const [foodItems, setFoodItems] = useState([]);
  const [collapseStates, setCollapseStates] = useState([]);
  const [editItem, setEditItem] = useState(null); // Item being edited
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCollapse = (index) => {
    const updatedStates = [...collapseStates];
    updatedStates[index] = !updatedStates[index];
    setCollapseStates(updatedStates);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setShowEditModal(true);
  };

  const handleDelete = async (foodName) => {
    try {
      // Send a DELETE request to your backend to delete the item by food name
      await axios.delete(`http://localhost:3001/recipes/delete/${foodName}`);
      // Update the state to remove the deleted item
      const updatedItems = foodItems.filter((item) => item.name !== foodName);
      setFoodItems(updatedItems);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEditFormSubmit = async (editedItem) => {
    try {
      // Send a PUT request to update the item on the backend
      await axios.put(`http://localhost:3001/recipes/update/${editedItem.name}`, editedItem);
      // Update the state to reflect the changes
      const updatedItems = foodItems.map((item) =>
        item.food === editedItem.food ? editedItem : item
      );
      setFoodItems(updatedItems);
      // Close the edit modal
      setShowEditModal(false);
      setEditItem(null);
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  useEffect(() => {
    const fetchNonvegItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes/get');
        const nonvegItems = response.data;
        setFoodItems(nonvegItems);
        setCollapseStates(new Array(nonvegItems.length).fill(false));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNonvegItems();
  }, []);

  return (
    <div>
      <Container className="mt-4">
        <Row>
          {foodItems.map((item, index) => (
            <Col key={index} sm={12} md={6} lg={4} className='mb-4'>
              <Container>
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Button
                      className="button btn-dark ms-auto px-4 rounded-pill"
                      size="sm" // Set the size to "sm" for smaller buttons
                     
                      onClick={() => handleCollapse(index)}
                    >
                      {collapseStates[index] ? 'Close' : 'See Recipe'}
                    </Button>
                  </Card.Body>
                  <Collapse in={collapseStates[index]}>
                    <Card.Footer>
                      {item.instructions}
                      <div className="mt-3">
                        {/* {isAuthenticated && ( */}
                          <>
                            <Button
                              className='mx-2 btn btn-dark ms-auto px-4 rounded-pill'
                              variant="success"
                              size="sm"
                              
                              onClick={() => handleEdit(item)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              
                              className="ml-2 btn btn-dark ms-auto px-4 rounded-pill"
                              onClick={() => handleDelete(item.name)}
                            >
                              Delete
                            </Button>
                          </>
                        {/* )} */}
                      </div>
                    </Card.Footer>
                  </Collapse>
                </Card>
              </Container>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>

          <Form.Group controlId="editname">
            <Form.Label>Name</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter name of food"
                value={editItem ? editItem.name : ''}
                onChange={(e) =>
                  setEditItem({ ...editItem, name: e.target.value })
                }
                required
              />
              </Form.Group>

            <Form.Group controlId="editImageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                value={editItem ? editItem.imageUrl : ''}
                onChange={(e) =>
                  setEditItem({ ...editItem, imageUrl: e.target.value })
                }
                required
              />
            </Form.Group>
           
            <Form.Group controlId="editcookingTime">
            <Form.Label>Cooking-Time</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter cooking time"
                value={editItem ? editItem.cookingTime: ''}
                onChange={(e) =>
                  setEditItem({ ...editItem, cookingTime: e.target.value })
                }
                required
              />
              </Form.Group>

            <Form.Group controlId="editRecipe">
              <Form.Label>Recipe</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter recipe"
                value={editItem ? editItem.instructions : ''}
                onChange={(e) =>
                  setEditItem({ ...editItem, recipe: e.target.value })
                }
                required
              />
            </Form.Group>
            <Button
             
              variant="primary"
              type="submit"
              className='btn btn-dark ms-auto px-4 rounded-pill'
              onClick={() => handleEditFormSubmit(editItem)}
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default SavedRecipes;
