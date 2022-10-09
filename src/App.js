import React, { useState } from 'react';
import './App.css';

function App() {
	const [open, setOpen] = React.useState(false);



  return (
		<>
			<div className='App'>
				<button className='open-modal-btn'>Open window</button>

			</div>
		</>
  );
}

export default App;
