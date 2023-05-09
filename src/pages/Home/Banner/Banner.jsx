import './banner.css'
import icon1 from '../../../assets/images/icons/1.png'
import icon2 from '../../../assets/images/icons/2.png'
import icon3 from '../../../assets/images/icons/3.png'
import icon4 from '../../../assets/images/icons/4.png'

const Banner = () => {
    return (
        <>
            <div className='banner flex items-center justify-center md:justify-end'>
        <div className='w-1/2'>
        <h2 className='text-3xl md:text-6xl mb-4'>Would you like a Cup of Delicious Coffee?</h2>
        <p>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
        <button className='btn normal-case text-2xl font-normal mt-8 bg-[#E3B577] text-black hover-banner-btn'>Learn More</button>
        </div>
        <div>
        </div>
            </div>
            <div className='bg-[#ECEAE3] py-14 px-10 md:flex justify-center gap-10'>
        <div className='mb-5'>
            <img src={icon1} alt="icon"/>
            <h4 className='mt-4 mb-2 text-4xl'>Awesome Aroma</h4>
            <p>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className='mb-5'>
            <img src={icon2} alt="icon" />
            <h4 className='mt-4 mb-2 text-4xl'>High Quality</h4>
            <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className='mb-5'>
            <img src={icon3} alt="icon" />
            <h4 className='mt-4 mb-2 text-4xl'>Pure Grades</h4>
            <p>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className='mb-5'>
            <img src={icon4} alt="icon" />
            <h4 className='mt-4 mb-2 text-4xl'>Proper Roasting</h4>
            <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
            </div>
        </>
    );
};

export default Banner;