import { QueryInput, Cache } from "@urql/exchange-graphcache";

export function updateQuery<Result, Query>(
	cache: Cache,
	queryInput: QueryInput,
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	result: any,
	updateFn: (res: Result, query: Query) => Query
): void {
	return cache.updateQuery(
		queryInput,
		(data) => updateFn(result, data as any) as any
	);
}
