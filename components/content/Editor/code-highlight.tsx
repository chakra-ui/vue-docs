import { computed } from 'vue';
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';

import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-jsx';

export default defineComponent({
  name: 'CodeHighlight',
  props: {
    code: String as PropType<string>,
    language: String as PropType<string>
  },
  setup(props) {
    const lang = computed(() => {
      if (props.language === 'vue') {
        return 'html';
      }
      return props.language;
    });

    const highlighter = (code: string) => {
      // @ts-ignore
      return highlight(code.trim(), languages?.[lang.value]); // languages.<insert language> to return html with markup
    };

    return () => (
      <PrismEditor
        class="code-highlighter"
        modelValue={props.code}
        highlight={highlighter}
        readonly
      />
    );
  }
});
