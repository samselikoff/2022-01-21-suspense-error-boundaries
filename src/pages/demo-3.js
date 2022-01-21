import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Card from "../components/card";
import Error from "../components/error";
import * as Icons from "../components/icons";
import Loader from "../components/loader";
import Stat from "../components/stat";
import Nav from "../components/nav";

export default function Demo1() {
  return (
    <>
      <Nav />

      <Suspense fallback={<Loader />}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Card>
            <ErrorBoundary fallback={<Error>Could not fetch data.</Error>}>
              <Stat
                Icon={Icons.Twitter}
                label="Followers"
                endpoint="/api/twitter?v=3"
              />
            </ErrorBoundary>
          </Card>

          <Card>
            <ErrorBoundary fallback={<Error>Could not fetch data.</Error>}>
              <Stat
                Icon={Icons.YouTube}
                label="Subscribers"
                endpoint="/api/youtube?v=3"
              />
            </ErrorBoundary>
          </Card>

          <Card>
            <ErrorBoundary fallback={<Error>Could not fetch data.</Error>}>
              <Stat
                Icon={Icons.Instagram}
                label="Followers"
                endpoint="/api/instagram?v=3"
              />
            </ErrorBoundary>
          </Card>
        </div>
      </Suspense>
    </>
  );
}
