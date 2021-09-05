import { useState } from 'react'
import "./Selection.css"
import { Cdata } from "./Cdata.js"
function Selection() {
    let characters = Cdata;
    let [skillDesc, setSkillDesc] = useState("");
    let [charName, setCharName] = useState("");
    let [skillsURL, setURL] = useState("");
    let [isClicked, setIsClicked] = useState(false);
    let [isToggled, setIsToggled] = useState(false);
    let [charData, setCharData] = useState({
        id: 0, name: '', s1: '',
        s2: '', s3: '', s4: '',
        a1: '', a2: '', a3: '', a4: '',
        inv: ''
    })
    let toggleDescription = (id, skill, url, name) => {

        //   if (e.target !== this) return;
        //  characters = characters.filter((char)=>char.id === id )

        setSkillDesc(skill)
        setCharName(name)
        setURL(url)
        setIsToggled(!isToggled)
    }


    let showSkills = (id, name, s1, s2, s3, s4, a1, a2, a3, inv) => {
        setIsClicked(!isClicked);
        setCharName(name)
        setCharData({
            id,
            name,
            s1,
            s2,
            s3,
            s4,
            a1,
            a2,
            a3,
            inv

        })
    }
    return (
        <div className="selection__main">
            <div className="selection__container">


                <div>

                    {isClicked ? (

                        <div className="skills__selection__container">
                            {

                                isToggled ? (<div>
                                    <h1 style={{ fontSize: '1rem' }}>  {skillDesc}</h1>
                                    <p style={{ fontSize: '1rem' }}>{charName}</p>

                                    {/* <img src={skillsURL}></img> */}
                                </div>) : ""
                            }
                            <img onClick={() => { toggleDescription(charData.id, charData.name, charData.a1, charData.s1) }} src={charData.a1}></img>
                            <img onClick={() => { toggleDescription(charData.id, charData.name, charData.a2, charData.s2) }} src={charData.a2}></img>
                            <img onClick={() => { toggleDescription(charData.id, charData.name, charData.a3, charData.s3) }} src={charData.a3}></img>
                            <img onClick={() => { toggleDescription(charData.id, charData.name, charData.inv, charData.s4) }} src={charData.inv} />

                        </div>
                    ) : ''}</div>
                <div className="selection__options">
                    <button>Quit</button>
                    <button>Ladder</button>
                    <button>Quick</button>
                    <button>Private</button>
                </div>
                <div className="selection">
                    {characters.map((char) => {
                        let { id, name, skill1, skill2, skill3, skill4, attack1, attack2, attack3, invul } = char;


                        return (
                            <div key={char.id}>

                                <img src={char.pfp.img} onClick={(e) => {

                                    showSkills(
                                        id,
                                        name,
                                        skill1,
                                        skill2,
                                        skill3,
                                        skill4,
                                        attack1.img,
                                        attack2.img,
                                        attack3.img,
                                        invul.img
                                    )
                                }}></img>


                            </div>)


                    })}



                </div>
            </div>


        </div >
    )
}

export default Selection
