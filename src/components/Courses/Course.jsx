import React from 'react'

const Course = () => {
  return (
    <div className='course  mx-3 d-flex flex-col'> 
      <div className="img"><img src="https://www.excelptp.com/wp-content/uploads/2019/11/front-end-development-training-1.jpg" alt="" /></div>
      <div className="content p-3 d-flex flex-col jc-sb gap-3">
        <div className="title"><h2>React</h2></div>
        <div className="price">2000 $</div>
        <div className="details d-flex jc-sb">
          <div className="cat py-1 px-5">Front-end</div>
          <div className="duration py-1 px-5">2 hrs</div>
        </div>
      </div>
    </div>
  )
}

export default Course