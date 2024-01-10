import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant
    },
    {
      id: 2,
      img: elephant
    },
    {
      id: 3,
      img: elephant
    },
    {
      id: 4,
      img: elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let images = imageData();
  return (
    <div className='fourimages'>{images.map((element) => {
      <img src={element.img} alt={element.id} className="eachElephant" />
    })}</div>
  )
}

export default App;
