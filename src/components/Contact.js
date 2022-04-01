const Contact = ({ contact }) => {
    return (
      <div id={contact}>
          <div className='pt-6 pb-6 mb-5 sm:pt-12 sm:pb-20 lg:mb-14'>
              <h2 className='text-3xl text-center mb-3 sm:mb-8 lg:text-justify lg:ml-48 sm:text-5xl text-dark-teal font-display sectionHeader'>Contact</h2>
              <div>
                <form action='https://formspree.io/f/myylvdwp' method='POST' className="grid space-y-7 max-w-screen-md shadow-lg sm:mx-auto bg-dark-peach px-4 py-3 sm:px-9 sm:py-7 lg:rounded-md lg:shadow-2xl">
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
          <div className="font-poppins-light bg-dark-peach text-dark-teal py-4 text-center">
            <p>Gabrielle Ford © 2022</p>
          </div>
      </div>
    )
}

export default Contact;