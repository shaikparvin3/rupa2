


import './App.css'

function App() {
  const title1=<h3> trending movies</h3>
  const title2=<h3> recommended for you</h3>
  const poster1=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRa8IA_5JL9N2eLjGAXowPcjNXvI1t6YaTw&s" className="movie-poster"/>
  const poster2=<img src="https://stat5.bollywoodhungama.in/wp-content/uploads/2021/12/Pushpa-The-Rise-Part-1-322x423.jpeg"className="movie-poster2"/>

  return (
    <>
    <div className="parent">
      <h1>movie world</h1>
      <div className="parent1">
        {title1}
        {poster1}
        {poster1}
        {poster1}
      </div>
      <div className="parent2">
        {title2}
        {poster2}
        {poster2}
        {poster2}
      </div>
      </div>   
    </>
  );
}

export default App
