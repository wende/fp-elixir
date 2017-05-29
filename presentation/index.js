import React, { Component } from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Markdown
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import { SnippetSlide } from './utils';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

import * as s from './slides';
const slides = Object.keys(s).reduce((acc, key) => acc.concat(s[key]), []);

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
};

preloader(images);

const theme = createTheme(
  {
    primary: 'rgb(45, 45, 45)',
    secondary: 'white',
    tertiary: 'hotpink'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['zoom']} transitionDuration={500} theme={theme}>
        {slides.map((slide, index) => {
          return React.cloneElement(slide, { key: index });
        })}

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the
            presentation/index.js
            file to get started
          </Text>
        </Slide>
        <Slide>
          <SnippetSlide
            snippets={[
              { lang: 'elixir', source: require('raw-loader!../assets/qs.ex') },
              { lang: 'haskell', source: require('raw-loader!../assets/qs.hs') }
            ]}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Markdown>{`
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
          `}</Markdown>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="elixir"
          code={require('raw-loader!../assets/qs.ex')}
          ranges={[
            { loc: [0, 36], title: 'Walking through some code' },
            { loc: [0, 1], title: 'The Beginning' },
            { loc: [1, 2] },
            { loc: [1, 2], note: 'Heres a note!' },
            { loc: [2, 8] }
          ]}
        />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
