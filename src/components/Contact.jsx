import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify';
import {db} from '../firebase';

//two props: `userRef` and `listing`
export default function Contact({userRef, listing}) {
const [landlord, setLandlord] = useState(null);
const [message, setMessage] = useState('');

useEffect(() => {
  //async function to get the landlord data from the database.
async function getLandlord(){
  // Reference to the 'users' collection in the database with a specific `userRef`.
  const docRef = doc(db, 'users', userRef)
  // Fetch the document snapshot from the database.
  const docSnap = await getDoc(docRef);
  // If it exists, set the landlord's data to the `landlord` state.
  if(docSnap.exists()){
    setLandlord(docSnap.data());
  }else{
    toast.error('Could not get landlord data');
  }
}
getLandlord();
 // The useEffect hook will run every time the `userRef` changes.
},[userRef]);

function onChange(e) {
  setMessage(e.target.value);
}

  return (
    <>
      {landlord !== null && (
<div className="flex flex-col w-full">
  <p>
    Contact {landlord.name} for the {listing.name.toLowerCase()}</p>
    <div className="mt-3 mb-6">
            <textarea
              name="message"
              id="message"
              rows="2"
              value={message}
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600"
            ></textarea>
          </div>
          <a
            href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}
          >
            <button className="px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center mb-6" type="button">
              Send Message
            </button>
          </a>
</div>
      )}
    </>
  );
}
// `mailto:` - The prefix that tells the browser this is an email link.
// `?Subject=` - Begins the query parameters, setting the subject of the email.
// `${listing.name}` - Uses the name of the listing as the subject of the email.
// `&body=` - Another query parameter, setting the body of the email.
// `${message}` - The actual content/message that will be put into the body of the email.