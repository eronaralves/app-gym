import { Image, IImageProps } from "native-base";


// Interfaces
interface UserPhotoProps extends IImageProps {
  size: number;
}

export function UserPhoto({ size, ...rest }: UserPhotoProps) {
  return (
    <Image
      w={size}
      h={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
      {...rest}
    />
  )
}