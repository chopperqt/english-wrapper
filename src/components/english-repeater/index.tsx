import { Suspense, lazy } from "react";

import { rootReducer } from "../../stores/store";

const RepeaterApp = lazy(() => import("RepeaterApp/Home"))

export const EnglishRepeater = () => {
	return (
		<div>
			<Suspense>
				<RepeaterApp rootReducer={rootReducer} />
			</Suspense>
		</div>
	);
};
