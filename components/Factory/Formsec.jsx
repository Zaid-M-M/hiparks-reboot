import React from "react";

const Formsec = () => {
  return (
    <div className='bg-[#F5F5F5] min-h-screen'>
      <div className='fix py-[100px]'>
        <div className='flex w-full h-full items-center'>
          <div className='bg-white lg:h-[765px] lg:py-[70px] lg:pr-10 lg:pl-[60px] lg:w-[50%]'>
            <h3 className='bw-s text-[36px] tracking-tighter'>
              <span className='bw-m'>Let’s Build the Factory You Need</span>
              <br />
              Not the One You Have to Settle For
            </h3>
            <div className='w-full pt-16'>
              <form className='space-y-[60px]'>
                {/* Row 1 */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <input
                      placeholder='Full Name'
                      type='text'
                      className='w-full border-b border-gray-300 focus:border-black focus:outline-none py-2'
                    />
                  </div>
                  <div>
                    <input
                      placeholder='Phone Number'
                      type='text'
                      className='w-full border-b border-gray-300 focus:border-black focus:outline-none py-2'
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <input
                      placeholder='Organization'
                      type='text'
                      className='w-full border-b border-gray-300 focus:border-black focus:outline-none py-2'
                    />
                  </div>

                  {/* Park Location with custom chevron */}
                  <div className='relative'>
                    <select className='w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 bg-transparent appearance-none pr-8'>
                      <option value=''>Park Location</option>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </select>
                    {/* Custom Chevron */}
                    <svg
                      className='absolute right-2 bottom-3 w-4 h-4 pointer-events-none text-gray-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 9l6 6 6-6'
                      />
                    </svg>
                  </div>
                </div>

                {/* Row 3 */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <input
                      placeholder='Email'
                      type='email'
                      className='w-full border-b border-gray-300 focus:border-black focus:outline-none py-2'
                    />
                  </div>

                  {/* Space Required with custom chevron */}
                  <div className='relative'>
                    <select className='w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 bg-transparent appearance-none pr-8'>
                      <option value=''>Space required</option>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </select>
                    {/* Custom Chevron */}
                    <svg
                      className='absolute right-2 bottom-3 w-4 h-4 pointer-events-none text-gray-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 9l6 6 6-6'
                      />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder='Your Message'
                    rows='1'
                    className='w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 resize-none'
                  ></textarea>
                </div>

                {/* Submit */}
                <div className='pt-4'>
                  <button
                    type='submit'
                    className='w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-[url('/factory/formbg.jpg')] lg:w-[50%] lg:h-[765px] bg-cover flex items-end bg-no-repeat">
            <p className='text-white bw-r text-[22px] pb-[60px] pl-[60px] pr-[90px] leading-[32px]'>
              Have questions or ready to explore? Let’s connect and talk about
              how we can help your business grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formsec;
