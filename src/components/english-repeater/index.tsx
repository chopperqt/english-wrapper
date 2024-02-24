import { Suspense, lazy } from "react";

const RepeaterApp = lazy(() => import("RepeaterApp/Home"))

export const EnglishRepeater = () => {
	return (
		<div>
			<Suspense>
				<RepeaterApp />
			</Suspense>
		</div>
	);
};
