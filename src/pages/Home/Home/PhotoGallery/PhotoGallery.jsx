import image1 from '../../../../assets/images/cups/Rectangle 9.png'
import image2 from '../../../../assets/images/cups/Rectangle 10.png'
import image3 from '../../../../assets/images/cups/Rectangle 11.png'
import image4 from '../../../../assets/images/cups/Rectangle 12.png'
import image5 from '../../../../assets/images/cups/Rectangle 13.png'
import image6 from '../../../../assets/images/cups/Rectangle 14.png'
import image7 from '../../../../assets/images/cups/Rectangle 15.png'
import image8 from '../../../../assets/images/cups/Rectangle 16.png'


const PhotoGallery = () => {
    return (
        <>
        <div className="text-center mt-[120px]">
            <h5 className="text-xl">Follow Us Now</h5>
            <h2 className='text-[#331A15] mt-2 mb-12 text-6xl font-bold drop-shadow-lg'>Follow on Instagram</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto px-5'>
       <img src={image1} alt="cup-image" className='mx-auto'/>
       <img src={image2} alt="cup-image" className='mx-auto'/>
       <img src={image3} alt="cup-image" className='mx-auto'/>
       <img src={image4} alt="cup-image" className='mx-auto'/>
       <img src={image5} alt="cup-image" className='mx-auto'/>
       <img src={image6} alt="cup-image" className='mx-auto'/>
       <img src={image7} alt="cup-image" className='mx-auto'/>
       <img src={image8} alt="cup-image" className='mx-auto'/>
      
          
            
        </div>
        </>
    );
};

export default PhotoGallery;