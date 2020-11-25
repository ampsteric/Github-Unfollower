import React , {useEffect , useState}  from 'react'
import axios from 'axios';
import blue from '../../Assets/blue.svg'
import red from '../../Assets/red.svg'
import white from '../../Assets/white.svg'
import green from '../../Assets/green.svg'
import Lgreen from '../../Assets/Lgreen.svg'
import orange from '../../Assets/orange.svg'
import pink from '../../Assets/pink.svg'
import lightblue from '../../Assets/light-blue.svg'
import './list.css'




export default function List(prop) {
const [followers , setfollowers] = useState([]);
const [following , setfollowing] = useState([]);
let imposters;


let result;
let uniqueChars
function non_followers(){
    result = following.filter(f => !followers.includes(f));
     uniqueChars = result.filter((c, index) => {
        return result.indexOf(c) === index;
    });
 }

 console.log(`https://api.github.com/users/${prop.user}/following`);

useEffect(() => {
    if(prop.user){
        setfollowers([]);
        setfollowing([]);
    axios.get(`https://api.github.com/users/${prop.user}/following`).then((res)=>{
      res.data.map(i=>{
          setfollowing(oldArray => [...oldArray, i.login]);
        //   console.log(res.data)
      });
    });

    axios.get(`https://api.github.com/users/${prop.user}/followers`).then((res)=>{
      res.data.map(i=>{
          setfollowers(oldArray => [...oldArray, i.login]);
      });
    });
    }
}, [prop.user])

function random(mn, mx) {  
    return Math.random() * (mx - mn) + mn;  
}  

function image_provider(i){
    if(i==0)
    return(
        <img src={blue} />
    )
    if(i==1)
    return(
        <img src={red} />
    )
    if(i==2)
    return(
        <img src={pink} />
    )
    if(i==3)
    return(
        <img src={green} />
    )
    if(i==4)
    return(
        <img src={Lgreen} />
    )
    if(i==5)
    return(
        <img src={orange} />
    )
    if(i==6)
    return(
        <img src={white} />
    )
    if(i==7)
    return(
        <img src={lightblue} />
    )
}

    return (
        <div>
            {non_followers()}
            {
                  uniqueChars.map(i=>{
                    return(
                        <div className="container">
                            <div className="row">
                            <div className="col-sm-2">
                                {image_provider(Math.floor(random(1, 8))-1)}
                            </div>
                            <div className="col-sm-10" align="left">
                                {i}
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
