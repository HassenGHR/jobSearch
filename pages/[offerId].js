import React, { useEffect, useState } from "react";
import ApplyOffer from "../Components/ApplyOffer/ApplyOffer";
import { MongoClient, ObjectId } from "mongodb";
import { useRouter } from "next/router";
import Louder from "../Components/Louder/Louder";

const OfferPage = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
  
    // Access the imageUrl query parameter from the router object
    const imageUrl = router.query.imageUrl || "";
  
    useEffect(() => {
      setLoading(false); // Set loading to false when the data is ready
    }, []); // This effect runs once after the initial render
  
    return (
      <div>
        {loading ? (
          <Louder />
        ) : (
          <ApplyOffer
            title={props.offerData.title}
            location={props.offerData.location}
            company={props.offerData.company}
            time={props.offerData.time}
            desc={props.offerData.desc}
            image={props.offerData.photo}
            contractType={props.offerData.contractType}
            candidatCount={props.offerData.candidatCount}
            experience={props.offerData.experience}
            structureMobile={props.offerData.structureMobile}
            dispositif={props.offerData.dispositif}
            isPostulable={props.offerData.isPostulable}
            qualificationLevel={props.offerData.qualificationLevel}
            domaine={props.offerData.domaine}
            availablePlaceCount={props.offerData.availablePlaceCount}
            structureLong={props.offerData.structureLong}
            structureLat={props.offerData.structureLat}
            offerId={props.offerData.offerId}
            structureEmail={props.offerData.structureEmail}
            structureTelephone={props.offerData.structureTelephone}
            scope={props.offerData.scope}
            secteur={props.offerData.secteur}
            permis={props.offerData.permis}
            ficheName={props.offerData.ficheName}
            instructionLevel={props.offerData.instructionLevel}
          />
        )}
      </div>
    );
  };

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Hassen:siV9VBKwMgdIZ4iv@cluster0.qft15hl.mongodb.net/JobOffers?retryWrites=true&w=majority"
  );
  const db = client.db();

  const OffersCollection = db.collection("Offers");

  const offers = await OffersCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: offers.map((offer) => ({
      params: { offerId: offer._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const offerId = context.params.offerId;
  

  const client = await MongoClient.connect(
    "mongodb+srv://Hassen:siV9VBKwMgdIZ4iv@cluster0.qft15hl.mongodb.net/JobOffers?retryWrites=true&w=majority"
  );
  const db = client.db();

  const OffersCollection = db.collection("Offers");

  const selectedOffer = await OffersCollection.findOne({
    
    _id: new ObjectId(offerId),
    
  });
  
  client.close();
  
  return {
    props: {
      offerData: {
        id: selectedOffer._id.toString(),
        title: selectedOffer._source.position,
        location: `${selectedOffer._source.township}, ${selectedOffer._source.state}`,
        time: selectedOffer._source.inscriptionDate,
        desc: selectedOffer._source.ficheName,
        company: selectedOffer._source.employeeRaisonSociale,
        contractType: selectedOffer._source.contractType,
        candidatCount: selectedOffer._source.candidatCount,
        experience: selectedOffer._source.experience,
        structureMobile: selectedOffer._source.structureMobile,
        dispositif: selectedOffer._source.dispositif,
        isPostulable: selectedOffer._source.isPostulable,
        qualificationLevel: selectedOffer._source.qualificationLevel,
        domaine: selectedOffer._source.domaine,
        availablePlaceCount: selectedOffer._source.availablePlaceCount,
        structureLong: selectedOffer._source.structureLong,
        structureLat: selectedOffer._source.structureLat,
        offerId: selectedOffer._source.offerId,
        structureEmail: selectedOffer._source.structureEmail,
        structureTelephone: selectedOffer._source.structureTelephone,
        scope: selectedOffer._source.scope,
        secteur: selectedOffer._source.secteur,
        permis: selectedOffer._source.permis,
        ficheName: selectedOffer._source.ficheName,
        instructionLevel: selectedOffer._source.instructionLevel,
        photo:(() => {
          const photo = selectedOffer._source.photo;

          if (typeof photo === "string" && photo.trim() !== "") {
            // If photo is a non-empty string, assume it's a valid URL
            return photo;
          } else {
            
            return null; // Or provide a default image URL if needed
          }
        })(),
      },
    },
  };
}

export default OfferPage;
