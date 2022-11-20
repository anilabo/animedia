import ActivityDescription from "components/Layouts/ActivityDescription";

type InitialProps = { activities: Activity[] };

const UserRecentActivityComponent = ({ activities }: InitialProps) => {

  return (
    <>
      {activities.map((activity) => (
        <div key={activity.id}>
          <ActivityDescription activity={activity} />
        </div>
      ))}
    </>
  );
};

export default UserRecentActivityComponent;
