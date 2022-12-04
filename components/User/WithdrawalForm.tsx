const UserWithdrawalForm = () => {
  return (
    <div className="border rounded shadow p-6 flex flex-col gap-4">
      <h5 className="text-lg font-semibold mb-4">Withdrawal :</h5>
      <div>
        <p>Delete account? </p>
        <p>
          All current user's data will be deleted (such as opinion, comments, watch
          logs).
        </p>
        <p className="text-red-500 font-bold">
          This operation can never be returned.
        </p>
      </div>
      <button className="rounded bg-red-500 text-white hover:bg-red-600 px-4 py-1 w-fit">
        Yes, I understand. Delete user!
      </button>
    </div>
  );
};

export default UserWithdrawalForm;
