import { useState } from "react";
//
import { motion } from "framer-motion";
//
import Container from "./Container";
import Modal from "./Modal";
import UserInfoForm from "./UserInfoForm";
import LoadingSpinner from "./LoadingSpinner";

type Props = {
  onNext: () => void;
};

function Welcome({ onNext }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  //Modal open/close functions
  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <motion.section
      initial={{ y: -700 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
      className="text-center"
    >
      <Container>
        <h2 className="text-4xl font-bold my-2 text-question">سلام!</h2>
        <h2 className="text-2xl font-bold my-4 text-question">
          به اولین کوئیز پادکست ساگا خوش اومدید!
        </h2>
        <p className="font-light italic text-question opacity-75 mx-8">
          این کوئیز شامل 20 سوال چهار گزینه‌ای هست که دانش شما رو در زمینه
          اساطیر و افسانه‌ها تست می‌کنه
        </p>
        <p className="font-bold">
          لطفاً قبل از شروع{" "}
          <span
            onClick={handleOpenModal}
            className="italic text-blue-500 cursor-pointer"
          >
            شرایط و قوانین{" "}
          </span>
          {" "}
          رو بخونید
        </p>
        <p className="my-4 italic">برای شروع نام و ایمیل خود را وارد کنید:</p>
        <UserInfoForm onNext={onNext} />
        {modalIsOpen && <Modal modalOption="rules" onCloseModal={handleCloseModal} />}
      </Container>
    </motion.section>
  );
}

export default Welcome;
