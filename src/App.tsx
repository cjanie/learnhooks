
import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Media } from './components/Media';

function App() {

  const name = useFormInput("Janie");
  const surname = useFormInput("Chun");
  useDocumentTitle(name.value + " " + surname.value);
  const width = useWindowWidth();
  
  return (
    <div>
      <div>
        <input {...name}/>
      </div>
      <div>
        <input {...surname}/>
      </div>
      <div>
        <p>Window width</p>
        <p>{width}</p>
      </div>
      <Media/>
    </div>
    
  );
}

export default App;

function useFormInput(initialValue: string) {

  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  
  return {
    value,
    onChange: handleChange
  };
}

function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize); // subscribe to listener
    return () => { // return function to clean up (unsubscribe to listener)
      window.removeEventListener("resize", handleResize);
    }
  });
  return width;
}

