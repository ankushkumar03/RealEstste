// // import e from 'express';
// // import React, { useState } from 'react'

// // export default function search() {
// //     const [sidebardata, setsidebardata] = useState({
// //         searchTerm:'',
// //         type:'all',
// //         parking:'false',
// //         furnished:'false',
// //         offer:'false',
// //         sort:'created_at',
// //         order:'desc',
// //     });

// //     console.log(sidebardata);

// //     const handleChange=(e)=>{
// //         if(e.target.id==='all'|| e.target.id==='rent' || e.target.id==='sale' )setsidebardata({...sidebardata,type:e.target.id})
// //     }

// //     if(e.target.id==='searchTerm'){
// //         setsidebardata({...sidebardata, searchTerm: e.target.value});
// //     }

// //     if(e.target.id==='parking' || e.target.id==='furnished' ||e.target.id==='offer'){
// //         setsidebardata({...sidebardata,[e.target.id]: e.target.checked|| e.target.checked==='true'? true: false, });
// //     }

// //     if(e.target.id==='sort_order'){
// //         const sort = e.target.value.split('_')[0] || 'created_at';

// //         const order = e.target.value.split('_')[1] || 'desc';

// //         setsidebardata({...sidebardata, sort, order});
// //     }

// //   return (
// //     <div className='flex flex-col md:flex-row '> 

// //         {/*-------- Searchin ui--------------
// //         -------------------------------- */}
// //         <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen ">
// //             <form className='flex flex-col gap-8' >
// //                 <div className="flex items-center gap-2 ">
// //                     <label className=' whitespace-nowrap font-semibold ' >Search Term:</label>
// //                     <input type="text" id='searchTerm' placeholder='Search...' className='border rounded-lg p-3 w-full ' value={sidebardata} onChange={handleChange}/>
// //                 </div>
// //                 <div className=" flex gap-2 flex-wrap items-center ">
// //                     <label  className='font-semibold'>
// //                         Type:
// //                     </label>
// //                     <div className="flex gap-2">
// //                         <input type="checkbox" id='all' className='w-5' onChange={handleChange} checked={sidebardata.type==='all'} />
// //                         <span>Rent & Sale</span>
// //                     </div>
// //                     <div className="flex gap-2">
// //                         <input type="checkbox" id='rent' className='w-5' 
// //                         onChange={handleChange}
// //                         checked={sidebardata.type==='rent'} />
// //                         <span>Rent</span>
// //                     </div>
// //                     <div className="flex gap-2">
// //                         <input type="checkbox" id='sale' className='w-5' onChange={handleChange} 
// //                         checked={sidebardata.type==='sale'}/>
// //                         <span>Sale</span>
// //                     </div>
// //                     <div className="flex gap-2">
// //                         <input type="checkbox" id='offer' className='w-5' 
// //                         onChange={handleChange}
// //                         checked={sidebardata.offer} />
// //                         <span>Offer</span>
// //                     </div>
// //                 </div>


// //                 <div className=" flex gap-2 flex-wrap items-center ">
// //                     <label className='font-semibold'>
// //                         Amenities:
// //                     </label>
// //                     <div className="flex gap-2">
// //                         <input type="checkbox" id='parking' className='w-5' 
// //                         onChange={handleChange}
// //                         checked={sidebardata.parking} />
// //                         <span>Parking</span>
// //                     </div>
// //                     <div className="flex gap-2">
// //                         <input type="checkbox" id='furnished' className='w-5'
// //                         onChange={handleChange}
// //                         checked={sidebardata.furnished} />
// //                         <span>Furnished</span>
// //                     </div>
              
// //                 </div>

// //                 <div className="">
// //                     <label className='font-semibold'>Sort:</label>
// //                     <select id="sort_order" className='border rounded-lg p-3'
// //                     onChange={handleChange}
// //                     defaultValue={'created_at_desc'}>
// //                     <option value='regularPrice_desc'>Price high to low</option>
// //                     <option value='regularPrice_asc'>Price low to high</option>
// //                     <option value='regularPrice_desc'>Latest</option>
// //                     <option value='regularPrice_asc'>Oldest</option>
// //                     </select>
// //                 </div>

// //                 <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90' >Search</button>
// //             </form>
// //         </div>

// //          {/*-------- Listing result--------------
// //         -------------------------------- */}

// //         <div className=" ">
// //             <h1 className='text-3xl font-semibold border-b p-3 text-slate-700 mt-5 ' >Listing results:</h1>
// //         </div>
// //     </div>
// //   )
// // }


// import React, { useEffect, useState } from 'react';
// import {useNavigate, location} from 'react-router-dom';

// export default function Search() {
//     const navigate = useNavigate();
//   const [sidebardata, setsidebardata] = useState({
//     searchTerm: '',
//     type: 'all',
//     parking: false,
//     furnished: false,
//     offer: false,
//     sort: 'created_at',
//     order: 'desc',
//   });

//     useEffect(()=>{
//         const urlParams= new URLSearchParams(location.search);
//         const searchTermFromUrl= urlParams.get('searchTerm');
//         const typeFromUrl= urlParams.get('type');
//         const parkingFromUrl= urlParams.get('parking');
//         const furnishedFromUrl= urlParams.get('furnished');
//         const offerFromUrl= urlParams.get('offer');
//         const sortFromUrl= urlParams.get('sort');
//         const orderFromUrl= urlParams.get('order');

//         if(
//             searchTermFromUrl ||
//             typeFromUrl ||
//             parkingFromUrl ||
//             furnishedFromUrl ||
//             offerFromUrl ||
//             sortFromUrl ||
//             orderFromUrl 
//         ){
//             setsidebardata({
//             searchTerm: searchTermFromUrl ||'',
//             type: typeFromUrl || 'all',
//             parking: parkingFromUrl=== 'true'? true : false,
//             furnished: furnishedFromUrl==='true'? true: false,
//             offer: offerFromUrl ==='true'? true: false,
//             sort: sortFromUrl || 'created_at',
//             order: orderFromUrl || 'desc'
//             })
        
//     };


//   const handleChange = (e) => {
//     const { id, value, checked } = e.target;

//     if (id === 'all' || id === 'rent' || id === 'sale') {
//       setsidebardata({ ...sidebardata, type: id });
//     } else if (id === 'searchTerm') {
//       setsidebardata({ ...sidebardata, searchTerm: value });
//     } else if (id === 'parking' || id === 'furnished' || id === 'offer') {
//       setsidebardata({ ...sidebardata, [id]: checked });
//     } else if (id === 'sort_order') {
//       const [sort, order] = value.split('_');
//       setsidebardata({ ...sidebardata, sort, order });
//     }
//   };

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     const urlParams= new URLSearchParams()
//     urlParams.set('searchTerm', sidebardata.searchTerm)
//     urlParams.set('type', sidebardata.type)
//     urlParams.set('parking', sidebardata.parking)
//     urlParams.set('furnished', sidebardata.furnished)
//     urlParams.set('offer',sidebardata.offer)
//     urlParams.set('sort', sidebardata.sort)
//     urlParams.set('order', sidebardata.order)
//     const searchQuery= urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   }

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
//         <form onSubmit={handleSubmit} className="flex flex-col gap-8">
//           <div className="flex items-center gap-2">
//             <label className="whitespace-nowrap font-semibold">Search Term:</label>
//             <input
//               type="text"
//               id="searchTerm"
//               placeholder="Search..."
//               className="border rounded-lg p-3 w-full"
//               value={sidebardata.searchTerm}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex gap-2 flex-wrap items-center">
//             <label className="font-semibold">Type:</label>
//             {['all', 'rent', 'sale'].map((type) => (
//               <div className="flex gap-2" key={type}>
//                 <input
//                   type="checkbox"
//                   id={type}
//                   className="w-5"
//                   onChange={handleChange}
//                   checked={sidebardata.type === type}
//                 />
//                 <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
//               </div>
//             ))}
//             <div className="flex gap-2">
//               <input
//                 type="checkbox"
//                 id="offer"
//                 className="w-5"
//                 onChange={handleChange}
//                 checked={sidebardata.offer}
//               />
//               <span>Offer</span>
//             </div>
//           </div>

//           <div className="flex gap-2 flex-wrap items-center">
//             <label className="font-semibold">Amenities:</label>
//             <div className="flex gap-2">
//               <input
//                 type="checkbox"
//                 id="parking"
//                 className="w-5"
//                 onChange={handleChange}
//                 checked={sidebardata.parking}
//               />
//               <span>Parking</span>
//             </div>
//             <div className="flex gap-2">
//               <input
//                 type="checkbox"
//                 id="furnished"
//                 className="w-5"
//                 onChange={handleChange}
//                 checked={sidebardata.furnished}
//               />
//               <span>Furnished</span>
//             </div>
//           </div>

//           <div>
//             <label className="font-semibold">Sort:</label>
//             <select
//               id="sort_order"
//               className="border rounded-lg p-3"
//               onChange={handleChange}
//               defaultValue="created_at_desc"
//             >
//               <option value="regularPrice_desc">Price high to low</option>
//               <option value="regularPrice_asc">Price low to high</option>
//               <option value="created_at_desc">Latest</option>
//               <option value="created_at_asc">Oldest</option>
//             </select>
//           </div>

//           <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90">
//             Search
//           </button>
//         </form>
//       </div>

//       <div>
//         <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">Listing results:</h1>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebardata, setsidebardata] = useState({
    searchTerm: '',
    type: 'all',
    parking: false,
    furnished: false,
    offer: false,
    sort: 'created_at',
    order: 'desc',
  });

        const [loading , setloading]=  useState(false);
        const [listings, setListings]= useState([]);
        const [showMore, setShowMore]=useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const typeFromUrl = urlParams.get('type');
    const parkingFromUrl = urlParams.get('parking');
    const furnishedFromUrl = urlParams.get('furnished');
    const offerFromUrl = urlParams.get('offer');
    const sortFromUrl = urlParams.get('sort');
    const orderFromUrl = urlParams.get('order');

    setsidebardata({
      searchTerm: searchTermFromUrl || '',
      type: typeFromUrl || 'all',
      parking: parkingFromUrl === 'true',
      furnished: furnishedFromUrl === 'true',
      offer: offerFromUrl === 'true',
      sort: sortFromUrl || 'created_at',
      order: orderFromUrl || 'desc',
    });

    const fetchListings = async ()=>{
        setloading(true);
        setShowMore(false);
        const searchQuery = urlParams.toString();
        const res = await fetch('/api/listing/get?'+searchQuery);
        const data = await res.json();
        if(data.length>8){
            setShowMore(true);
        } else{
            setShowMore(false);
        }
        setListings(data);
        setloading(false);
    }

    fetchListings();

  }, [location.search]);

  const handleChange = (e) => {
    const { id, value, checked } = e.target;

    if (['all', 'rent', 'sale'].includes(id)) {
      setsidebardata({ ...sidebardata, type: id });
    } else if (id === 'searchTerm') {
      setsidebardata({ ...sidebardata, searchTerm: value });
    } else if (['parking', 'furnished', 'offer'].includes(id)) {
      setsidebardata({ ...sidebardata, [id]: checked });
    } else if (id === 'sort_order') {
      const [sort, order] = value.split('_');
      setsidebardata({ ...sidebardata, sort, order });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set('searchTerm', sidebardata.searchTerm);
    urlParams.set('type', sidebardata.type);
    urlParams.set('parking', sidebardata.parking);
    urlParams.set('furnished', sidebardata.furnished);
    urlParams.set('offer', sidebardata.offer);
    urlParams.set('sort', sidebardata.sort);
    urlParams.set('order', sidebardata.order);
    navigate(`/search?${urlParams.toString()}`);
  };

  const onShowMoreClick= async()=>{
    const numberOfListings= listings.length;
    const startIndex= numberOfListings;
    const urlParams= new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery= urlParams.toString();
    const res =await fetch('/api/listing/get?'+searchQuery);
    const data= await res.json();
    if(data.length<9){
        setShowMore(false);
    }
    setListings([...listings, ...data]);
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">Search Term:</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Type:</label>
            {['all', 'rent', 'sale'].map((type) => (
              <div className="flex gap-2" key={type}>
                <input
                  type="radio"
                  name="type"
                  id={type}
                  className="w-5"
                  onChange={handleChange}
                  checked={sidebardata.type === type}
                />
                <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              </div>
            ))}
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="offer"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.offer}
              />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap items-center">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.parking}
              />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.furnished}
              />
              <span>Furnished</span>
            </div>
          </div>

          <div>
            <label className="font-semibold">Sort:</label>
            <select
              id="sort_order"
              className="border rounded-lg p-3"
              onChange={handleChange}
              value={`${sidebardata.sort}_${sidebardata.order}`}
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="created_at_desc">Latest</option>
              <option value="created_at_asc">Oldest</option>
            </select>
          </div>

          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90">
            Search
          </button>
        </form>
      </div>

      <div className='flex-1'>
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing results:
        </h1>
            <div className=" p-7 flex flex-wrap gap-4">
                {!loading && listings.length === 0 && (
                    <p className='text-xl text-slate-700 '> No Listing Found! </p>
                )}
                {loading&&(
                    <p className='text-xl text-slate-700 text-center w-full'>Loading...</p>
                )}

                {
                    !loading && 
                    listings &&
                    listings.map((listing)=>(
                        <ListingItem key = {listing._id} listing={listing}/>
                    ))
                }

                {showMore&&(
                    <button 
                    onClick={
                        onShowMoreClick}
                    className='text-green-700 hover:underline p-7 text-center w-full '
                    >
                        Show more
                    </button>
                )}
            </div>
      </div>
    </div>
  );
}
