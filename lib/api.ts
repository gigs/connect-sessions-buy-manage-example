import { Plan } from "./schemas/plans";
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

export const createConnectSession = async (connectSession: any) => {
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(connectSession),
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
