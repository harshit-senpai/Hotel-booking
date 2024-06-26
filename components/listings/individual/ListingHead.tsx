'use clients';
import Heading from "@/components/Heading";
import HeartButton from "@/components/HeartButton";
import useCountries from "@/hooks/useCountries";
import { SafeUser } from "@/types";
import Image from "next/image";
import React from "react";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imgSrc: string;
  id: string;
  currentUser: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imgSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          alt="Listing Image"
          src={imgSrc}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
