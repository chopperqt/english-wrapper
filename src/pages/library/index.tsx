import {
  Suspense,
  lazy,
} from "react";

import { rootReducer } from "@stores/store";

const LibraryApp = lazy(() => import("LibraryApp/Library"))

const Library = () => (
  <div className="m-[20px]">
    <Suspense fallback={null}>
      <LibraryApp rootReducer={rootReducer} />
    </Suspense>
  </div>
)

export default Library 
