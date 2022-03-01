import resume from '../assets/Gabrielle Ford\'s Resume.pdf'

const Contact = ({ contact }) => {
    return (
        <div>
            <p>Interested in learning more?</p>
            <div id="resumeBtn">
                <a href={resume} id='resume' download>Download my resume</a>
            </div>
            <div id={contact}>
                <h2>Contact</h2>
                <form action='https://formspree.io/f/myylvdwp' method='POST'>
                    <input type='name' id='name' placeholder='First and Last Name' required />
                    <label htmlFor='name'>Name</label>

                    <input type='email' id='email' placeholder='name@example.com' name='_replyto' required />
                    <label htmlFor='email'>Email Address</label>

                    <textarea type='text' id='message' placeholder='message' required />
                    <label htmlFor='message'>Message</label>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;