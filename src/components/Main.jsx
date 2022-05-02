import React from 'react'
import img from '../assets/illustration-devices.svg'

export const Main = () => {
  return (
    <main className='main'>
      <div className='container'>
        <img src={img} alt='smartphone and laptop' className='main__img' />

        <section className='main__section '>
          <p className='main__section__new uppercase font-heading'>
            <span className='main__section__span'>new</span>
            monograph dashboard
          </p>
          <h1 className='main__section__title uppercase font-heading'>
            powerful insigths into your team
          </h1>

          <p className='main__section__content font-body'>
            Project planning and time tracking for agile teams
          </p>

          <div className='flex ai-center'>
            <button className='main__section__button uppercase font-body'>
              schedule a demo
            </button>
            <span className='uppercase font-heading button__span'>to see a preview</span>
          </div>

        </section>
      </div>


    </main>
  )
}
