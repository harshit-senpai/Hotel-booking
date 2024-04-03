"use client";

import useRentModal from "@/hooks/useRentModal";
import Modal from "./Modal";
import { useState } from "react";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = () => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  };

  const secondaryActionLabel = () => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  };

  const rentModal = useRentModal();
  return (
    <Modal
      title="Airbnb your home"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
    />
  );
};

export default RentModal;
