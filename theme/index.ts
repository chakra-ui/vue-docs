import { extendTheme } from '@chakra-ui/vue-next';
import { textStyles } from './text-styles';
import { globalStyles } from './global-styles';
import { layerStyles } from './layer-styles';
import { semanticTokens } from './semantic-tokens';
import * as components from './components';

export default extendTheme({
  colors: {
    emerald: {
      DEFAULT: '#30855F',
      default: '#30855F',
      50: '#B6E5D0',
      100: '#A3DEC4',
      200: '#7ED0AB',
      300: '#58C393',
      400: '#3EAA7A',
      500: '#30855F',
      600: '#226044',
      700: '#153A29',
      800: '#07150F',
      900: '#000000'
    },
    discord: {
      primary: '#7289DA',
      accessible: '#5570D2'
    }
  },
  fonts: {
    heading:
      'DM Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: 'DM Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'IBM Plex Mono'
  },
  shadows: {
    outline: '0 0 0 4px rgba(47, 133, 90, 0.62)',
    search:
      '0 0 0 1px rgba(16,22,26,.1), 0 4px 8px rgba(16,22,26,.2), 0 18px 46px 6px rgba(16,22,26,.2)'
  },
  styles: {
    global: globalStyles
  },
  textStyles,
  layerStyles,
  semanticTokens,
  components
});
