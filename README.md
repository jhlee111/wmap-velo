# wmap

  A utility for Wix Velo that provides convenient element selection using proxy-based syntax with full IDE autocomplete
  support.

  ## Installation

  ```bash
  npm install @jhlee111/wmap-velo

  Usage

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

  Features

  - Cleaner syntax without repetitive $w('#id') calls
  - Full IDE autocomplete support - Your IDE will suggest available element IDs and their methods
  - Complete TypeScript support with Wix Velo type definitions
  - Type-safe - Get compile-time errors for invalid element IDs
  - Destructuring support for multiple elements
  - Zero dependencies

  How Autocomplete Works

  When you type const { $ } = wmap($w), your IDE will automatically suggest all available element IDs from your Wix page,
  prefixed with $. Each element comes with its full Wix Velo API autocomplete.

  License

  MIT
