import {
  Text,
  Image,
  HStack,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { GameQuery } from "../App";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  gameQuery: GameQuery;
}

function GenreList({ gameQuery, onSelectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl">Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginY="5px">
            <HStack marginY={3}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                width="32px"
                borderRadius={4}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                objectFit="cover"
                fontWeight={
                  genre.id === gameQuery.genre?.id ? "bold" : "normal"
                }
                fontSize={"lg"}
                variant="link"
                onClick={() => onSelectedGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
