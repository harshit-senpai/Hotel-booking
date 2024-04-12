import EmptyState from "@/components/EmptyState";
import FavoritesView from "@/components/favorites/FavoritesView";
import getCurrentUser from "@/lib/actions/getCurrentUser.action";
import getFavoriteListings from "@/lib/actions/getFavoriteListing.action";

const page = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites yet"
        subtitle="You haven't favorited any listings yet."
      />
    );
  }

  return <FavoritesView listings={listings} currentUser={currentUser} />;
};

export default page;
