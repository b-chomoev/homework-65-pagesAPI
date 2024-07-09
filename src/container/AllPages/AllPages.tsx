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
    <div className='row mt-2'>
      <div className='col'>
        {page && (
          pageName === 'about' && (
            <div key={page.id}>
              <h1>{page.title}</h1>
              <p>{page.content}</p>
            </div>
          )
        )}
        {page && (
          pageName === 'contacts' && (
            <div key={page.id}>
              <h1>{page.title}</h1>
              <p>{page.content}</p>
            </div>
          )
        )}
        {page && (
          pageName === 'divisions' && (
            <div key={page.id}>
              <h1>{page.title}</h1>
              <p>{page.content}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllPages;