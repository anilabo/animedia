import Image from "next/image";

const UserSettingsComponent = () => {
  return (
    <>
      <div className="md:flex max-w-6xl mx-auto">
        <div className="lg:w-1/4 md:w-1/3 md:px-3">
          {/* <div className="relative md:-mt-48 -mt-32"> */}
          <div className="p-6 rounded border">
            <div className="profile-pic text-center mb-5">
              {/* <input id="pro-img" name="profile-image" type="file" className="hidden" onchange="loadFile(event)" /> */}
              <div>
                <div className="relative h-28 w-28 mx-auto">
                  <Image
                    src="https://lh3.googleusercontent.com/a/ALm5wu3Fw2h0Z_Jt4u_F3sLDf4Ff7j0hViNCVxySpnif=s96-c"
                    width={500}
                    height={500}
                    className="rounded"
                  />

                  {/* <img src="assets/images/client/05.jpg" className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt=""> */}
                  {/* <label className="absolute inset-0 cursor-pointer" for="pro-img"></label> */}
                </div>

                <div className="mt-4">
                  <h5 className="text-lg font-semibold">higakijin</h5>
                  <p className="text-slate-400">hm385.chejptks@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700">
              <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
                <li className="navbar-item account-menu">
                  <a
                    href="user-profile.html"
                    className="navbar-link text-slate-400 flex items-center py-2 rounded"
                  >
                    <span className="mr-2 text-[18px] mb-0">
                      <i className="uil uil-dashboard"></i>
                    </span>
                    <h6 className="mb-0 font-semibold">Profile</h6>
                  </a>
                </li>

                <li className="navbar-item account-menu">
                  <a
                    href="user-billing.html"
                    className="navbar-link text-slate-400 flex items-center py-2 rounded"
                  >
                    <span className="mr-2 text-[18px] mb-0">
                      <i className="uil uil-diary-alt"></i>
                    </span>
                    <h6 className="mb-0 font-semibold">Billing Info</h6>
                  </a>
                </li>

                <li className="navbar-item account-menu">
                  <a
                    href="user-payment.html"
                    className="navbar-link text-slate-400 flex items-center py-2 rounded"
                  >
                    <span className="mr-2 text-[18px] mb-0">
                      <i className="uil uil-credit-card"></i>
                    </span>
                    <h6 className="mb-0 font-semibold">Payment</h6>
                  </a>
                </li>

                <li className="navbar-item account-menu">
                  <a
                    href="user-invoice.html"
                    className="navbar-link text-slate-400 flex items-center py-2 rounded"
                  >
                    <span className="mr-2 text-[18px] mb-0">
                      <i className="uil uil-receipt"></i>
                    </span>
                    <h6 className="mb-0 font-semibold">Invoice</h6>
                  </a>
                </li>

                <li className="navbar-item account-menu">
                  <a
                    href="user-social.html"
                    className="navbar-link text-slate-400 flex items-center py-2 rounded"
                  >
                    <span className="mr-2 text-[18px] mb-0">
                      <i className="uil uil-process"></i>
                    </span>
                    <h6 className="mb-0 font-semibold">Social Profile</h6>
                  </a>
                </li>

                <li className="navbar-item account-menu">
                  <a
                    href="user-notification.html"
                    className="navbar-link text-slate-400 flex items-center py-2 rounded"
                  >
                    <span className="mr-2 text-[18px] mb-0">
                      <i className="uil uil-bell"></i>
                    </span>
                    <h6 className="mb-0 font-semibold">Notifications</h6>
                  </a>
                </li>

                <li className="navbar-item account-menu">
                  <a
                    href="user-setting.html"
                    className="navbar-link text-slate-400 flex items-center py-2 rounded"
                  >
                    <span className="mr-2 text-[18px] mb-0">
                      <i className="uil uil-setting"></i>
                    </span>
                    <h6 className="mb-0 font-semibold">Settings</h6>
                  </a>
                </li>

                <li className="navbar-item account-menu">
                  <a
                    href="auth-lock-screen.html"
                    className="navbar-link text-slate-400 flex items-center py-2 rounded"
                  >
                    <span className="mr-2 text-[18px] mb-0">
                      <i className="uil uil-power"></i>
                    </span>
                    <h6 className="mb-0 font-semibold">Sign Out</h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
          <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
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
                  <label className="form-label font-medium">
                    Occupation :{" "}
                  </label>
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
                  <label className="form-label font-medium">
                    Description :{" "}
                  </label>
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

          <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>

                <form>
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className="form-label font-medium">
                        Phone No. :
                      </label>
                      <div className="form-icon relative mt-2">
                        <i
                          data-feather="phone"
                          className="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        {/* <input name="number" id="number" type="number" className="form-input pl-12" placeholder="Phone :"> */}
                      </div>
                    </div>

                    <div>
                      <label className="form-label font-medium">
                        Website :
                      </label>
                      <div className="form-icon relative mt-2">
                        <i
                          data-feather="globe"
                          className="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        {/* <input name="url" id="url" type="url" className="form-input pl-12" placeholder="Url :"> */}
                      </div>
                    </div>
                  </div>

                  <button className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">
                    Add
                  </button>
                </form>
              </div>

              <div>
                <h5 className="text-lg font-semibold mb-4">
                  Change password :
                </h5>
                <form>
                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className="form-label font-medium">
                        Old password :
                      </label>
                      <div className="form-icon relative mt-2">
                        <i
                          data-feather="key"
                          className="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        {/* <input type="password" className="form-input pl-12" placeholder="Old password" required=""> */}
                      </div>
                    </div>

                    <div>
                      <label className="form-label font-medium">
                        New password :
                      </label>
                      <div className="form-icon relative mt-2">
                        <i
                          data-feather="key"
                          className="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        {/* <input type="password" className="form-input pl-12" placeholder="New password" required=""> */}
                      </div>
                    </div>

                    <div>
                      <label className="form-label font-medium">
                        Re-type New password :
                      </label>
                      <div className="form-icon relative mt-2">
                        <i
                          data-feather="key"
                          className="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        {/* <input type="password" className="form-input pl-12" placeholder="Re-type New password" required=""> */}
                      </div>
                    </div>
                  </div>

                  <button className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5">
                    Save password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSettingsComponent;
