import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Card from "../components/card";
import Error from "../components/error";
import * as Icons from "../components/icons";
import Spinner from "../components/spinner";
import Stat from "../components/stat";
import Nav from "../components/nav";

export default function Demo2() {
  return (
    <>
      <Nav />

      <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2">
        <Card>
          <ErrorBoundary fallback={<Error>Could not fetch data.</Error>}>
            <Suspense fallback={<Spinner />}>
              <Stat
                Icon={Icons.Twitter}
                label="Followers"
                endpoint="/api/twitter?v=2"
              />
            </Suspense>
          </ErrorBoundary>
        </Card>

        <Card>
          <ErrorBoundary fallback={<Error>Could not fetch data.</Error>}>
            <Suspense fallback={<Spinner />}>
              <Stat
                Icon={Icons.YouTube}
                label="Subscribers"
                endpoint="/api/youtube?v=2"
              />
            </Suspense>
          </ErrorBoundary>
        </Card>

        <Card>
          <ErrorBoundary fallback={<Error>Could not fetch data.</Error>}>
            <Suspense fallback={<Spinner />}>
              <Stat
                Icon={Icons.Instagram}
                label="Followers"
                endpoint="/api/instagram?v=2"
              />
            </Suspense>
          </ErrorBoundary>
        </Card>
      </div>
    </>
  );
}
