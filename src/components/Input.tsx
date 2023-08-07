
import { Input as InputNativeBase, IInputProps, FormControl } from 'native-base'

// Interface 
interface InputProps extends IInputProps {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: InputProps) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4} >
      <InputNativeBase
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        placeholderTextColor="gray.300"
        borderRadius={2}
        color="white"
        bg="gray.700"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500"
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500"
        }}
        
        {...rest}
      />

      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}