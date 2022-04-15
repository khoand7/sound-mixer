import { SoundPlayer } from './Components/SoundPlayer';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const myRef = useRef([]);
  myRef.current = [];
  const addToRefs = (el) => {
    if (el && !myRef.current.includes(el)) {
      myRef.current.push(el);
    }
  };
  const [soundList, setSoundList] = useState([]);
  const onClickPlay1 = () => {
    myRef.current[0].play();
  }
  const onClickStop1 = () => {
    myRef.current[0].pause();
  }
  const onClickPlay2 = () => {
    myRef.current[1].play();
  }
  const onClickStop2 = () => {
    myRef.current[1].pause();
  }
  const addSound = (uri) => {
    if (!soundList.includes(uri)) {
      soundList.push(uri);
      setSoundList([...soundList]);
    }
  }
  const removeSound = (uri) => {
    if (soundList.includes(uri)) {
      let soundListUpdated = soundList.filter(item => item !== uri)
      setSoundList([...soundListUpdated]);
    }
  }
  const addSound1 = () => {
    addSound('./assets/339326__inspectorj__bird-whistling-a.wav');
  }
  const addSound2 = () => {
    addSound('./assets/339324__inspectorj__stream-water-c.wav');
  }
  const addSound3 = () => {
    
  }
  const removeSound1 = () => {
    removeSound('./assets/339326__inspectorj__bird-whistling-a.wav');
  }
  const removeSound2 = () => {
    removeSound('./assets/339324__inspectorj__stream-water-c.wav');
  }
  const removeSound3 = () => {

  }

  useEffect(() => {
    setSoundList(['./empty.wav']);
  }, []);

  return (
    <div className="App">
      {soundList.map((item, index)=>{
        return <SoundPlayer key={item} fileUri={item} innerRef={addToRefs}></SoundPlayer>
      })}
      <button onClick={onClickPlay1}>Play 1</button>
      <button onClick={onClickStop1}>Stop 1</button>
      <button onClick={onClickPlay2}>Play 2</button>
      <button onClick={onClickStop2}>Stop 2</button>
      <button onClick={addSound1}>Add 1</button>
      <button onClick={addSound2}>Add 2</button>
      {/* <button onClick={addSound3}>Add 3</button> */}
      <button onClick={removeSound1}>Remove 1</button>
      <button onClick={removeSound2}>Remove 2</button>
      {/* <button onClick={removeSound3}>Remove 3</button> */}
    </div>
  );
}

export default App;
