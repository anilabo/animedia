import { PersonIcon } from "@radix-ui/react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineDescription } from "react-icons/md";

type InitialProps = { user: User };

const UserEditForm = ({ user }: InitialProps) => {
  const formItems = [
    {
      text: "Name",
      icon: <PersonIcon className="w-5 h-5" />,
      uneditable: false,
      defaultValue: user.display_name,
      rows: 1,
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
      rows: 8,
      required: false,
    },
  ];

  return (
    <div className="p-6 rounded-md border shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
      <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
      <form className="grid grid-cols-1 gap-5 text">
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
                placeholder={form.text}
                id={form.text}
                defaultValue={form.defaultValue}
                disabled={form.uneditable}
                rows={form.rows}
                required={form.required}
              ></textarea>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default UserEditForm;
