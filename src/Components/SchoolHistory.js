import React, { useEffect } from 'react'
import moduleName from '../Assets/pixelcut-export.png'
import "../Styles/SchoolHistory.css"
export default function SchoolHistory() {

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const screenWidth = window.innerWidth
            if (screenWidth >= 768) {
                const parallaxContainer = document.querySelector('.l-section-img2');
                parallaxContainer.style.backgroundPositionY = `${scrollPosition}px`;


                




            }


        };




        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>

<section className='l-section wpb_row height_medium full_height valign_center container-fluid'>
                <div className="l-section-img2" data-img-width="1920" data-img-height="1080" ></div>
                <div className="l-section-overlay" style={{ background: 'linear-gradient(0deg,#000000,rgba(209, 189, 189, 0))' }}></div>
            <div className="info-title-content pt-5 text-white">
             

                <div className='container mt-5'>
                    <div className='row'>

                        <div className='col-md-6'>
                        <div className='about-div text-start'>
                                <h3 style={{fontFamily:"'Poppins', sans-serif",fontWeight:"bold",textTransform:"uppercase",letterSpacing:'2'}}>
                                    School History
                                </h3>
                                <p style={{fontFamily:"'Rubik', sans-serif",fontWeight:"bold",letterSpacing: ".8px"}}>
                                NED School (Now becomes the Cowasjee School) was established in NED University
                                premises in the year 2000 with the purpose to facilitate/support the lower grade employee
                                of the University for providing access to quality education for their children
                                </p>
                                <p style={{fontFamily:"'Rubik', sans-serif",letterSpacing: ".8px",opacity:0.8}}>
                                The school
                                was initially started in one room of the Community Centre located in the staff colony as
                                during this period, the strength of the student was very low and all the student were of
                                NED employee. All the expenses of the school were borne by NED University from the
                                year 2000 till 2006. Later, the University partially supported the school till 2012 and the
                                rest of the expenses were borne by the School through its own income.
                        </p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='about-div text-start'>
                                
                                
                                <p style={{fontFamily:"'Rubik', sans-serif",letterSpacing: ".8px",opacity:0.8}}>
                                In the year 2006, the school was shifted to the new building. The school was
also named after ‘Cowasjee School in 2012. Which was constructed with generous
donation of Rs.05 million from Cowasjee Foundation. At present, there are more than
400 students including employees’ children and outsiders in classes from kindergarten to
matric. The school is also affiliated with the Board of Secondary Education, Karachi.
</p>
<p style={{fontFamily:"'Rubik', sans-serif",letterSpacing: ".8px",opacity:0.8}}>
The School is charging a very nominal fee as compared to other private
sector school and is also providing additional subsidy in the fee to the children of the
NED University employee. The other notable thing is the continuous growth of the
school not only in providing the quality student but also in term of building, faculty, staff,
furniture and fixture etc

</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            </section>

    </>
  )
}
