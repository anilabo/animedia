import Image from "next/image";
import Link from "next/link";
import ActivityDescription from "components/Layouts/ActivityDescription";

type InitialProps = { user: User };

const UserActivityLists = ({ user }: InitialProps) => {
  return (
    <div className="rounded border">
      <div className="px-4 py-2 border-b font-semibold text-gray-600">
        Recent Activities
      </div>
      <div>
        {user.active_notifications.map((activity) => (
          <div className="px-4 py-2 border-b" key={activity.id}>
            <div className="flex gap-4">
              <div className="h-12 w-12">
                <Image
                  src={activity.operative_user.photo_url}
                  width={400}
                  height={400}
                  className="rounded"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <ActivityDescription activity={activity} />
                {(activity.action == "follow" ||
                  activity.action == "followed") && (
                  <Link href={`/users/${activity.passive_user.uid}`}>
                    <a className="rounded border px-4 py-2 bg-gray-50 hover:bg-gray-100 flex gap-4">
                      <div className="h-12 w-12">
                        <Image
                          src={activity.passive_user.photo_url}
                          width={400}
                          height={400}
                          className="rounded"
                        />
                      </div>
                      <p className="my-auto text-gray-500 text-sm">
                        ミシシッピ川で神官をやってます。
                      </p>
                    </a>
                  </Link>
                )}
                {(activity.action == "will_watch" ||
                  activity.action == "watching" ||
                  activity.action == "opinion") && (
                  <>
                    <p className="text-gray-600">
                      {activity.watch_log?.opinion}
                    </p>
                    <Link href={`/animes/${activity.anime.public_uid}`}>
                      <a className="rounded border px-4 py-1 bg-gray-50 hover:bg-gray-100 flex gap-8">
                        <div className="w-28 flex flex-col">
                          <Image
                            src={activity.anime.thumbnail_url}
                            width={500}
                            height={400}
                            className="my-auto"
                          />
                        </div>
                        <p className="my-auto text-gray-500 text-sm">
                          {activity.anime.title}
                        </p>
                      </a>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActivityLists;
