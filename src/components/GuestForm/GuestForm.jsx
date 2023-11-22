import { useState } from 'react';
import axios from 'axios';

// Pass in getGuest in the function
function GuestForm({getGuests}) {
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGuestName) {
        addGuest();
    }
    else {
      alert('The new guest needs a name!');
    }
    // Tried taking away this function and putting it all in the handleSubmit
    const addGuest = () => {
        axios.post('/guests', { name: newGuestName, kidsMeal: newGuestMeal })
          .then(response => {
            console.log(response);
            // clear inputs
            setNewGuestName('');
            setNewGuestMeal(false);
            
            getGuests();
          })
          .catch(err => {
            alert('Error Adding Guest');
            console.log(err);
          })
      };

  }
  console.log(newGuestMeal)
  return (
    <>
      <h2>Add a new guest</h2>
    <form onSubmit={handleSubmit}>
        <label>
          Name
        </label>
        <input
          type="text"
           placeholder="Name"
          value={newGuestName}
          onChange={(evt) => setNewGuestName(evt.target.value)} />
                
        Would this guest like a kid's meal? 
              <label>
                <input
                  type="radio"
                  value={true}
                  checked={newGuestMeal === 'true'}
                  name="kidsMeal"
                  onChange={(evt) => setNewGuestMeal(evt.target.value)}
                />
                 Yes, this guest would like a Kid's Meal
              </label>
              <label>
                <input
                  type="radio"
                  value={false}
                  checked={newGuestMeal === 'false'}
                  name="kidsMeal"
                  onChange={(evt) => setNewGuestMeal(evt.target.value)}
                />
                No, this guest would not like a Kid's Meal
              </label>
          <button type="submit">Add Guest</button>
      </form>   
     </>

   
  )
   
   
}


export default GuestForm