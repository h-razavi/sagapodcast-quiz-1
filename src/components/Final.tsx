import React from "react";
import Container from "./Container";
import Button from "./Button";

type Props = {
  onNext: () => void;
};

function Final({ onNext }: Props) {

  return (
    <section className="text-center">
      <Container>
        <h2 className="text-4xl text-question font-extrabold">نتایج با موفقیت ارسال شد</h2>
        <p className="text-2xl text-sky-700 italic my-4">
          
        </p>
        <Button onNext={onNext}>از اول شروع کن</Button>
      </Container>
    </section>
  );
}

export default Final;
