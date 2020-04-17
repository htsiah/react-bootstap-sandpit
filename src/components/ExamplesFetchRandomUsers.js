import React, { useState, useEffect } from 'react';

/**
 * React fetch json data example.
 * Learn how to how to fetch a json data and display to the screen.
 */

const ExamplesFetchRandomUsers = () => {
  const [loadingFlag, setLoadingFlag] = useState(true);
  const [persons, setPersons] = useState([]);

  async function fetchData() {
    const url = 'https://api.randomuser.me/?results=5';
    const response = await fetch(url);
    const data = await response.json();
    setPersons(data.results);
    setLoadingFlag(false);
  }

  // Data fetching is done after DOM is ready.
  useEffect(() => {
    fetchData();
  }, []);

  if (loadingFlag) {
    return (
      <>
        <h1>React fetch json data example</h1>
        <p>Learn how to how to fetch a json data and display to the screen.</p>
        <p>This example will random fetch five users and display the name and photo.</p>
        Loading...
      </>
    );
  }

  if (!persons.length) {
    return (
      <>
        <h1>React fetch json data example</h1>
        <p>Learn how to how to fetch a json data and display to the screen.</p>
        <p>This example will random fetch five users and display the name and photo.</p>
        <hr></hr>
        <div>Didn't get user</div>
      </>
    );
  }
  return (
    <>
      <h1>React fetch json data example</h1>
      <p>Learn how to how to fetch a json data and display to the screen.</p>
      <p>This example will random fetch five users and display the name and photo.</p>
      <hr></hr>
      {persons.map((person) => (
        // React required a unique key on each record
        <div key={person.login.uuid}>
          {person.name.title + ' ' + person.name.first + ' ' + person.name.last + ' '}
          <img src={person.picture.large} alt={person.name.first + ' ' + person.name.last}></img>
        </div>
      ))}
    </>
  );
};

export default ExamplesFetchRandomUsers;
