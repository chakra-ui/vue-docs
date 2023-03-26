import { chakra } from '@chakra-ui/vue-next';

const EditableNotice = defineComponent({
  name: 'EditableNotice',
  setup(_, { attrs }) {
    return () => {
      return (
        <chakra.div
          position="absolute"
          width="full"
          top="-1.25em"
          left="0"
          roundedTop="8px"
          bg="#011627"
          py="2"
          zIndex="0"
          letterSpacing="wide"
          color="gray.400"
          fontSize="xs"
          fontWeight="semibold"
          textAlign="center"
          textTransform="uppercase"
          pointerEvents="none"
          {...attrs}
        >
          Editable Example
        </chakra.div>
      );
    };
  }
});

export default EditableNotice;
