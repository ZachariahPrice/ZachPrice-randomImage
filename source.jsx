


function App(){
  const [imgUrl, setImgUrl] = React.useState(false);
  

  React.useEffect(() => {
    fetch('http://source.unsplash.com/random/800x600')
    .then(response => setImgUrl(response.url))
    
  }, [])

  

  return(
    <div className="rndmImage">
      <h1>Random Image</h1>
      {imgUrl && <img src={imgUrl} />}
      
    </div>
  );
}
  



  // ========================================
ReactDOM.render(<App />, document.getElementById("root"));