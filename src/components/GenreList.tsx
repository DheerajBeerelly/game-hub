import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import cropImage from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginTop={3} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <HStack key={genre.id} paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
              src={cropImage(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              variant="link"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List>
    </>
  );
};

export default GenreList;
