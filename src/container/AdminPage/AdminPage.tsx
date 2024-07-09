import {pages} from "../../constants";

const AdminPage = () => {


  return (
    <div className='row mt-2 d-flex flex-column align-items-center'>
      <div className='col-7 '>
        <h4>This is admin page</h4>
        <form>
          <div className='form-group'>
            <select name="pages" id="pages" className='form-select mt-2'>
              <option value="">Select page to edit</option>
              {pages.map(page => (
                <option key={page.id} value={page.id}>{page.title}</option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="title">Title</label>
            <input type="text" name='title' id='title' className='form-control'/>
          </div>
          <div className='form-group'>
            <label htmlFor="content">Content</label>
            <textarea name='content' id='content' className='form-control'/>
          </div>
          <button type='submit' className='btn btn-primary mt-2'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;