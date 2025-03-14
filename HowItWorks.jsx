import React, { useState } from 'react';
import WorkApi from './Api/WorkApi';

const HowItWorks = () => {

  const [workData, setworkData] = useState(WorkApi);
  console.log(workData);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className='main-heading text-center'> How does it work </h1>
          <div className='row'>
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <dev className='col-12 col-lg-4 text-center work-container-subdiv'>
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className='sub-heading'> {title} </h2>
                    <p className='main-hero-parag w-100'>{info}</p>
                  </dev>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks;
