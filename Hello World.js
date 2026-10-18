// ==UserScript==
// @name         Hello World
// @namespace    http://tampermonkey.net/
// @version      2026-10-18
// @description  在网页上显示自定义弹窗文本
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// ==/UserScript==

(() => {
	'use strict';

	const defaultMessage = 'Hello, World!';
	const messageKey = 'popupMessage';

	GM_registerMenuCommand('设置弹窗文本', () => {
		const currentMessage = GM_getValue(messageKey, defaultMessage);
		const message = prompt('请输入要显示的弹窗文本：', currentMessage);

		if (message === null) {
			return;
		}

		GM_setValue(messageKey, message);
		alert('弹窗文本已保存，之后打开网页时生效。');
	});

	alert(GM_getValue(messageKey, defaultMessage));
})();
