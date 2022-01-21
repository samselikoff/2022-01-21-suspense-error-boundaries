import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Card from "../components/card";
import Error from "../components/error";
import * as Icons from "../components/icons";
import Loader from "../components/loader";
import Stat from "../components/stat";

export default function Home() {
  return (
    <>
      <h3 className="mt-2 mb-5 text-lg font-medium leading-6 text-slate-900">
        Dashboard
      </h3>

      <Suspense fallback={<Loader />}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Card>
            <ErrorBoundary fallback={<Error>Could not fetch data.</Error>}>
              <Stat
                Icon={Icons.Twitter}
                label="Followers"
                endpoint="/api/twitter"
              />
            </ErrorBoundary>
          </Card>

          <Card>
            <Stat
              Icon={Icons.YouTube}
              label="Subscribers"
              endpoint="/api/youtube"
            />
          </Card>

          <Card>
            <Stat
              Icon={Icons.Instagram}
              label="Followers"
              endpoint="/api/instagram"
            />
          </Card>
        </div>
      </Suspense>
    </>
  );
}
