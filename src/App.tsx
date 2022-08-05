import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './App.css';
import UseFetch from './Components/UseFetch';
function App() {
  const data = UseFetch<GithubResponse>('https://api.github.com/users/nas5w');
  return data ? 
  (<> Name:{data.login} <br/>
  url:{data.url}<br/>
  followers :{data.followers}<br/>
  Bio:{data.bio}<br/>
  Location :{data.location}
  </> ): (<>Loading...</>);
}

export default App;

