import './formStyles.css'

function ContactForm(){
    return(
        <div className='form-container'>
            <form className="form" action="https://formspree.io/f/moqzwzrv" method="POST">
                <p className="heading">Send Me A Message</p>
                <input className="input" placeholder="Name" type="text" name="name"/>
                <input className="input" placeholder="Email" type="email" name="_replyto"/> 
                <textarea className="input" placeholder="Message" name="message"></textarea> 
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm

