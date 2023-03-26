import { defineStyleConfig } from '@chakra-ui/vue-next';

export const Button = defineStyleConfig({
  baseStyle: {
    rounded: 'full'
  },
  defaultProps: {
    colorScheme: 'emerald'
  }
});
