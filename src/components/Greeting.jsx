import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div> 
      <h3>{greeting}! Thank you for visiting!</h3>
      <button className='rounded-full bg-violet-900 text-white py-2 px-4 mt-2' onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}