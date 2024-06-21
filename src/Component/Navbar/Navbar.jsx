
import React ,{useState} from 'react'
import './navbar.css';

const Navbar = () => {
  const [speed, setSpeed] = useState(1);
    const [width, setWidth] = useState(2);

    const handleSpeedChange = (event) => {
      setSpeed(event.target.value);
  };

  const handleWidthChange = (event) => {
      setWidth(event.target.value);
  };

  return (
    <div className='navbar'>
            <div className='wrapper'>
                <div className='logo'>Algo Visulizer</div>
                <div className='variable'>
                    <div>
                <label htmlFor='speed'>Speed: {speed}</label>
                <input
                    type='range'
                    id='speed'
                    min={1}
                    max={20}
                    value={speed}
                    onChange={handleSpeedChange}
                />
            </div>
            <div>
                <label htmlFor='width'>Width: {width}</label>
                <input
                    type='range'
                    id='width'
                    min={2}
                    max={20}
                    value={width}
                    onChange={handleWidthChange}
                />
            </div>
                    

                </div>
                <div className='types'>
                    <button className="type">
                Sorting
                    </button>
                    <button className="type">
                Graph
                    </button>
                </div>
            </div>
    </div>
  )
}

export default Navbar
