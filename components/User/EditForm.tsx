const UserEditForm = () => {
  return (
    <div className="p-6 rounded-md border shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
      <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
      <form>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <label className="form-label font-medium">
              First Name : <span className="text-red-600">*</span>
            </label>
            <div className="form-icon relative mt-2">
              <i
                data-feather="user"
                className="w-4 h-4 absolute top-3 left-4"
              ></i>
              {/* <input type="text" className="form-input pl-12" placeholder="First Name:" id="firstname" name="name" required=""> */}
            </div>
          </div>
          <div>
            <label className="form-label font-medium">
              Last Name : <span className="text-red-600">*</span>
            </label>
            <div className="form-icon relative mt-2">
              <i
                data-feather="user-check"
                className="w-4 h-4 absolute top-3 left-4"
              ></i>
              {/* <input type="text" className="form-input pl-12" placeholder="Last Name:" id="lastname" name="name" required=""> */}
            </div>
          </div>
          <div>
            <label className="form-label font-medium">
              Your Email : <span className="text-red-600">*</span>
            </label>
            <div className="form-icon relative mt-2">
              <i
                data-feather="mail"
                className="w-4 h-4 absolute top-3 left-4"
              ></i>
              {/* <input type="email" className="form-input pl-12" placeholder="Email" name="email" required=""> */}
            </div>
          </div>
          <div>
            <label className="form-label font-medium">Occupation : </label>
            <div className="form-icon relative mt-2">
              <i
                data-feather="bookmark"
                className="w-4 h-4 absolute top-3 left-4"
              ></i>
              {/* <input name="name" id="occupation" type="text" className="form-input pl-12" placeholder="Occupation :"> */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div className="mt-5">
            <label className="form-label font-medium">Description : </label>
            <div className="form-icon relative mt-2">
              <i
                data-feather="message-circle"
                className="w-4 h-4 absolute top-3 left-4"
              ></i>
              <textarea
                name="comments"
                id="comments"
                className="form-input pl-11 h-28"
                placeholder="Message :"
              ></textarea>
            </div>
          </div>
        </div>

        {/* <input type="submit" id="submit" name="send" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5" value="Save Changes"> */}
      </form>
    </div>
  );
};

export default UserEditForm;
