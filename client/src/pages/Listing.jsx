import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import Contact from '../components/Contact';

export default function Listing() {
    SwiperCore.use([Navigation]);
    const [listing, setListing]= useState(null);
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState(false);
    const [contact , setContact]=useState(false);
    const params = useParams()
    const {currentUser} = useSelector((state)=>state.user);
    useEffect(()=>{
        const fetchListing= async()=>{
        try {
            setLoading(true);
            const res = await fetch('/api/listing/get/'+params.listingId);
            const data = await res.json();
            if(data.success===false){
                setError(true);
                setLoading(false);
                return;
            }
            setListing(data);
            setLoading(false);
            setError(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
        };
        fetchListing();
    },[params.listingId])
  return (
    <main>
        {loading&& <p className='text-center my-7 text-2xl '>Loading...</p> }
        {error&& <p className='text-center my-7 text-2xl'>Something went wrong!</p> }
        {listing && !loading && !error && (
            <div>
        <Swiper navigation>
            {listing.imageUrls.map((url) => <SwiperSlide key = {url}>
            <div
             className="h-[550px] bg-center bg-no-repeat bg-cover"
         style={{ backgroundImage: `url(${url})` }}
            ></div>

                 </SwiperSlide>)}
              </Swiper>

            {/* ------------------------- ----listing info--------------
            ---------------------------*/}    


<div className="px-4 sm:px-8 lg:px-10 my-10 space-y-6 max-w-5xl mx-auto">
  {/* Title + Price */}
  <div className="text-2xl sm:text-3xl font-bold uppercase text-center text-green-900">
    {listing.name}{' '}
    <span className="block sm:inline text-lg sm:text-xl text-green-700 font-semibold normal-case">
      – ${listing.offer && listing.discountPrice ? (+listing.regularPrice - +listing.discountPrice) : listing.regularPrice}
      {listing.type === 'rent' && ' / month'}
    </span>
  </div>

  {/* Address */}
  <p className="text-md sm:text-lg text-gray-700 uppercase text-center flex items-center justify-center gap-2">
    🏠 <strong>Address:</strong> {listing.address}
  </p>

  {/* Badges */}
  <div className="flex flex-wrap justify-center items-center gap-3">
    <span className={`px-4 py-1 text-white text-sm font-medium rounded-full ${listing.type === 'rent' ? 'bg-blue-600' : 'bg-green-600'}`}>
      {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
    </span>
    {listing.offer && listing.discountPrice && (
      <span className="px-4 py-1 text-white text-sm font-medium rounded-full bg-red-600">
        Save ${listing.discountPrice}
      </span>
    )}
  </div>

  {/* Description */}
  <p className="text-sm sm:text-md md:text-lg text-gray-800 text-center sm:text-justify">
    <strong>Description –</strong> {listing.description}
  </p>

  {/* Features */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-green-800 text-sm font-semibold text-center">
    <p className="flex justify-center items-center gap-1">🛏️ {listing.bedrooms} Beds</p>
    <p className="flex justify-center items-center gap-1">🛁 {listing.bathrooms} Baths</p>
    <p className="flex justify-center items-center gap-1">🚗 {listing.parking ? 'Parking Available' : 'No Parking'}</p>
    <p className="flex justify-center items-center gap-1">🛋️ {listing.furnished ? 'Furnished' : 'Not Furnished'}</p>

    </div>

    {/* ----------------------------------- 
    -----------Contact Landlod ------------
    -------------------------------------*/}

{currentUser && listing.userRef !==currentUser._id && !contact &&(  <div className="flex justify-center mt-6">
  <button onClick={()=>setContact(true)} className="bg-slate-700 text-white w-full sm:w-auto px-12 py-4 text-lg sm:text-xl font-semibold hover:bg-slate-900 uppercase rounded-lg transition">
    Contact Landlord
  </button>
</div>  
  )} 
    {contact && <Contact listing ={listing}/>}
  </div>
        </div>      
            )}
    </main>
  );
}
