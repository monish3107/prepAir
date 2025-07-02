import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { dummyInterviews } from "@/constants"
import InterviewCard from '../components/InterviewCard'

const Page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Get Interview-Ready with AI Powered Practice and Feedback</h2>
          <p className='tex-lg'>
            Practice on Real Interview Questions and get instant Feedback
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt='robot' height={400} width={400} className='max-sm:hidden'></Image>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>
        <div className='interviews-section'>
        {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}

          {/* <p>You haven&apos;t taken any Interviews yet</p> */}
        </div>
      </section>
    </>
  )
}

export default Page
