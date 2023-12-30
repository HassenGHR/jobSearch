import React, { useEffect, useState } from "react";
import Search from "../Components/SearchDiv/Search";
import Jobs from "../Components/JobDiv/Jobs";
import { MongoClient } from "mongodb";
import Value from "../Components/ValueDiv/Value";
import Layout from "../Components/Layout/Layout";

function Home({offers}) {
  const [currentPage, setcurrentPage] = useState(1);
  const [searchData, setSearchData] =  useState({})

  return (
    <Layout>
      <Search setSearchData={setSearchData} page={currentPage} />
      <Jobs offers={offers} queryData={searchData} setPage={setcurrentPage} />
      <Value />
    </Layout>
  );
}

const buildMongoQuery = ({
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
}) => {
  const filter = {};

  if (prop1) {
    filter["_source.position"] = {
      $regex: new RegExp(prop1, "i"),
    };
  }

  if (prop2) {
    filter["_source.employeeRaisonSociale"] = {
      $regex: new RegExp(prop2, "i"),
    };
  }

  if (prop3) {
    filter["_source.township"] = {
      $regex: new RegExp(prop3, "i"),
    };
  }

  if (prop4) {
    filter["_source.inscriptionDate"] = {
      $exists: true,
    };
  }

  if (prop5) {
    filter["_source.contractType"] = prop5;
  }

  if (prop6) {
    const experienceQuery = {};

    if (prop6 === "Débutant") {
      experienceQuery.$gte = 0;
      experienceQuery.$lte = 1;
    } else if (prop6 === "Junior") {
      experienceQuery.$gte = 2;
      experienceQuery.$lte = 4;
    } else if (prop6 === "Confirmé") {
      experienceQuery.$gte = 5;
      experienceQuery.$lte = 9;
    } else if (prop6 === "Senior") {
      experienceQuery.$gte = 10;
    }

    filter["_source.experience"] = experienceQuery;
  }

  return filter;
};

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
  const { prop1, prop2, prop3, prop4, prop5, prop6 } = context.query;

  const filter = buildMongoQuery({ prop1, prop2, prop3, prop4, prop5, prop6 });
  const currentPage = context.query.currentPage || 1;

  const BASE_PAGE_SIZE = 10;

  // Calculate dynamic page size based on the current page
  const dynamicPageSize = BASE_PAGE_SIZE + (currentPage - 1) * BASE_PAGE_SIZE;

  const skip = (currentPage - 1) * dynamicPageSize;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const offeersCollection = db.collection("Offers");

  const offers = await offeersCollection
    .find(filter)
    .sort({ inscriptionDate: -1 })
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
        experience: offer._source.experience,
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
