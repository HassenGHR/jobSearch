import { useRef, useState, createContext, useContext } from 'react';

const MongoQueryContext = createContext();

export const MongoQueryProvider = ({ children }) => {
  const [mongoQuery, setMongoQuery] = useState({
    '_source.contractType': 'CDD',
    '_source.experience': { $gte: 0, $lte: 1 },
    '_source.inscriptionDate': -1,
  });

  const mongoQueryRef = useRef(mongoQuery);

  const setMongoQueryAndUpdateRef = (payload) => {
    setMongoQuery(payload);
    mongoQueryRef.current = payload;
  };

  return (
    <MongoQueryContext.Provider value={{ mongoQuery, setMongoQueryAndUpdateRef }}>
      {children}
    </MongoQueryContext.Provider>
  );
};

export const useMongoQuery = () => {
  return useContext(MongoQueryContext);
};;


export const buildMongoQuery = (searchData, mongoQuery) => {
    const filter = { ...mongoQuery }; 

    if (searchData.jobTitle) {
      filter['_source.position'] = {
        $search: searchData.jobTitle,
      };
    }

    if (searchData.company) {
      filter['_source.employeeRaisonSociale'] = {
        $regex: new RegExp(searchData.company, 'i'),
      };
    }

    if (searchData.location) {
      filter['_source.$or'] = [
        { 'township': { $regex: new RegExp(searchData.location, 'i') } },
        { 'state': { $regex: new RegExp(searchData.location, 'i') } },
      ];
    }

    if (searchData.type) {
      filter['_source.contractType'] = searchData.type;
    }

    if (searchData.level) {
      const experienceQuery = {};

      if (searchData.level === 'Débutant') {
        experienceQuery.$gte = 0;
        experienceQuery.$lte = 1;
      } else if (searchData.level === 'Junior') {
        experienceQuery.$gte = 2;
        experienceQuery.$lte = 4;
      } else if (searchData.level === 'Confirmé') {
        experienceQuery.$gte = 5;
        experienceQuery.$lte = 9;
      } else if (searchData.level === 'Senior') {
        experienceQuery.$gte = 10;
      }

      filter['_source.experience'] = experienceQuery;
    }
    return filter

}
