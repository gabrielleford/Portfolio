const Contact = ({ contact }) => {
    return (
      <div>
          <div id={contact} className='py-12'>
              <h2 className='mb-8 ml-48 text-5xl text-dark-teal font-display sectionHeader'>Contact</h2>
              <div>
                <form action='https://formspree.io/f/myylvdwp' method='POST' className="grid space-y-7 max-w-screen-md mx-auto bg-dark-peach px-9 py-7 rounded-md shadow-2xl">
                  <div className="grid">
                    <label htmlFor='name' className="text-dark-teal font-display formLabel text-xl">Name</label>
                    <input type='name' id='name' className="rounded-sm focus:outline-1 focus:outline-dark-teal px-1 shadow-lg" required />
                  </div>
                  <div className="grid">
                    <label htmlFor='email' className="text-dark-teal font-display formLabel text-xl">Email Address</label>
                    <input type='email' id='email' name='_replyto' className="rounded-sm focus:outline-1 focus:outline-dark-teal px-1 shadow-lg" required />
                  </div>
                  <div className="grid">
                    <label htmlFor='message' className="text-dark-teal font-display formLabel text-xl">Message</label>
                    <textarea type='text' id='message' className="rounded-sm focus:outline-1 focus:outline-dark-teal px-1 shadow-lg" required />
                  </div>
                  <button type='submit' className="font-poppins-light text-dark-teal text-xl w-fit px-3 py-1 mx-auto bg-peach shadow-lg rounded-[5px] transition-all duration-300 ease-in-out border border-light-peach/75 hover:bg-light-peach formBtn">Submit</button>
                </form>
              </div>
          </div>
      </div>
    )
}

export default Contact;