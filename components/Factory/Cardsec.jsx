const Cardsec = () => {
  return (
    <div className='bg-black py-20 relative min-h-screen flex items-center'>
      <img
        src='/factory/cardsec/bgro.png'
        className='absolute top-0 1280:right-[150px] 1280:w-[553px] 1280:h-[341px] right-[5%] w-[60vw] z-10 h-auto'
        alt=''
      />

      <div className='fix '>
        <div className='bg-[#000]'>
          <h1 className='relative z-20 sec_hd bw-r bg-gradient-to-r whitespace-nowrap overflow-visible from-[#AC38D9] from-20% to-[#F47922] to-100% bg-clip-text text-transparent mb-[41px]'>
            What We <br />
            <span className='flex gap-2 items-center max-w-fit'>
              <span className='bw-m text-[#fff]'>Offer</span>
              <img
                src='/frm2.png'
                className='1280:h-[58px] 1280:w-[226px] w-[40%] h-auto'
              />
            </span>
          </h1>
        </div>
        <div className='flex relative z-20 justify-between md:mt-[49px] mt-[40px] flex-col gap-[34px]'>
          <div className='flex gap-[34px] md:flex-row flex-col'>
            <div className=' text-white md:w-1/2 bg-[#F47922] relative lg:p-[30px] sm:p-5 p-3 lg:h-[296px] sm:h-[330px] flex items-center'>
              <div className='flex h-full flex-col justify-between'>
                <h3 className='text-[27px] capitalize lg:text-[40px] leading-[34px] lg:leading-[40px] bw-m mb-[14px]'>
                  Fitouts That Work from Day One
                </h3>
                <p className='1536:w-[605px] text-[17px] lg:text-[20px] leading-[150%] bw-r'>
                  We deliver ready-fit spaces with basic infrastructure support
                  like racking, security systems, and inventory management
                  systems, so you can focus on your core business without
                  chasing multiple vendors or investing time in setup.
                </p>
              </div>
              <svg
                className='absolute right-0 top-10 w-auto'
                xmlns='http://www.w3.org/2000/svg'
                width='82'
                height='164'
                viewBox='0 0 82 164'
                fill='none'
              >
                <path opacity='0.12' d='M0 82L82 164L82 0L0 82Z' fill='white' />
              </svg>
              {/* <img
                className=''
                src='/Cap_Overview/cards_arrow.svg'
              /> */}
            </div>
            <div className=' text-white md:w-1/2 bg-[#8A52A0] relative lg:p-[30px] sm:p-5 p-3 lg:h-[296px] sm:h-[330px]  flex items-center'>
              <div className='flex h-full flex-col justify-between'>
                <h3 className='text-[27px] capitalize lg:text-[40px] leading-[34px] lg:leading-[40px]  bw-m mb-[14px]'>
                  Capex Support Where It Matters
                </h3>
                <p className='1536:w-[605px] text-[17px] lg:text-[20px] leading-[150%] bw-r'>
                  For businesses looking to lease larger spaces than they
                  currently operate in or those needing support with early-stage
                  setup, we offer flexible capital solutions. Horizon can cover
                  fitout costs upfront and integrate them into your rental
                  components, so you pay as you grow.
                </p>
              </div>
              <img
                className='absolute right-0 bottom-0 w-[100px] lg:w-[auto]'
                src='/Cap_Overview/cards_dbl_arrow.svg'
              />
            </div>
          </div>
          <div className='flex gap-[34px] md:flex-row flex-col'>
            <div className=' text-white md:w-1/2 bg-[#22B148] relative lg:p-[30px] sm:p-5 p-3 lg:h-[296px] sm:h-[330px] flex items-center'>
              <div className='flex h-full flex-col justify-between'>
                <h3 className='text-[27px] capitalize lg:text-[40px] leading-[34px] lg:leading-[40px] bw-m mb-[14px]'>
                  Spaces That <br className='lg:hidden flex' /> Scale with You
                </h3>
                <p className='1536:w-[605px] text-[17px] lg:text-[20px] leading-[150%] bw-r'>
                  Looking to scale your operations, expand into a new region, or
                  fast-track a new facility? Let’s build it—faster, smarter, and
                  fully aligned to your logistics or manufacturing needs.
                </p>
              </div>
              <img
                className='absolute right-0 top-0 w-[100px] lg:w-[auto]'
                src='/Cap_Overview/cards_arrow.svg'
              />
            </div>
            <div className=' text-white md:w-1/2 bg-[#313131] relative lg:p-[30px] sm:p-5 p-3 lg:h-[296px] sm:h-[330px]  flex items-center'>
              <div className='flex h-full flex-col justify-between'>
                <h3 className='text-[27px] capitalize lg:text-[40px] leading-[34px] lg:leading-[40px]  bw-m mb-[14px]'>
                  Financial Flexibility with <br className='lg:flex hidden' />
                  Big-Player Backing
                </h3>
                <p className='1536:w-[605px] text-[17px] lg:text-[20px] leading-[150%] bw-r'>
                  Backed by strong institutional capital, Horizon can make the
                  first move for you. We invest in your factory setup so you can
                  focus on production, market entry, and expansion without being
                  held back by capital constraints.
                </p>
              </div>
              <svg
                className='absolute lg:w-[auto] w-[100px] top-5 right-5'
                xmlns='http://www.w3.org/2000/svg'
                width='126'
                height='121'
                viewBox='0 0 126 121'
                fill='none'
              >
                <g clipPath='url(#clip0_2819_11396)'>
                  <path
                    d='M34.2783 0H0.00585938L11.6656 11.2706H22.9719V22.5411L34.2783 34.34V0Z'
                    fill='white'
                    fillOpacity='0.12'
                  />
                  <path
                    d='M80.1328 0H45.8604L57.5202 11.2706H68.8266V22.5411L80.1328 34.34V0Z'
                    fill='white'
                    fillOpacity='0.12'
                  />
                  <path
                    d='M125.988 0H91.7158L103.376 11.2706H114.682V22.5411L125.988 34.34V0Z'
                    fill='white'
                    fillOpacity='0.12'
                  />
                  <path
                    d='M34.2773 43.3262H0.00488281L11.6646 54.5966H22.971V65.8674L34.2773 77.6662V43.3262Z'
                    fill='white'
                    fillOpacity='0.12'
                  />
                  <path
                    d='M80.1328 43.3262H45.8604L57.5202 54.5966H68.8266V65.8674L80.1328 77.6662V43.3262Z'
                    fill='white'
                    fillOpacity='0.12'
                  />
                  <path
                    d='M125.988 43.3262H91.7158L103.376 54.5966H114.682V65.8674L125.988 77.6662V43.3262Z'
                    fill='white'
                    fillOpacity='0.12'
                  />
                  <path
                    d='M34.2773 86.6543H0.00488281L11.6646 97.9248H22.971V109.196L34.2773 120.994V86.6543Z'
                    fill='white'
                    fillOpacity='0.12'
                  />
                  <path
                    d='M80.1328 86.6543H45.8604L57.5202 97.9248H68.8266V109.196L80.1328 120.994V86.6543Z'
                    fill='white'
                    fillOpacity='0.12'
                  />
                  <path
                    d='M125.988 86.6543H91.7158L103.376 97.9248H114.682V109.196L125.988 120.994V86.6543Z'
                    fill='white'
                    fillOpacity='0.12'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_2819_11396'>
                    <rect width='126' height='121' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsec;
