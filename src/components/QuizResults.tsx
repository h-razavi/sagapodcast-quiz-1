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
  let score = Number(localStorage.getItem("userScore"));

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
            {score && score > 17
              ? `یوهو! عالی بود. شما به ${score} سوال از 20 سوال این کوئیز جواب درست دادید`
              : 13 < score && score <= 17
              ? ` آفرین! شما به ${score} سوال از 20 سوال جواب درست دادید `
              : 8 < score && score <= 13
              ? `تبریک! شما به ${score} سوال از 20 سوال این کوئیز جواب درست دادید`
              : score <= 8
              ? `هممم! شما به ${score}  سوال از 20 سوال این کوئیز جواب درست دادید. به نظر می‌رسه یه دور دیگه باید به اپیزودهای پادکست ساگا گوش بدید :)`
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
