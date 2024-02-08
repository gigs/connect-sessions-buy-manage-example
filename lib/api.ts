import { auth } from "./applicationMocks";
import { Addon } from "./schemas/addon";
import { Plan } from "./schemas/plans";
import { Subscription } from "./schemas/subscription";
import { User } from "./schemas/users";

const baseUrl = `https://api.gigs.com/projects/${process.env.GIGS_PROJECT}/`;
const fetchUrl = (path: string) => `${baseUrl}/${path}`;

const headers = new Headers({
  Authorization: `Bearer ${process.env.GIGS_API_KEY}`,
  Accept: "application/json",
  "Content-Type": "application/json",
  cache: "no-cache",
});

type PlansResponse = {
  object: "list";
  items: Plan[];
  moreItemsAfter?: boolean;
  moreItemsBefore?: boolean;
};

export const getPlans = async (): Promise<PlansResponse> => {
  const response = await fetch(fetchUrl("plans"), {
    headers,
  });

  return response.json();
};

export const getSubscriptionsByUser = async (): Promise<Subscription[]> => {
  const currentUser = auth.getUser();
  const userRes = await findUser(currentUser.email!);
  const existingUser = userRes.items[0];

  const userResponse = await findUser(existingUser.email);

  if (!userResponse.items.length) {
    // TODO: Error handling?
    return [];
  }

  const userId = userResponse.items[0].id;
  const response = await fetch(
    fetchUrl(`subscriptions?user=${userId}&status=active`),
    {
      headers,
    }
  );

  const data = await response.json();
  return data.items.length ? data.items : [];
};

type UsersResponse = {
  object: "list";
  items: User[];
  moreItemsAfter?: boolean;
  moreItemsBefore?: boolean;
};

export const findUser = async (email: string): Promise<UsersResponse> => {
  const response = await fetch(fetchUrl("users/search"), {
    headers,
    method: "POST",
    body: JSON.stringify({ email: email }),
  });

  return response.json();
};

export const getAddons = async (provider: string): Promise<Addon[]> => {
  const response = await fetch(
    fetchUrl(`addons?status=available&provider=${provider}`),
    {
      headers,
    }
  );

  const data = await response.json();
  return data.items.length ? data.items : [];
};

export const createConnectSession = async (connectSession: any) => {
  const options: RequestInit = {
    method: "POST",
    headers,
    body: JSON.stringify(connectSession),
    cache: "no-store", // Make sure we do not cache Connect Sessions as they're single use only
  };

  try {
    const response = await fetch(fetchUrl("connectSessions"), options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
