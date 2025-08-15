# wmap

  A utility for Wix Velo that provides convenient element selection using proxy-based syntax with full IDE autocomplete
  support. TypeScript definitions was modified from wix's @wix/velo-bind package.

## Installation

  ```bash
  npm install wmap-velo

  Usage

  ```javascript
  // Import the wmap function from the wmap-velo package
  // and use it to map Wix Velo elements to variables for easier access.
  // This allows you to use elements directly without the repetitive $w('#id') syntax.
  import { wmap } from 'wmap-velo';

  $w.onReady(function () {
      const {
          $button1,
          $text1,
          $input1
      } = wmap($w);

      // Now you can use elements directly without $w('#button1')
      $button1.onClick(() => {
          $text1.text = $input1.value;
      });
  });
  ```

!(assets/wmap_autocomplete.png)

## Features

- Cleaner syntax without repetitive $w('#id') calls
- Full IDE autocomplete support - Your IDE will suggest available element IDs and their methods
- Complete TypeScript support with Wix Velo type definitions
- Type-safe - Get compile-time errors for invalid element IDs
- Destructuring support for multiple elements
- Zero dependencies

  License

  MIT
