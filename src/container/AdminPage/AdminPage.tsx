import {pages} from "../../constants";
import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {PageMutation} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";

const initialState = {
  id: "",
  title: "",
  content: "",
};

const AdminPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [pageMutation, setPageMutation] = useState<PageMutation>(initialState);

  const fetchOnePage = useCallback(async (id: string) => {
    const response = await axiosApi.get(`/pages/${id}.json`);
    if (response.data) {
      setPageMutation({
        id,
        ...response.data,
      });
    }
  }, []);

  useEffect(() => {
    if (id) {
      void fetchOnePage(id);
    } else {
      setPageMutation(initialState);
    }
  }, [id, fetchOnePage]);

  const onSelectChange = async (event: ChangeEvent<HTMLSelectElement>) => {
    const pageId = event.target.value;
    if (pageId) {
      navigate(`/pages/admin/${pageId}`);
    } else {
      setPageMutation(initialState);
    }
  };

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setPageMutation(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (id !== undefined) {
      await axiosApi.put(`/pages/${pageMutation.id}.json`, {
        title: pageMutation.title,
        content: pageMutation.content,
      });
    }
    navigate(`/pages/${pageMutation.id}`);
  };

  return (
    <div className="row mt-2 d-flex flex-column align-items-center">
      <div className="col-7">
        <h4 className="mb-3">This is admin page</h4>
        <form onSubmit={onSubmit}>
          <div className="form-group mb-3">
            <select
              name="pages"
              id="pages"
              className="form-select mt-2"
              value={pageMutation.id}
              onChange={onSelectChange}
            >
              <option value="">Select page to edit</option>
              {pages.map(page => (
                <option key={page.id} value={page.id}>{page.title}</option>
              ))}
            </select>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              value={pageMutation.title}
              onChange={onFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              className="form-control"
              value={pageMutation.content}
              onChange={onFieldChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
