import { Suspense, lazy } from "react";

import { rootReducer } from "@stores/store";

const RepeaterApp = lazy(() => import("RepeaterApp/Repeater"))

const Repeater = () => (
  <div className="m-[20px]">
    <Suspense fallback={null}>
      <RepeaterApp rootReducer={rootReducer} />
    </Suspense>
  </div>
)

export default Repeater
