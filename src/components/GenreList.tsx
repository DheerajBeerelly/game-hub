import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import cropImage from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <HStack key={genre.id} paddingY="5px">
          <Image
            boxSize="32px"
            borderRadius={8}
            objectFit="cover"
            src={cropImage(genre.image_background)}
          />
          <ListItem>{genre.name}</ListItem>
        </HStack>
      ))}
    </List>
  );
};

export default GenreList;
