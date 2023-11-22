import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import GuestForm from '../GuestForm/GuestForm.jsx';
import GuestList from '../GuestList/GuestList.jsx';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.css';


function App() {
  let [guestList, setGuestList] = useState([]);
  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }

  
  return (
    <div className="App">
      <Header />

      <h2>Party Leader</h2>
       {guestList[0] && <h3>{guestList[0].name}</h3>}
      <GuestForm getGuests={getGuests} />
      <GuestList guestList={guestList} />
      <DinnerSupplies guestList={guestList} />
      <Footer />
       
    </div>
         
           
  );
}

export default App;
