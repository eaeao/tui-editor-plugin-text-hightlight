/*!
 * TOAST UI Editor : Color Syntax Plugin
 * @version 1.0.0 | Fri Jul 04 2025
 * @author undefined
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tui-color-picker"));
	else if(typeof define === 'function' && define.amd)
		define(["tui-color-picker"], factory);
	else if(typeof exports === 'object')
		exports["toastui"] = factory(require("tui-color-picker"));
	else
		root["toastui"] = root["toastui"] || {}, root["toastui"]["Editor"] = root["toastui"]["Editor"] || {}, root["toastui"]["Editor"]["plugin"] = root["toastui"]["Editor"]["plugin"] || {}, root["toastui"]["Editor"]["plugin"]["uml"] = factory(root["tui"]["colorPicker"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__262__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 262:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__262__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ colorSyntaxPlugin; }
});

// EXTERNAL MODULE: external {"commonjs":"tui-color-picker","commonjs2":"tui-color-picker","amd":"tui-color-picker","root":["tui","colorPicker"]}
var external_commonjs_tui_color_picker_commonjs2_tui_color_picker_amd_tui_color_picker_root_tui_colorPicker_ = __webpack_require__(262);
;// ./src/i18n/langs.ts
function addLangs(i18n) {
    i18n.setLanguage('ar', {
        'Text color': 'لون النص',
    });
    i18n.setLanguage(['cs', 'cs-CZ'], {
        'Text color': 'Barva textu',
    });
    i18n.setLanguage(['de', 'de-DE'], {
        'Text color': 'Textfarbe',
    });
    i18n.setLanguage(['en', 'en-US'], {
        'Text color': 'Text color',
    });
    i18n.setLanguage(['es', 'es-ES'], {
        'Text color': 'Color del texto',
    });
    i18n.setLanguage(['fi', 'fi-FI'], {
        'Text color': 'Tekstin väri',
    });
    i18n.setLanguage(['fr', 'fr-FR'], {
        'Text color': 'Couleur du texte',
    });
    i18n.setLanguage(['gl', 'gl-ES'], {
        'Text color': 'Cor do texto',
    });
    i18n.setLanguage(['hr', 'hr-HR'], {
        'Text color': 'Boja teksta',
    });
    i18n.setLanguage(['it', 'it-IT'], {
        'Text color': 'Colore del testo',
    });
    i18n.setLanguage(['ja', 'ja-JP'], {
        'Text color': '文字色相',
    });
    i18n.setLanguage(['ko', 'ko-KR'], {
        'Text color': '글자 색상',
    });
    i18n.setLanguage(['nb', 'nb-NO'], {
        'Text color': 'Tekstfarge',
    });
    i18n.setLanguage(['nl', 'nl-NL'], {
        'Text color': 'Tekstkleur',
    });
    i18n.setLanguage(['pl', 'pl-PL'], {
        'Text color': 'Kolor tekstu',
    });
    i18n.setLanguage(['pt', 'pt-BR'], {
        'Text color': 'Cor do texto',
    });
    i18n.setLanguage(['ru', 'ru-RU'], {
        'Text color': 'Цвет текста',
    });
    i18n.setLanguage(['sv', 'sv-SE'], {
        'Text color': 'Textfärg',
    });
    i18n.setLanguage(['tr', 'tr-TR'], {
        'Text color': 'Metin rengi',
    });
    i18n.setLanguage(['uk', 'uk-UA'], {
        'Text color': 'Колір тексту',
    });
    i18n.setLanguage('zh-CN', {
        'Text color': '文字颜色',
    });
    i18n.setLanguage('zh-TW', {
        'Text color': '文字顏色',
    });
}

;// ./src/utils/dom.ts
function hasClass(element, className) {
    return element.classList.contains(className);
}
function findParentByClassName(el, className) {
    let currentEl = el;
    while (currentEl && !hasClass(currentEl, className)) {
        currentEl = currentEl.parentElement;
    }
    return currentEl;
}
function removeProseMirrorHackNodes(html) {
    const reProseMirrorImage = /<img class="ProseMirror-separator" alt="">/g;
    const reProseMirrorTrailingBreak = / class="ProseMirror-trailingBreak"/g;
    let resultHTML = html;
    resultHTML = resultHTML.replace(reProseMirrorImage, '');
    resultHTML = resultHTML.replace(reProseMirrorTrailingBreak, '');
    return resultHTML;
}

;// ./src/index.ts




const PREFIX = 'toastui-editor-';
function createApplyButton(text) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = text;
    return button;
}
function createToolbarItemOption(colorPickerContainer, i18n) {
    return {
        name: 'color',
        tooltip: i18n.get('Text color'),
        className: `${PREFIX}toolbar-icons color`,
        popup: {
            className: `${PREFIX}popup-color`,
            body: colorPickerContainer,
            style: { width: 'auto' },
        },
    };
}
function createSelection(tr, selection, SelectionClass, openTag, closeTag) {
    const { mapping, doc } = tr;
    const { from, to, empty } = selection;
    const mappedFrom = mapping.map(from) + openTag.length;
    const mappedTo = mapping.map(to) - closeTag.length;
    return empty
        ? SelectionClass.create(doc, mappedTo, mappedTo)
        : SelectionClass.create(doc, mappedFrom, mappedTo);
}
function getCurrentEditorEl(colorPickerEl, containerClassName) {
    const editorDefaultEl = findParentByClassName(colorPickerEl, `${PREFIX}defaultUI`);
    return editorDefaultEl.querySelector(`.${containerClassName} .ProseMirror`);
}
let containerClassName;
let currentEditorEl;
// @TODO: add custom syntax for plugin
/**
 * Color syntax plugin
 * @param {Object} context - plugin context for communicating with editor
 * @param {Object} options - options for plugin
 * @param {Array.<string>} [options.preset] - preset for color palette (ex: ['#181818', '#292929'])
 * @param {boolean} [options.useCustomSyntax=false] - whether use custom syntax or not
 */
function colorSyntaxPlugin(context, options = {}) {
    const { eventEmitter, i18n, usageStatistics = true, pmState } = context;
    const { preset } = options;
    const container = document.createElement('div');
    const colorPickerOption = { container, usageStatistics };
    addLangs(i18n);
    if (preset) {
        colorPickerOption.preset = preset;
    }
    const colorPicker = external_commonjs_tui_color_picker_commonjs2_tui_color_picker_amd_tui_color_picker_root_tui_colorPicker_.create(colorPickerOption);
    const button = createApplyButton(i18n.get('OK'));
    eventEmitter.listen('focus', (editType) => {
        containerClassName = `${PREFIX}${editType === 'markdown' ? 'md' : 'ww'}-container`;
    });
    container.addEventListener('click', (ev) => {
        if (ev.target.getAttribute('type') === 'button') {
            const selectedColor = colorPicker.getColor();
            currentEditorEl = getCurrentEditorEl(container, containerClassName);
            eventEmitter.emit('command', 'color', { selectedColor });
            eventEmitter.emit('closePopup');
            // force the current editor to focus for preventing to lose focus
            currentEditorEl.focus();
        }
    });
    colorPicker.slider.toggle(true);
    container.appendChild(button);
    const toolbarItem = createToolbarItemOption(container, i18n);
    return {
        markdownCommands: {
            color: ({ selectedColor }, { tr, selection, schema }, dispatch) => {
                if (selectedColor) {
                    const slice = selection.content();
                    const textContent = slice.content.textBetween(0, slice.content.size, '\n');
                    const openTag = `<span style="color: ${selectedColor}">`;
                    const closeTag = `</span>`;
                    const colored = `${openTag}${textContent}${closeTag}`;
                    tr.replaceSelectionWith(schema.text(colored)).setSelection(createSelection(tr, selection, pmState.TextSelection, openTag, closeTag));
                    dispatch(tr);
                    return true;
                }
                return false;
            },
        },
        wysiwygCommands: {
            color: ({ selectedColor }, { tr, selection, schema }, dispatch) => {
                if (selectedColor) {
                    const { from, to } = selection;
                    const attrs = { htmlAttrs: { style: `color: ${selectedColor}` } };
                    const mark = schema.marks.span.create(attrs);
                    tr.addMark(from, to, mark);
                    dispatch(tr);
                    return true;
                }
                return false;
            },
        },
        toolbarItems: [
            {
                groupIndex: 0,
                itemIndex: 3,
                item: toolbarItem,
            },
        ],
        toHTMLRenderers: {
            htmlInline: {
                span(node, { entering }) {
                    return entering
                        ? { type: 'openTag', tagName: 'span', attributes: node.attrs }
                        : { type: 'closeTag', tagName: 'span' };
                },
            },
        },
    };
}

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});