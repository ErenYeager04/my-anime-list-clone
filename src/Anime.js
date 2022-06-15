import React from "react"


function Anime(props){
  const [formData, setFormData] = React.useState(
   {}
)

function handleChange(event){
  const value = event.target
  setFormData(item => item = value)
}

  
  return(
      <div className="wrapper" >
        <div className="body">
            <span className="img--container">
                <img className="img" src={props.imageUrl}/>
            </span>
            <span className="main--container">
                <div className="first--container">
                    <h4 className="location">{props.status}</h4>
                    <a href={props.googleMapsUrl}><p>Watch on jut.su</p></a>
                </div>
                <div className="second--container">
                    <h1>{props.title}</h1>
                </div>
                <div className="third--container">
                    <h5>{props.startDate}-{props.endDate}</h5>
                </div>
                <div className="four--container">
                    <p>{props.description}</p>
                </div>
                <div className="five--container">
                  <span className="episode">
                  <div className="counter">
                    <p>Progres</p>
                    <button className="counter--minus" onClick={() => props.Minus(props.id)}>–</button>
                    <div className="counter--count">
                      <h3>{props.currently}</h3>
                    </div>
                    <button className="counter--plus" onClick={() => props.Plus(props.id)}>+</button>
                  </div>
                  </span>
                  {props.number === props.currently &&
                  <span className="rating">
                    <label htmlFor="favColor">Rate the anime</label>
                    <br />
                    <select 
                      id="favColor" 
                      value={formData.rating}
                      onChange={handleChange}
                      name="rating"
                      >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </span>}
                </div>
            </span>
        </div>
      </div> 
  )
}

export default Anime;