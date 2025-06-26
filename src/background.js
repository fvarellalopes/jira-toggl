// Service Worker para Manifest V3
// O webextension-polyfill será carregado via bundle do webpack
import browser from 'webextension-polyfill';

// Se não tiver import/export, use a versão global
if (typeof importScripts !== 'undefined') {
  // Fallback para service worker sem módulos ES6
  self.browser = chrome;
}
