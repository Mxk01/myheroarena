import FAQsCSS from './FAQs.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const FAQs = () => {
    let [QA, setQA] = useState([{
        key: 1,
        question: 'Who are we?',
        answer: 'lorem  lorem lorem lorem lorem'
    },
    {
        key: 2,
        question: 'Why choose this game?',
        answer: 'lorem  lorem lorem lorem lorem'
    }
        , {
        key: 3,
        question: 'How can you support us??',
        answer: 'lorem  lorem lorem lorem lorem'
    }])
    let [isClicked, setIsClicked] = useState(false);


    let showQuestion = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        setIsClicked(!isClicked)
        QA = QA.filter(item => id === item.key)
    };

    return (
        <div className={FAQsCSS.faqsContainer} >
            <motion.div initial={{ x: 0 }} animate={{ x: -100 }} className={FAQsCSS.Box}>
                {QA.map((element) => (
                    <div key={element.key}>
                        <div onClick={(e) => { showQuestion(e, element.key) }} className={FAQsCSS.droppable}>
                            <p onClick={(e) => { showQuestion(e, element.key) }} >{element.question}</p>
                            {isClicked ? (<ExpandMoreIcon />) : (<ChevronRightIcon />)}
                        </div>
                        <div> {isClicked ? (<div>{element.answer}</div>) : ''}</div>
                    </div>
                ))}


            </motion.div>
        </div >
    )
}

export default FAQs
