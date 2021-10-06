import { dedupExchange, fetchExchange, subscriptionExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import { devtoolsExchange } from "@urql/devtools";
import { SubscriptionClient } from "subscriptions-transport-ws";
import ws from "isomorphic-ws";
import { updateQuery } from "./updateQuery";
import { SSRExchange, PartialNextContext } from "next-urql";

const cache = cacheExchange({
	// schema: schema,
	keys: {},
	resolvers: {},
	updates: {
		Subscription: {},

		Mutation: {},
	},
});

export const createUrqlClient = (
	ssrExchange: SSRExchange,
	_ctx: PartialNextContext
): any => ({
	url: process.env.NEXT_PUBLIC_API_URL + "graphql",
	exchanges: [
		devtoolsExchange,
		dedupExchange,
		cache,
		ssrExchange,
		fetchExchange,
	],
	fetchOptions: {
		credentials: "include",
	},
});
