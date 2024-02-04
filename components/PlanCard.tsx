import { Plan } from "@/lib/schemas/plans";
import { Button } from "./ui/button";
import prettyBytes from "pretty-bytes";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type PlanCardProps = {
  title: string;
  allowances: Plan["allowances"];
  price: Plan["price"];
  id?: string;
};

export const PlanCard = ({ title, allowances, price }: PlanCardProps) => {
  const description = () => {
    const dataString =
      allowances.dataBytes === null
        ? "Unlimited Data"
        : prettyBytes(allowances.dataBytes);

    const smsString =
      allowances.smsMessages === null
        ? "Unlimited SMS"
        : `${allowances.smsMessages} SMS`;

    const voiceString =
      allowances.voiceSeconds === null
        ? "Unlimited Voice"
        : `${allowances.voiceSeconds / 60 / 60} Hours Voice`;

    return `${dataString} - ${smsString} - ${voiceString}`;
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description()}</p>
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: price.currency,
          }).format(price.amount / 100)}
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="default">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};
