import { Badge } from "@chakra-ui/react";

interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  let color =
    criticScore > 75 ? "green" : criticScore > 60 ? "yellow" : "white";
  return (
    <Badge colorScheme={color} fontSize="14px" borderRadius="4px">
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
