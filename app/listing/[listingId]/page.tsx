import EmptyState from "@/components/EmptyState";
import FullListing from "@/components/listings/individual/FullListing";
import getCurrentUser from "@/lib/actions/getCurrentUser.action";
import getListingById from "@/lib/actions/getListingById.action";
import getReservations from "@/lib/actions/getReservations.action";

interface IParams {
  listingId?: string;
}

const page = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <div>
      <FullListing
        currentUser={currentUser}
        reservations={reservations}
        listing={listing}
      />
    </div>
  );
};

export default page;
