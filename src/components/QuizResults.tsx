import { motion, AnimatePresence } from "framer-motion";
//
import Container from "./Container";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  onNext: () => void;
  loading: boolean;
};

function QuizResults({ onNext, loading }: Props) {
  let score = localStorage.getItem("userScore");

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
          <h2 className="md:text-4xl text-2xl mx-4 text-question font-extrabold">
            {score
              ? `تبریک! شما به ${score} سوال از 20 سوال این کوئیز جواب درست دادید`
              : "متاسفانه خطایی در ثبت امتیاز پیش اومد :("}
          </h2>
          {!loading ? (
            <p className="text-2xl text-sky-700 italic m-4">
              برای ارسال نتایج دکمه زیر رو بزنید
            </p>
          ) : (
            <LoadingSpinner />
          )}

          <Button onNext={onNext}>ثبت</Button>
        </Container>
      </motion.section>
    </AnimatePresence>
  );
}

export default QuizResults;
