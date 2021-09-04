import FAQsCSS from './FAQs.module.css'

const FAQs = () => {
    return (
        <div className={FAQsCSS.faqsContainer}>
            <div className={ FAQsCSS.Box }>
                { 'FAQs' }
                <ul>
                    <li>Brush Your teeth</li>
                    <li>Eat Your Veggies</li>
                </ul>
            </div>
        </div>
    )
}

export default FAQs
