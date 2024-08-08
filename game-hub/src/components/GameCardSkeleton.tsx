import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card width="300px" height="200px" borderRadius={10} overflow="hidden">
      <Skeleton></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
