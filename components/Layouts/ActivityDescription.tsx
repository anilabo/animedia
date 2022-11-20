import { useCurrentUser } from "hooks/useCurrentUser";
import Link from "next/link";

type InitialProps = { activity: Activity };

const ActivityDescription = ({ activity }: InitialProps) => {
  const currentUser = useCurrentUser();
  let description = <p>hogehoge</p>;

  switch (activity.action) {
    case "follow":
      description = (
        <div className="flex">
          <div className="flex gap-2">
            <Link href={`/users/${activity.operative_user.uid}`}>
              <a className="text-green-500 font-semibold hover:underline">
                {currentUser?.uid == activity.operative_user.uid
                  ? "You"
                  : activity.operative_user.display_name}
              </a>
            </Link>{" "}
            followed{" "}
            <Link href={`/users/${activity.passive_user.uid}`}>
              <a className="text-green-500 font-semibold hover:underline">
                {currentUser?.uid == activity.passive_user.uid
                  ? "You"
                  : activity.passive_user.display_name}
              </a>
            </Link>
          </div>
          .
        </div>
      );
      break;
    default:
      break;
  }

  return description;
};

export default ActivityDescription;
