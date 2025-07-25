

import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-2xl w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-transform duration-300"
        />

        <div className="p-4 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700 uppercase">
            {listing.name}
          </p>

          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">{listing.address}</p>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2">{listing.description}</p>

          <p className="text-slate-500 mt-2 font-semibold">
            Rs {listing.offer ? listing.discountPrice : listing.regularPrice}
            {listing.type === 'rent' && ' / month'}
          </p>

          <div className="text-slate-700 flex gap-4 mt-2">
            <div className="font-bold text-xs">
              {listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : `${listing.bedrooms} Bed`}
            </div>
            <div className="font-bold text-xs">
              {listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : `${listing.bathrooms} Bathroom`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
