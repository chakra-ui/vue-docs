import { chakra } from '@chakra-ui/vue-next';

const CodeContainer = defineComponent({
  name: 'CodeContainer',
  setup(_, { attrs, slots }) {
    return () => {
      return (
        <chakra.div
          p="3"
          pt="5"
          rounded="8px"
          my="8"
          bg="#011627"
          color="#eee"
          {...attrs}
        >
          {slots}
        </chakra.div>
      );
    };
  }
});

export default CodeContainer;
