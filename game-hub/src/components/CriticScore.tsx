import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {

  let color = score > 80? "green": score > 70? "yellow": "";

  return <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">{score}</Badge>;
}

export default CriticScore;
