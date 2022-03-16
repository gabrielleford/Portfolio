const Contact = ({ contact }) => {
    return (
      <div>
          <div id={contact} className='py-12'>
              <h2 className='mb-8 ml-48 text-5xl text-dark-teal font-display sectionHeader'>Contact</h2>
              <div>
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
      </div>
    )
}

export default Contact;