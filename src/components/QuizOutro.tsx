
import Container from './Container'
import Button from './Button'

type Props = {
    onNext : ()=>void
}

function QuizOutro({onNext}:Props) {
  return (
    <section className='text-center'>
        <Container>
            <h2 className='text-4xl text-question font-extrabold'>ممنون از شما به خاطر شرکت در این کوئیز!</h2>
            <p className='text-2xl text-sky-700 italic my-4'>برای ارسال و مشاهده نتایج دکمه زیر رو بزنید</p>
            <Button onNext={onNext}>ثبت</Button>
        </Container>
    </section>
  )
}

export default QuizOutro