import { useCurrentUser } from "hooks/useCurrentUser";
import Link from "next/link";
import { memo } from "react";

type InitialProps = { activity: Activity };

const ActivityDescription = memo(({ activity }: InitialProps) => {
  const currentUser = useCurrentUser();
  const subject = () => (
    <Link href={`/users/${activity.operative_user.uid}`}>
      <a className="text-green-500 font-semibold hover:underline">
        {currentUser?.uid == activity.operative_user.uid
          ? "You"
          : `${activity.operative_user.display_name}`}
      </a>
    </Link>
  );
  const target = () => (
    <Link href={`/users/${activity.passive_user.uid}`}>
      <a className="text-green-500 font-semibold hover:underline">
        {currentUser?.uid == activity.passive_user.uid
          ? "You"
          : activity.passive_user.display_name}
      </a>
    </Link>
  );
  let description;
  switch (activity.action) {
    case "follow":
      description = <>followed {target()}</>;
      break;
    case "will_watch":
      description = (
        <>
          {`added an anime as`}
          <p className="font-semibold">watch later</p>
        </>
      );
      break;
    case "watching":
      description = (
        <>
          {`added an anime as`}
          <p className="font-semibold">watching</p>
        </>
      );
      break;
    case "opinion":
      description = <>{`posted a review`}</>;
      break;
  }

  return (
    <div className="flex">
      <div className="flex gap-2">
        {subject()}
        {description}
      </div>
      .
    </div>
  );
});

export default ActivityDescription;
