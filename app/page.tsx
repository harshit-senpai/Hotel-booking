import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/listings/ListingCard";
import getCurrentUser from "@/lib/actions/getCurrentUser.action";
import getListings, { IListingsProps } from "@/lib/actions/getListings.action";

interface HomeParams {
  searchParams: IListingsProps;
}

export default async function Home({ searchParams }: HomeParams) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }
  return (
    <Container>
      <div className="pt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cold-3 lg:grid-cold-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
