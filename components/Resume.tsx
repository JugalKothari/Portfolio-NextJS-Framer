import React from 'react'
import Image from 'next/image'

const Resume = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="resume" ref={ref}>
        <div className="row section-intro">
   		    <div>
                <h5>Resume</h5>
                <h3 className="font-serif text-3xl">More about my experiences.</h3>
   		    </div>
   	    </div>
        <div className='flex justify-center items-center'>
            <Image src="/JugalKothariResumeNew.jpg"
            alt='Resume of the author'
            width={600}
            height={600}
            className="rounded-sm shadow-lg shadow-gray-500"/>
        </div>
    </section>
  )
});

Resume.displayName = "Resume"

export default Resume
