import { Plan } from "./schemas/plans";

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
