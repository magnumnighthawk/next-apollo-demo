import React, { Suspense } from "react";
import { useQuery } from "@apollo/client";
import Spinner from "components/Spinner";
const HeroCard = React.lazy(() => import("components/HeroCard"));
const UserCards = React.lazy(() => import("components/UserCards"));
import { ListWrapper, Button, LoadMoreWrapper } from "styles";
import { ALL_USERS_QUERY } from "lib/queries";

export default function Page() {
  const { loading, error, data, refetch } = useQuery(ALL_USERS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  if (error) return <div>Error loading players.</div>;
  if (loading && !data) return <Spinner />;

  return (
    <Suspense fallback={<Spinner />}>
      <ListWrapper>
        <HeroCard />
        <UserCards users={data?.users} />
      </ListWrapper>
      <LoadMoreWrapper>
        {!loading && (
          <Button small onClick={() => refetch()}>
            Load more
          </Button>
        )}
        {loading && <Spinner noMargin />}
      </LoadMoreWrapper>
    </Suspense>
  );
}
