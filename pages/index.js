import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar/Navbar";
import Search from "../Components/SearchDiv/Search";
import Jobs from "../Components/JobDiv/Jobs";
import Value from "../Components/ValueDiv/Value";
import Footer from "../Components/FooterDiv/Footer";
import { MongoClient } from "mongodb";

function Home(props) {
  const [searchData, setSearchData] = useState({})
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Search setSearchData={setSearchData} />
      <Jobs offers={props.offers} queryData = {searchData} />
      <Value />
      <Footer />
    </div>
  );
}

export function formatDateAgo(date) {
  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - date;

  // Calculate the number of days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // If the days are 0, return "now", otherwise return the days + " ago"
  if (daysDifference === 0) {
    return "now";
  } else {
    return daysDifference + " day" + (daysDifference !== 1 ? "s" : "") + " ago";
  }
}

export async function getServerSideProps(context) {
  const currentPage = context.query.currentPage || 1;
  
  
  const BASE_PAGE_SIZE = 10;

  // Calculate dynamic page size based on the current page
  const dynamicPageSize = BASE_PAGE_SIZE + (currentPage - 1) * BASE_PAGE_SIZE;

  const skip = (currentPage - 1) * dynamicPageSize;

  const client = await MongoClient.connect(
    "mongodb+srv://Hassen:siV9VBKwMgdIZ4iv@cluster0.qft15hl.mongodb.net/JobOffers?retryWrites=true&w=majority"
  );
  const db = client.db();

  const offeersCollection = db.collection("Offers");
  const offers = await offeersCollection
    .find()
    .skip(skip)
    .limit(dynamicPageSize)
    .toArray();

  client.close();

  return {
    props: {
      offers: offers.map((offer) => ({
        title: offer._source.position,
        location: `${offer._source.township},${offer._source.state}`,
        id: offer._id.toString(),
        time: offer._source.inscriptionDate,
        desc: offer._source.ficheName,
        type: offer._source.contractType,
        company: offer._source.employeeRaisonSociale,
        experience:offer._source.experience,
        image: (() => {
          const photo = offer._source.photo;

          if (typeof photo === "string" && photo.trim() !== "") {
            // If photo is a non-empty string, assume it's a valid URL
            return photo;
          } else {
            return null; // Or provide a default image URL if needed
          }
        })(),
      })),
    },
    // revalidate: 3600,
  };
}


export default Home;
