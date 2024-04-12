import { SafeListing, SafeUser } from "@/types";
import Container from "../Container";
import Heading from "../Heading";
import ListingCard from "../listings/ListingCard";

interface FavoritesViewProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesView: React.FC<FavoritesViewProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <div className="mt-9">
      <Container>
        <Heading
          title="Favourites"
          subtitle="List of placed you have favorited"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FavoritesView;
