import { useParams } from "react-router-dom";
import "../styles/List.scss";
import { useSelector, useDispatch } from "react-redux";
import { setListings } from "../redux/state";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer";

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const { search } = useParams();
  const listings = useSelector((state) => state.listings);

  const dispatch = useDispatch();

  const getSearchListings = async () => {
    try {
      const response = await fetch(`http://localhost:3001/properties/search/${search}`, {
        method: "GET",
      });

      const data = await response.json();

      if (data.length === 0) {
        setNoResults(true);
      } else {
        dispatch(setListings({ listings: data }));
        setNoResults(false);
      }

      setLoading(false);
    } catch (err) {
      console.log("Fetch Search List failed!", err.message);
      setNoResults(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchListings();
  }, [search]);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <h1 className="title-list">{search}</h1>
      {noResults ? (
        <h4>No results found for "{search}".</h4>
      ) : (
        <div className="list">
          {listings?.map(
            ({
              _id,
              creator,
              listingPhotoPaths,
              type,
              city,
              province,
              country,
              category,
              types,
              price,
              contactName,
              contactPhone,
              contactEmail,
              booking = false,
            }) => (
              <ListingCard
                key={_id}
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                type={type}
                city={city}
                province={province}
                country={country}
                category={category}
                types={types}
                price={price}
                contactName={contactName}
                contactPhone={contactPhone}
                contactEmail={contactEmail}
                booking={booking}
              />
            )
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default SearchPage;
