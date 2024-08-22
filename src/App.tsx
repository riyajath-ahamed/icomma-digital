import Navigation from './components/navigation'
import Hero from './components/hero'
import { HeaderCover, HeaderMobile } from './assets'
import { Cta } from './components'


function App() {

  return (
    <div className=' font-epilogue bg-[hsl(0,0%,98%)]'>
      <div className=' flex flex-col'>
        <Navigation/>
        <div className='flex flex-col justify-center'>
          <div>
            <img src={HeaderMobile} alt="image-hero-mobile" className='w-full rounded-lg lg:hidden' />
          </div>
          
        </div>
        
        <div className=' lg:flex lg:mx-44 lg:gap-4 lg:mt-10'>
          <img src={HeaderCover} alt="image-hero-desktop" className='hidden lg:flex lg:order-2 lg:w-full lg:h-full overflow-auto' />
          <Hero/>
        </div>
        <Cta />
        
      </div>
    </div>
  )
}

export default App
