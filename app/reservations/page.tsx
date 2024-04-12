import EmptyState from "@/components/EmptyState";
import ReservationView from "@/components/reservation/ReservationView";
import getCurrentUser from "@/lib/actions/getCurrentUser.action";
import getReservations from "@/lib/actions/getReservations.action";

const Page = async () => {
  const currentUser = await getCurrentUser();
  const reservation = await getReservations({ authorId: currentUser?.id });

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  if (reservation.length === 0) {
    return (
      <EmptyState
        title="No Reservations found"
        subtitle="Looks like that you have no reservations for your property"
      />
    );
  }

  return (
    <div className="mt-9">
      <ReservationView reservations={reservation} currentUser={currentUser} />
    </div>
  );
};

export default Page;
