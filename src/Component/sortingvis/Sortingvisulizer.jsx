import React, { useEffect, useState } from 'react'
import './sortingvisulizer.css';
import { getMergeSort } from '../Sortingalgo/sortingalgo.js';
const animationspeed=1;
const numarraybar=100;
const primarycolor='turquoise';
const secondrycolor='red';

const randomIntFromInterval=(min, max)=>{
    return Math.floor(Math.random()*(max-min+1)+min);
};
const Sortingvisulizer = () => {
    const [array, setArray]=useState([]);
    useEffect(()=>{
        resetArray();
    },[])
    const resetArray=()=>{
        const array=[];
        for(let i=0;i<numarraybar;i++){
            array.push(randomIntFromInterval(5,600));
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
                }, i*animationspeed);
            }else {
                setTimeout(()=>{
                    const [barone, newheight]=animations[i];
                    const barOneStyle=arrayBars[barone].style;
                    barOneStyle.height=`${newheight}px`;
                },i*animationspeed);
            }
              
        }
    }

  return (
    <div className='container'>
     {array?.map((val, id)=>(
                <div className='array-bar' key={id} style={{height:`${val}px`}}>
                 
                    </div>
     )

     )

     }
     <button onClick={resetArray}>Generate New Array</button>
     <button onClick={handlemergeSort}>Merge Sort</button>
     <button onClick={resetArray}>Quick Sort</button>
     <button onClick={resetArray}>Bubble Sort</button>
     <button onClick={resetArray}>Heap Sort</button>
    </div>




  )
}

export default Sortingvisulizer
