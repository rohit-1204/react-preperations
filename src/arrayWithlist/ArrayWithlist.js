
import Table from 'react-bootstrap/Table';

export default function ArrayWithList(){
    const students = [
        { id: 1, name: "Alice Johnson", age: 20, grade: "A" },
        { id: 2, name: "Bob Smith", age: 21, grade: "B" },
        { id: 3, name: "Charlie Brown", age: 22, grade: "A-" },
        { id: 4, name: "David Wilson", age: 23, grade: "B+" },
        { id: 5, name: "Eve Davis", age: 20, grade: "A" },
        { id: 6, name: "Frank Miller", age: 21, grade: "B-" },
        { id: 7, name: "Grace Lee", age: 22, grade: "A+" },
        { id: 8, name: "Henry Harris", age: 23, grade: "C" },
        { id: 9, name: "Ivy Clark", age: 20, grade: "B+" },
        { id: 10, name: "Jack Lewis", age: 21, grade: "A-" }
      ];
      
      
    return(
        <div>
            <h1 style={{marginLeft:'400px'}}>Map In React</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
        <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
      {students.map((stud,key)=>
        <tr key={key}>
<td>{key+1}</td>
<td>{stud.name}</td>
<td>{stud.age}</td>
<td>{stud.grade}</td>
        </tr>
)}
           
          
        
      </tbody>
    </Table>

        </div>
    )
}