import React, { useEffect, useState } from 'react'
import './sortingvisulizer.css';
import { getMergeSort,getbubblesort ,getQuickSort} from '../Sortingalgo/sortingalgo.js';
const numarraybar=55;
const primarycolor='turquoise';
const secondrycolor='red';
  
const randomIntFromInterval=(min, max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
};
const Sortingvisulizer = () => {
  const [speed, setSpeed]=useState(1);
  const [width, setWidth]=useState(2);

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);

};

const handleWidthChange = (event) => {
    setWidth(event.target.value);
};

    const [array, setArray]=useState([]);
    useEffect(()=>{
        resetArray();
    },[])
 
    const resetArray=()=>{
        const array=[];
        for(let i=0;i<numarraybar;i++){
            array.push(randomIntFromInterval(5,500));
        }
      
        setArray(array);
    }

    const handlemergeSort=()=>{
       
          const animations=getMergeSort(array);
          for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
             const isColorChange=i%3!==2;
             if(isColorChange){
                const [barOne, barTwo] = animations[i];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const color=i%3===0?secondrycolor:primarycolor;
                setTimeout(()=>{
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                }, i*speed);
            }else {
                setTimeout(()=>{
                    const [barone, newheight]=animations[i];
                    const barOneStyle=arrayBars[barone].style;
                    barOneStyle.height=`${newheight}px`;
                },i*speed);
            }
              
        }
    }
    const handlebubbleSort=()=>{
        const animations=getbubblesort(array);
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 < 2;
            if(isColorChange){
                const [barOne, barTwo] = animations[i];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                const color=i%4===0?secondrycolor:primarycolor;
                setTimeout(()=>{
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                }, i*speed);
            }else{
                setTimeout(()=>{
                    const [barone, newheight]=animations[i];
                    const barOneStyle=arrayBars[barone].style;
                    barOneStyle.height=`${newheight}px`;
                },i*speed);
            }
        }
    }
    const handlequickSort = () => {
        const animations = getQuickSort(array);
        const arrayBars = document.getElementsByClassName('array-bar');
    
        for (let i = 0; i < animations.length; i++) {
            const [action, barOneIdx, barTwoOrHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
    
            if (action === "compare" || action === "revert") {
                const barTwoIdx = barTwoOrHeight;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = action === "compare" ? secondrycolor:primarycolor;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * speed);
            } else if (action === "swap") {
                setTimeout(() => {
                    barOneStyle.height = `${barTwoOrHeight}px`;
                }, i * speed);
            }
        }
    }
    

  return (
    <div className='container'>
        <div className='bar'>

     {array?.map((val, id)=>(
         <div className='array-bar' key={id} style={{height:`${val}px`, width:`${width}px`}}>
                 
                    </div>
     ))
    }
     </div>
     <div className='types'>
     <button className='newarray' onClick={resetArray}>Generate New Array</button>
     <button onClick={handlemergeSort}>Merge Sort</button>
     <button onClick={handlequickSort}>Quick Sort</button>
     <button onClick={handlebubbleSort}>Bubble Sort</button>
     <button onClick={resetArray}>Heap Sort</button>
     <div className='variable'>
                    <div>
                <label htmlFor='speed'>Delay: {speed}</label>
                <input
                    type='range'
                    id='speed'
                    min={1}
                    max={50}
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
    
                    </div>
    </div>




  )
}

export default Sortingvisulizer
