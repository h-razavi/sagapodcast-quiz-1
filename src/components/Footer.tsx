import { useState } from "react";
import Modal from "./Modal";

type Props = {};

function Footer({}: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [footerIsUp, setFooterIsUp] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleOpenFooter() {
    setFooterIsUp(true);
  }

  function handleCloseFooter() {
    setFooterIsUp(false);
  }

  return (
    <>
      <button
        className={`text-white bg-teal-400 rounded-full h-8 w-8 grid place-items-center fixed bottom-1 ease-in-out transition duration-1000 ${
          !footerIsUp ? "translate-y-0 " : `-translate-y-16 -rotate-180 `
        }`}
        onClick={!footerIsUp ? handleOpenFooter : handleCloseFooter}
      >
        &#9650;
      </button>
      <footer
        className={`fixed bottom-0 w-full h-16 bg-black bg-opacity-60 px-12 flex items-center justify-between text-xs lg:text-md ease-in-out transition duration-1000 ${
          !footerIsUp ? "translate-y-16 " : `translate-y-0`
        }`}
      >
        <div className="flex gap-2 items-center">
          <span className="text-white">طراحی و توسعه توسط</span>
          <a href="https://github.com/h-razavi">
            <img src="/hr-logo.png" alt="logo" className="h-12" />
          </a>
        </div>
        <button
          onClick={handleOpenModal}
          className="bg-black text-white p-2 rounded-md shadow-md shadow-gray-400 border-2 border-white"
        >
          گزارش مشکل
        </button>
      </footer>
      {modalIsOpen ? (
        <Modal
          modalOption="report"
          onCloseModal={handleCloseModal}
          hasButton={false}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Footer;
