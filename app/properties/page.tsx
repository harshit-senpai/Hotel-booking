import EmptyState from "@/components/EmptyState";
import PropertiesView from "@/components/properties/PropertiesView";
import TripsView from "@/components/trips/TripsView";
import getCurrentUser from "@/lib/actions/getCurrentUser.action";
import getListings from "@/lib/actions/getListings.action";

const Page = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length > 0) {
    <EmptyState title="No properties" subtitle="You have no properties." />;
  }

  return (
    <div className="mt-9">
      <PropertiesView listings={listings} currentUser={currentUser} />
    </div>
  );
};

export default Page;
