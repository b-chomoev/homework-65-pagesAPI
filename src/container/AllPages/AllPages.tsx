import {useCallback, useEffect, useState} from "react";
import {ApiPages} from "../../types";
import axiosApi from "../../axiosApi";
import {useParams} from "react-router-dom";

const AllPages = () => {
  const {pageName} = useParams();
  const [page, setPage] = useState<ApiPages | null>(null);

  const fetchData = useCallback(async () => {
    const response = await axiosApi.get(`/pages/${pageName}.json`);

    const pagesResponse = response.data;

    if (pagesResponse !== null) {
      setPage(pagesResponse);
    } else {
      setPage(null);
    }
  }, [pageName]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div className="row mt-2">
      <div className="col">
        {page && (
          pageName === "about" && (
            <div className="container mt-5" key={page.id}>
              <div className="row">
                <div className="col text-center">
                  <h1 className="display-4" style={{color: "#28a745"}}>{page.title}</h1>
                  <hr className="my-4"/>
                  <p>
                    We are dedicated to providing the best services to our customers. Our team is committed to ensuring
                    customer satisfaction and delivering top-notch products. Feel free to reach out to us with any
                    questions or feedback.
                  </p>
                  <a className="btn btn-success btn-lg" href="/pages/contacts" role="button">Contact Us</a>
                </div>
              </div>
            </div>
          )
        )}
        {page && (
          pageName === "contacts" && (
            <div className="container mt-5" key={page.id}>
              <div className="row">
                <div className="col text-center">
                  <h1 className="display-4" style={{color: "#dc3545"}}>{page.title}</h1>
                  <p className="lead">Get in touch with us for any queries or support.</p>
                  <hr className="my-4"/>
                  <p>{page.content}</p>
                </div>
              </div>
            </div>
          )
        )}
        {page && (
          pageName === "divisions" && (
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <h1 className="display-4 mb-4" style={{color: "#6c757d"}}>Division Page</h1>
                  <p className="lead">Welcome to the division page of our website.</p>
                  <hr className="my-4"/>
                  <p className="text-muted">{page.content}</p>
                  <a className="btn btn-outline-secondary btn-lg mt-3" href="/" role="button">Back to Home</a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllPages;