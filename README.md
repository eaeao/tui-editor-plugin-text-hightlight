# TOAST UI Editor : Text Highlight Plugin

> This is a plugin of [TOAST UI Editor](https://github.com/nhn/tui.editor/tree/master/apps/editor) to highlight text with background colors.

[![npm version](https://img.shields.io/npm/v/@toast-ui/editor-plugin-text-highlight.svg)](https://www.npmjs.com/package/@toast-ui/editor-plugin-text-highlight)

![text-highlight](https://user-images.githubusercontent.com/37766175/121813686-28710680-cca8-11eb-87c6-1dc9625369b0.png)

## 🚩 Table of Contents

- [Bundle File Structure](#-bundle-file-structure)
- [Usage npm](#-usage-npm)
- [Usage CDN](#-usage-cdn)

## 📁 Bundle File Structure

### Files Distributed on npm

```
- node_modules/
  - @toast-ui/
    - editor-plugin-text-highlight/
      - dist/
        - toastui-editor-plugin-text-highlight.js
        - toastui-editor-plugin-text-highlight.css
```

### Files Distributed on CDN

The bundle files include all dependencies of this plugin.

```
- uicdn.toast.com/
  - editor-plugin-text-highlight/
    - latest/
      - toastui-editor-plugin-text-highlight.js
      - toastui-editor-plugin-text-highlight.min.js
      - toastui-editor-plugin-text-highlight.css
      - toastui-editor-plugin-text-highlight.min.css
```

## 📦 Usage npm

To use the plugin, [`@toast-ui/editor`](https://github.com/nhn/tui.editor/tree/master/apps/editor) must be installed.

> Ref. [Getting Started](https://github.com/nhn/tui.editor/blob/master/docs/en/getting-started.md)

### Install

```sh
$ npm install @toast-ui/editor-plugin-text-highlight
```

### Import Plugin

Along with the plugin, the plugin's dependency style must be imported. The `text-highlight` plugin has [TOAST UI Color Picker](https://github.com/nhn/tui.color-picker) as a dependency, and you need to add a CSS file of TOAST UI Color Picker.

#### ES Modules

```js
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-text-highlight/dist/toastui-editor-plugin-text-highlight.css';

import highlightSyntax from '@toast-ui/editor-plugin-text-highlight';
```

#### CommonJS

```js
require('tui-color-picker/dist/tui-color-picker.css');
require('@toast-ui/editor-plugin-text-highlight/dist/toastui-editor-plugin-text-highlight.css');

const highlightSyntax = require('@toast-ui/editor-plugin-text-highlight');
```

### Create Instance

#### Basic

```js
// ...
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-text-highlight/dist/toastui-editor-plugin-text-highlight.css';

import Editor from '@toast-ui/editor';
import highlightSyntax from '@toast-ui/editor-plugin-text-highlight';

const editor = new Editor({
  // ...
  plugins: [highlightSyntax]
});
```

## 🗂 Usage CDN

To use the plugin, the CDN files(CSS, Script) of `@toast-ui/editor` must be included.

### Include Files

```html
...
<head>
  ...
  <link
    rel="stylesheet"
    href="https://uicdn.toast.com/tui-color-picker/latest/tui-color-picker.min.css"
  />
  <link
    rel="stylesheet"
    href="https://uicdn.toast.com/editor-plugin-text-highlight/latest/toastui-editor-plugin-text-highlight.min.css"
  />
  ...
</head>
<body>
  ...
  <!-- Color Picker -->
  <script src="https://uicdn.toast.com/tui-color-picker/latest/tui-color-picker.min.js"></script>
  <!-- Editor -->
  <script src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
  <!-- Editor's Plugin -->
  <script src="https://uicdn.toast.com/editor-plugin-text-highlight/latest/toastui-editor-plugin-text-highlight.min.js"></script>
  ...
</body>
...
```

### Create Instance

#### Basic

```js
const { Editor } = toastui;
const { highlightSyntax } = Editor.plugin;

const editor = new Editor({
  // ...
  plugins: [highlightSyntax]
});
```

### [Optional] Use Plugin with Options

The `text-highlight` plugin can set options when used. Just add the plugin function and options related to the plugin to the array(`[pluginFn, pluginOptions]`) and push them to the `plugins` option of the editor.

The following options are available in the `text-highlight` plugin.

| Name              | Type             | Default Value | Description                      |
| ----------------- | ---------------- | ------------- | -------------------------------- |
| `preset`          | `Array.<string>` |               | Preset for color palette         |

```js
// ...
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-text-highlight/dist/toastui-editor-plugin-text-highlight.css';

import Editor from '@toast-ui/editor';
import highlightSyntax from '@toast-ui/editor-plugin-text-highlight';

const highlightSyntaxOptions = {
  preset: ['#FFFF00', '#FFE135', '#FFCC02', '#FFA500', '#FF6B6B']
};

const editor = new Editor({
  // ...
  plugins: [[highlightSyntax, highlightSyntaxOptions]]
});
```

## 🎨 Features

- **Text Highlighting**: Apply background colors to selected text
- **Preserve Existing Styles**: Maintains existing text formatting while adding highlights
- **Color Picker Integration**: Built-in color picker for easy color selection
- **Preset Colors**: Support for predefined highlight colors
- **Markdown & WYSIWYG Support**: Works seamlessly in both editing modes
- **Dark Mode Support**: Optimized for both light and dark themes

## 📖 Example Usage

### Basic Highlighting

1. Select the text you want to highlight
2. Click the highlight button (A icon with yellow background) in the toolbar
3. Choose your desired highlight color from the color picker
4. The selected text will be highlighted with the chosen background color

### Custom Preset Colors

You can define custom preset colors for quick access:

```js
const highlightOptions = {
  preset: [
    '#FFFF00',  // Yellow
    '#FFE135',  // Light Yellow
    '#FFCC02',  // Gold
    '#FFA500',  // Orange
    '#FF6B6B',  // Light Red
    '#4ECDC4',  // Turquoise
    '#45B7D1',  // Blue
    '#96CEB4',  // Green
    '#FFEAA7',  // Light Orange
    '#DDA0DD'   // Plum
  ]
};

const editor = new Editor({
  plugins: [[highlightSyntax, highlightOptions]]
});
```

This plugin is perfect for creating documents with emphasized text, study materials, or any content that benefits from visual highlighting.
