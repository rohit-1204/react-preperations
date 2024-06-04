import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function DataDisplay() { // Clear and descriptive component name

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => { // Use async/await for cleaner syntax
      try {
        const response = await fetch('https://dummyjson.com/todos');
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData.todos);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures data is fetched only once

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Todos</th> {/* Renamed header for better clarity */}
          <th>User Id</th>
        </tr>
      </thead>
      <tbody>
        {data ?

          data.map((item) => (
            <tr key={item.id}> {/* Add key prop for performance optimization */}
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.todo}d</td> {/* Assuming 'title' is the actual property for task name */}
            </tr>
          ))
          :
          <p>No</p>
        }
      </tbody>
    </Table>
  );
}

export default DataDisplay;
