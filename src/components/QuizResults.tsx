import React from 'react'
import Container from './Container'
import Button from './Button'

type Props = {
    onNext : ()=>void
}

function QuizResults({onNext}:Props) {

const score = Number(localStorage.getItem("userScore"))




  return (
    <section className='text-center'>
    <Container>
        <h2 className='text-4xl text-question font-extrabold'>
            {score?`تبریک! شما به ${score} سوال از 20 سوال این کوئیز جواب درست دادید`:"متاسفانه خطایی در ثبت امتیاز پیش اومد :("} 
        </h2>
        <p className='text-2xl text-sky-700 italic my-4'>برای ارسال نتایج دکمه زیر رو بزنید</p>
        <Button onNext={onNext}>ثبت</Button>
    </Container>
</section>
  )
}

export default QuizResults