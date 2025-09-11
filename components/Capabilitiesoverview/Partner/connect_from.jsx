import React from "react";

const Formsec = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      <div className='fix py-[45px] lg:py-[100px]'>
        <div className='flex w-full h-full items-center flex-row'>
          <div className='bg-white p-[20px] lg:px-[0px]  lg:h-[600px] 1280:h-[600px] 1440:h-[680px] 1536:h-[680px] 1600:h-[700px] 1920:h-[720px] lg:py-[40px] lg:pr-10 lg:pl-[60px] md:w-[100%] lg:w-[50%]'>
            <h3 className='bw-s text-[30px] md:text-[40px] xl:text-[44px] md:leading-[45px] xl:leading-[50px] leading-[35px] tracking-tighter'>
              <span className='bw-m'>Get in Touch With Our</span>
              <br />
              Leasing Team
            </h3>
            <p className="text-[16px] leading-[26px] bw-r mt-[19px]">Talk to our team to explore how Horizon’s network can give your business an edge.</p>
            <div className='w-full pt-[35px] 1280:pt-[20px] 1440:pt-[35px]'>
              <form className='space-y-[60px]'>
                {/* Row 1 */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-[30px] 1920:mb-[60px] 1600:mb-[50px] 1536:mb-[50px] 1440:mb-[40px] 1366:mb-[30px] 1280:mb-[30px]'>
                  <div>
                    <input
                      placeholder='Full Name'
                      type='text'
                      className='w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 text-black placeholder-black bw-r'
                    />
                  </div>
                  <div>
                    <input
                      placeholder='Phone Number'
                      type='text'
                      className='w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 text-black placeholder-black bw-r'
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-[30px] 1920:mb-[60px] 1600:mb-[50px] 1536:mb-[50px] 1440:mb-[40px] 1366:mb-[30px] 1280:mb-[30px]'>
                  <div>
                    <input
                      placeholder='Organization'
                      type='text'
                      className='w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 text-black placeholder-black bw-r'
                    />
                  </div>

                  {/* Park Location with custom chevron */}
                  <div className='relative'>
                    <select className='w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 bg-transparent appearance-none pr-8 text-black placeholder-black bw-r'>
                      <option value=''>Park Location</option>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </select>
                    {/* Custom Chevron */}
                    <svg
                      className='absolute right-2 bottom-3 w-4 h-4 pointer-events-none text-black placeholder-black bw-r'
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
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-[30px] 1920:mb-[60px] 1600:mb-[50px] 1536:mb-[50px] 1440:mb-[40px] 1366:mb-[30px] 1280:mb-[30px]'>
                  <div>
                    <input
                      placeholder='Email'
                      type='email'
                      className='w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 text-black placeholder-black bw-r'
                    />
                  </div>

                  {/* Space Required with custom chevron */}
                  <div className='relative'>
                    <select className='w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 bg-transparent appearance-none pr-8 text-black placeholder-black bw-r'>
                      <option value=''>Space required</option>
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </select>
                    {/* Custom Chevron */}
                    <svg
                      className='absolute right-2 bottom-3 w-4 h-4 pointer-events-none text-black placeholder-black bw-r'
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
                    className='w-full border-b border-[#CDCDCD] focus:border-black focus:outline-none py-2 resize-none text-black placeholder-black bw-r'
                  ></textarea>
                </div>

                {/* Submit */}
                <div className='pt-4 xl:mt-[-50px] 1366:mt-[-50px] 1440:mt-[-30px] mt-[-55px]'>
                  <button
                    type='submit'
                    className='w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-[url('/factory/formbg.jpg')] md:w-[0%] lg:w-[50%]  lg:h-[600px] 1280:h-[600px] 1440:h-[680px] 1536:h-[680px] 1600:h-[700px] 1920:h-[720px] bg-cover flex items-end bg-no-repeat ">
            {/* <p className='text-white bw-r text-[22px] pb-[60px] pl-[60px] pr-[90px] leading-[32px]'>
              Have questions or ready to explore? Let’s connect and talk about
              how we can help your business grow.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formsec;
