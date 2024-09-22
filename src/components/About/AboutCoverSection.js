import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileCharacter} alt="BZ" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
              <h2 className='font-bold capitalize text-5xl xs:text-6xl sxl:text-7xl text-center lg:text-left'>
                  Bosen Zhang
              </h2>
              <p className='font-medium capitalize mt-6 text-lg'>
                  I'm a Computer Science student at the University of Waterloo, set to graduate in Spring 2025. I am passionate about technology and enjoy working on innovative projects that make a difference. My academic and co-op experiences have equipped me with strong skills in software development and problem-solving, and I am always eager to learn and take on new challenges.
              </p>
        </div>
    </section>
  )
}

export default AboutCoverSection