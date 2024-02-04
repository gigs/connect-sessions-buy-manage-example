import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type PlanCardProps = {
  title: string;
  description: string;
  id?: string;
};

export const PlanCard = ({ title, description }: PlanCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="default">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};
