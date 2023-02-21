import './formStyles.css'

function ContactForm(){
    return(
        <div className='form-container'>
            <form className="form">
                <p className="heading">Send Me A Message</p>
                <input className="input" placeholder="Name" type="text"/>
                <input className="input" placeholder="Email" type="text"/> 
                <input className="input" placeholder="Message" type="text"/> 
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}
export default ContactForm

