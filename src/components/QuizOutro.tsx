import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import Button from "./Button";

type Props = {
  onNext: () => void;
};

function QuizOutro({ onNext }: Props) {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        exit={{ x: -2000 }}
        transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 50 }}
        className="text-center"
      >
        <Container>
          <h2 className="text-4xl text-question font-extrabold">
            ممنون از شما به خاطر شرکت در این کوئیز!
          </h2>
          <p className="text-2xl text-sky-700 italic my-4">
            برای ارسال و مشاهده نتایج دکمه زیر رو بزنید
          </p>
          <Button onNext={onNext}>ثبت</Button>
        </Container>
      </motion.section>
    </AnimatePresence>
  );
}

export default QuizOutro;
