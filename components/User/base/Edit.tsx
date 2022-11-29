const UserEditComponent = () => {
  return (
    <>
      <div className="flex flex-col text-gray-600">
        <div className="max-w-6xl mx-auto border rounded w-full">
          <p className="font-semibold px-4 py-2 border-b">Edit Profile</p>
          <div className="px-4 py-2">
            <ul>
              <li>Name：higakijin</li>
              <li>Email：hm385.chejptks@gmail.com</li>
              <li>Image：</li>
              <li>Introduction：</li>
            </ul>
            <p className="text-gray-400 text-sm">2022/11/01に登録</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditComponent;
