import { CButton } from '@chakra-ui/vue-next';

const CopyButton = defineComponent({
  name: 'CopyButton',
  setup(_, { attrs, slots }) {
    return () => {
      return (
        <CButton
          size="sm"
          position="absolute"
          textTransform="uppercase"
          colorScheme="emerald"
          fontSize="xs"
          height="24px"
          top={0}
          zIndex="1"
          right="1.25em"
          {...attrs}
        >
          {slots.default?.()}
        </CButton>
      );
    };
  }
});

export default CopyButton;
