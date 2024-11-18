figma.showUI(__html__, { width: 400, height: 500 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'save-api-key') {
    await figma.clientStorage.setAsync('openai-api-key', msg.apiKey);
    figma.ui.postMessage({ type: 'api-key-saved' });
  } else if (msg.type === 'load-api-key') {
    const apiKey = await figma.clientStorage.getAsync('openai-api-key');
    figma.ui.postMessage({ type: 'api-key-loaded', apiKey });
  } else if (msg.type === 'generate-query') {
    figma.ui.postMessage({
      type: 'query-generated',
      query: msg.query
    });
  }
};