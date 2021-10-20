import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => {
          people.length !== 0 ? setPeople([]) : window.location.reload()
        }}>
          {people.length !== 0 ? "clear all" : "refresh"}
        </button>
      </section>
    </main>
  );
}

export default App;
