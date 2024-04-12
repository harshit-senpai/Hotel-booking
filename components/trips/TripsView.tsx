"use client";

import { SafeReservation, SafeUser } from "@/types";
import Container from "../Container";
import Heading from "../Heading";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface TripsViewProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsView: React.FC<TripsViewProps> = ({ reservations, currentUser }) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = (id: string) => {
    setDeletingId(id);

    axios
      .delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success("Reservation Cancelled");
        router.refresh();
      })
      .catch((error) => {
        toast.error("something went wrong");
      })
      .finally(() => {
        setDeletingId("");
      });
  };
  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you.ve been and where you are going"
      />
      <div className="mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"></div>
    </Container>
  );
};

export default TripsView;
