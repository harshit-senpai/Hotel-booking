import EmptyState from "@/components/EmptyState";
import TripsView from "@/components/trips/TripsView";
import getCurrentUser from "@/lib/actions/getCurrentUser.action";
import getReservations from "@/lib/actions/getReservations.action";

const Page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length > 0) {
    <EmptyState
      title="No Reservations"
      subtitle="You have no reservations yet."
    />;
  }

  return (
    <div className="mt-9">
      <TripsView reservations={reservations} currentUser={currentUser} />
    </div>
  );
};

export default Page;
