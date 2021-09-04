import { Cdata } from "./Cdata.js"
import { useState,useEffect } from "react"
import CharactersCSS from './Characters.module.css'


const Characters = () => {
   //  let chars =  CData;
    // let [characters, setCharacters] = useState(Cdata)
     let characters = Cdata;
    // let character =  useRef("");
   let [skillDesc,setSkillDesc] = useState(""); 
   let [charName,setCharName] = useState("");
   let [skillsURL,setURL] = useState("");
   let [isToggled,setIsToggled]= useState(false);
    let [find, setFind] = useState("")
    let searchChar = (e) => {
        e.preventDefault()

        setFind(e.target.value)
        console.log(e.target.value)
        console.log(find)
    
    }

 
    if(find.length > 0)
    {
         
        characters = characters.filter((char) => char.name.toLowerCase().match(find.toLowerCase()))
        //  setCharacters(characters)
      
    }
   
    let toggleDescription = (e,id,skill,url,name) => {
        e.preventDefault();
         e.stopPropagation();
   
      //   if (e.target !== this) return;
    //  characters = characters.filter((char)=>char.id === id )
   
     setSkillDesc(skill)
     setCharName(name)
     setURL(url)
     setIsToggled(!isToggled)
    }
    
     return (
        <div className={CharactersCSS.mainContainer} style={{height:"100vw",width:"100vw"}}>
            <input value={find} placeHolder ={"Search ... "} className={CharactersCSS.searchBar} onChange={(e) => searchChar(e) } />
           { 
           
           isToggled ? (<div className={CharactersCSS.character__skill__description}> 
            <h1 style={{fontSize:'1rem'}}>  {skillDesc}</h1>
            <p  style={{fontSize:'1rem'}}>{charName}</p>
            
            <img src={skillsURL}></img>
            </div>) : ""
}
         <div className={CharactersCSS.characters}>   
         
        
            { characters.map( (char) => {
                let {id,name,skill1,skill2,skill3,skill4} = char; 
                return( 
                <div key={char.id} className={CharactersCSS.characterContainer}>
                    <h2>{ char.name }</h2>
                    <p> { char.description }</p>
                    <div className={CharactersCSS.skillImages}>
                        <img src={ char.pfp.img} ></img>
                        <img  onClick={(e)=>{toggleDescription(e,id,name,char.attack1.img,skill1)}} src={ char.attack1.img }></img>
                        <img   onClick={(e)=>{toggleDescription(e,id,name,char.attack2.img,skill2)}} src={ char.attack2.img }></img>
                        <img onClick={(e)=>{toggleDescription(e,id,name,char.attack3.img,char.skill3)}} src={ char.attack3.img }></img>
                        <img onClick={(e)=>{toggleDescription(e,id,name,char.invul.img,skill4)}} src={ char.invul.img } />
                       
                    </div>
                   
                </div> )
            } ) }
          
        </div>
        </div>
    )
}

export default Characters
