import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Form.css";
import { BrowserRouter as Router } from "react-router-dom";

function Form() {
    const [user, setUser] = useState({ name:"", size: "", sauce: "", topping1: "", topping1: "", topping2: "", 
        topping3: "", topping4: "", topping5: "", topping6: "", topping7: "", special:""});
  
    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        return user;
    };
  
    return (
        <div className="pizza-form">
            <header>
                <h1>Bloomtech</h1>
                <div id="spacer1"></div>
                <a href="/Home">Home</a>
                <a href="/">Help</a>
            </header>
            <form id="pizza-form" onSubmit={event => handleSubmit(event)}>
                <h2>Build Your Own Pizza</h2>
                
                <label id="lab" align="left">Enter Name for Order</label>
                <h4 align="left">(Name must be at least 2 characters)</h4>
                <input id="name-input"type="text" name="name" onChange={event => handleChange(event)} /><br/>

                <label id="lab" align="left">Pizza Size</label>
                <h4 align="left">Required</h4>
                <select id="size-dropdown" name="size"  onChange={event => handleChange(event)}>
                    <option value="Small">Small-Default</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
            
                <label id="lab" align="left">
                    Choice of Sauce
                </label>
                <h4 align="left">Required</h4>
                <select id="sauce" name="sauce"  onChange={event => handleChange(event)}>
                    <option value="Original Red">Original Red-Default</option>
                    <option value="Garlic Ranch">Garlic Ranch</option>
                    <option value="BBQ Sauce">BBQ Sauce</option>
                    <option value="Spinach Alfredo">Spinach Alfredo</option>
                </select>

                <label id="lab" align="left">
                    Choice of Topping
                </label>
                <h4 align="left">(Pick up to 7 toppings)</h4>
                <div id="topping" align="left">
                    <div>
                        <input type="checkbox" id="topping1" name="topping1" value="Pepperoni" onChange={event => handleChange(event)}/>
                        <label for="topping1"> Pepperoni</label><br/>
                    </div>
                    <div>
                        <input type="checkbox" id="topping2" name="topping2" value="Sausage" onChange={event => handleChange(event)}/>
                        <label for="topping2"> Sausage</label><br/>
                    </div>
                    <div>
                        <input type="checkbox" id="topping3" name="topping3" value="Canadian Bacon" onChange={event => handleChange(event)}/>
                        <label for="topping3"> Canadian Bacon</label>
                    </div>
                    <div>
                        <input type="checkbox" id="topping4" name="topping4" value="Spicy Italian Sausage" onChange={event => handleChange(event)}/>
                        <label for="topping4"> Spicy Italian Sausage</label>
                    </div>
                    <div>
                        <input type="checkbox" id="topping5" name="topping5" value="Grilled Chicken" onChange={event => handleChange(event)}/>
                        <label for="topping5"> Grilled Chicken</label>
                    </div>
                    <div>
                        <input type="checkbox" id="topping6" name="topping6" value="Onion" onChange={event => handleChange(event)}/>
                        <label for="topping6"> Onion</label>
                    </div>
                    <div>
                        <input type="checkbox" id="topping7" name="topping7" value="Green Pepper" onChange={event => handleChange(event)}/>
                        <label for="topping7"> Green Pepper</label>
                    </div>
                </div>
                
                <label id="lab" align="left">Special Instructions</label>
                <h4 align="left">Enter any special instructions</h4>
                <input id="special-text"type="text" name="special" onChange={event => handleChange(event)} /><br/>
                <Router>
                    <Link to="/Confirmation" id="order-button"><button id="order-button">Add To Order</button></Link>
                </Router>
            </form>
        </div>
    );
  }
  
  export default Form;