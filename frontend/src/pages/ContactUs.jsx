import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {

    navigation = useNavigate()
    const Direction = () => {
        navigation("/")
    }

  return (
    <div className='pl-60 pr-80'>
    <div className='mt-20 text-center ml-20 text-3xl font-arial font-bold mb-4'>
            <span className=''></span>
    </div>

    <section class="bg-white rounded mx-auto pl-10">
  <div class="py-8 lg:py-16 px-10  mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-black">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-black-500 dark:text-black sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-black dark:text-black">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required /> 
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-black dark:text-black">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-black dark:text-black">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" onClick={Direction} class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-500/90 hover:bg-sky-500/70 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}

export default ContactUs
