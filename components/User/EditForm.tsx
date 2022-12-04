import { PersonIcon } from "@radix-ui/react-icons";
import SpinnerForButton from "components/Layouts/Navbar/SpinnerForButton";
import ProgressBar from "components/Layouts/ProgressBar";
import { useCurrentUser } from "hooks/useCurrentUser";
import { FormEvent, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineDescription } from "react-icons/md";
import { toast } from "react-toastify";
import { updateUser } from "services/user/update";

type InitialProps = { user: User };

const UserEditForm = ({ user }: InitialProps) => {
  const formItems = [
    {
      text: "Name",
      icon: <PersonIcon className="w-5 h-5" />,
      uneditable: false,
      defaultValue: user.display_name,
      onChange: (e: any) => setDisplayName(e.target.value),
      rows: 1,
      minLength: 5,
      maxLength: 20,
      required: true,
    },
    {
      text: "Email",
      icon: <HiOutlineMail className="w-5 h-5" />,
      uneditable: true,
      defaultValue: user.email,
      rows: 1,
      required: true,
    },
    {
      text: "Description",
      icon: <MdOutlineDescription className="w-5 h-5" />,
      uneditable: false,
      defaultValue: user.introduction,
      onChange: (e: any) => setIntroduction(e.target.value),
      rows: 8,
      required: false,
      maxLength: 200,
    },
  ];

  const currentUser = useCurrentUser();
  const [displayName, setDisplayName] = useState(user.display_name);
  const [introduction, setIntroduction] = useState(user.introduction);
  const query = { user: { display_name: displayName, introduction } };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    currentUser &&
      updateUser(currentUser, query)
        .then(() => {
          toast.success("updated!");
        })
        .catch((error) => alert(error));
  };

  return (
    <div className="p-6 rounded-md border shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
      <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="grid grid-cols-1 gap-5 text"
      >
        {formItems.map((form, index) => (
          <div key={index}>
            <label className="form-label">
              {form.text} :
              {form.required && <span className="text-red-600">*</span>}
            </label>
            <div className="form-icon relative mt-2">
              <div className="absolute top-3 left-4">{form.icon}</div>
              <textarea
                className={`rounded border-gray-300 focus:ring-0 focus:border-green-400 pl-12 w-full ${
                  form.uneditable && "bg-gray-100 cursor-not-allowed"
                }`}
                onChange={form.onChange}
                placeholder={form.text}
                id={form.text}
                defaultValue={form.defaultValue}
                disabled={form.uneditable}
                rows={form.rows}
                required={form.required}
                minLength={form.minLength}
                maxLength={form.maxLength}
              ></textarea>
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-fit px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          update
        </button>
      </form>
    </div>
  );
};

export default UserEditForm;
