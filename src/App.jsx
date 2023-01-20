import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

export default function App() {
  
return(
<div className="App">
      <img className="userimg" />
  <Msg name="ram" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlB-sGCIUXz1afcO-pxiIFtmlxqjZeyuiptI0kUIY5JKAYIiFkOIsZbsmpKiboagq4Tw&usqp=CAU" />
  <Msg name = "gopi" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iYeIw6rwey8irmgZbJTccbejGVx6Ni5iMQZA7lqi-LWOW6jHW6IIf_OArK8mM3XT-fU&usqp=CAU" />
  <Msg name = "ravi" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pGIDzLdH4F2poV7sMa_yT_CPBApoWjKe1g&usqp=CAU" />
</div>
);

function Msg({name,pic}){
  // let name=props.name;
  return(
    <div>
      <img className="userimg" src={pic} alt={name}/>
  <h1> HELLO <span className='name'>{name}</span>😊😊😍</h1>

    </div>
  );
}
}
  



