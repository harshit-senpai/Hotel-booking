"use client";

import { SafeListing, SafeUser } from "@/types";
import { Reservation } from "@prisma/client";
import { Category } from "../../navbar/Categories";
import Container from "../../Container";
import ListingHead from "./ListingHead";
import ListingInfo from "./ListingInfo";

interface FullListingProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser: SafeUser | null;
}

const FullListing: React.FC<FullListingProps> = ({ listing, currentUser }) => {
  const category = Category.find((item) => item.label === listing.category);
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto mt-9">
        <div className="flex flex-col gap-8 px-[-60px]">
          <ListingHead
            title={listing.title}
            imgSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              roomCount={listing.roomCount}
              guestCount={listing.guestCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FullListing;
