import { useState } from "react";

// responese
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'Reactjs'
  },
]

function App() {
  const [check, setCheck] = useState([]);
  const handleCheck = (id)=>{
    setCheck(prev => {
      const isChecked = check.includes(id);
      if(isChecked){
        return check.filter((item)=> item !== id)
      } else{
        return [...prev, id];
      }
    })
  }
  const handleSubmit = () => {
    console.log(check);
  }
  return (
    <div style={{ padding: 32 }}>
      {
        courses.map(course => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked = {check.includes(course.id)}
              onChange={()=>handleCheck(course.id)}
            />
            {course.name}
          </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
