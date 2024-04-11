'use client'

import { SafeListing, SafeUser } from "@/types";
import { Reservation } from "@prisma/client";
import { Category } from "../../navbar/Categories";
import Container from "../../Container";
import ListingHead from "./ListingHead";

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
        <div className="flex flex-col gap-8">
          <ListingHead
            title={listing.title}
            imgSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  );
};

export default FullListing;
