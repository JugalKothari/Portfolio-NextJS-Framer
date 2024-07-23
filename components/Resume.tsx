import React from 'react'

const Resume = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="resume" ref={ref} className="grey-section">
        <div className="row section-intro">
   		    <div className="col-twelve">

                <h5>Resume</h5>
                <h3 className="font-serif text-3xl mb-2">More of my credentials.</h3>

   		    </div>   		
   	    </div>
    </section>
  )
});

Resume.displayName = "Resume"

export default Resume
