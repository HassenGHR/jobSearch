import React, { useState, useEffect } from "react";

import SearchFields from "../Components/Search/Search";
import DummyDataCard from "../Components/Companies/Companies";
import ValueCompany from "../Components/ValueCompanyDiv/ValueCompanyDiv";
import { MongoClient } from "mongodb";
import Layout from "../Components/Layout/Layout";

const Companies = (props) => {
  const [searchData, setSearchData] = useState({});
  const [currentPage, setcurrentPage] = useState(1);


  return (
    <Layout>
      <SearchFields
      page = {currentPage}
        secteurs={props.extractedData}
        setSearchCompData={setSearchData}
      />
      <DummyDataCard
        data={props.extractedData}
        queryCompData={searchData}
        setPage = {setcurrentPage}
        
      />
      <ValueCompany />

    </Layout>
  );
};

const buildMongoQuery = ({
  prop1,
  prop2,
  prop3,
 
}) => {
  const filter = {};

  if (prop1) {
    filter["_source.employeeRaisonSociale"] = {
      $regex: new RegExp(prop1, "i"),
    };
  }

  if (prop2) {
    filter["_source.township"] = {
      $regex: new RegExp(prop2, "i"),
    };
  }

  if (prop3) {
    filter["_source.secteur"] = {
      $regex: new RegExp(prop3, "i"),
    };
  }

  return filter;
};

export async function getServerSideProps(context) {
  const currentPage = context.query.currentPage || 1;
  const BASE_PAGE_SIZE = 10;

  // Calculate dynamic page size based on the current page
  const dynamicPageSize = BASE_PAGE_SIZE + (currentPage - 1) * BASE_PAGE_SIZE;

  const { prop1, prop2, prop3} = context.query
  const filter = buildMongoQuery({ prop1, prop2, prop3})

  const skip = (currentPage - 1) * dynamicPageSize;
;

const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db();
  const offeersCollection = db.collection("Offers");

  const offers = await offeersCollection
    .find(filter)
    .skip(skip)
    .limit(dynamicPageSize)
    .toArray();

  client.close();

  return {
    props: {
      extractedData: offers.map((offer) => ({
        id: offer._id.toString(),
        intro: (() => {
          const intro = offer._source.intro;

          if (typeof intro === "string" && intro.trim() !== "") {
            return intro;
          } else {
            return null;
          }
        })(),
        photo: (() => {
          const photo = offer._source.photo;

          if (typeof photo === "string" && photo.trim() !== "") {
            return photo;
          } else {
            return null;
          }
        })(),
        cover: (() => {
          const photo = offer._source.photo;

          if (typeof cover === "string" && cover.trim() !== "") {
            return cover;
          } else {
            return null;
          }
        })(),

        address1: (() => {
          const address = offer._source.address;

          if (typeof address === "string" && address.trim() !== "") {
            return address;
          } else {
            return null;
          }
        })(),

        category: (() => {
          const category = offer._source.category;

          if (typeof category === "string" && category.trim() !== "") {
            return category;
          } else {
            return null;
          }
        })(),

        website: (() => {
          const website = offer._source.website;

          if (typeof website === "string" && website.trim() !== "") {
            return website;
          } else {
            return null;
          }
        })(),

        phone: (() => {
          const phone = offer._source.phone;

          if (typeof phone === "string" && phone.trim() !== "") {
            return phone;
          } else {
            return null;
          }
        })(),

        email: (() => {
          const email = offer._source.email;

          if (typeof email === "string" && email.trim() !== "") {
            return email;
          } else {
            return null;
          }
        })(),
        secteur: offer._source.secteur,
        address2: `${offer._source.township},${offer._source.state}`,
        compName: offer._source.employeeRaisonSociale,
        township: offer._source.township,
        state: offer._source.state,
        structureMobile: offer._source.structureMobile,
        totalAvailablePlaceCount: offer._source.availablePlaceCount, // Pass the value directly
      })),
      // revalidate: 3600,
    },
  };
}

export default Companies;
