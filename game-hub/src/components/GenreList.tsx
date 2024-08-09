import { Text, Image, HStack, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({selectedGenre, onSelectedGenre}: Props) {
  const { data, isLoading, error } = useGenres();

  if(error) return null;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} marginY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              width="32px"
              borderRadius={4}
            />
            <Button fontWeight={genre.id === selectedGenre?.id? "bold": "normal"} fontSize={"lg"} variant="link" onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
