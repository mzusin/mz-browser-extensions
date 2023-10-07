/**
 * const panel = await createDevtoolsPanel('Waves A/B Test', 'img/panel-icon.png', 'html/panel.html');
 * Manifest:
 * "devtools_page": "devtools.html"
 * "host_permissions": [ "<all_urls>" ]
 */
export const createDevtoolsPanel = (
    title: string,
    iconPath: string,
    pagePath: string
) : Promise<chrome.devtools.panels.ExtensionPanel> => {
    return new Promise((resolve, reject) => {
        try{
            chrome.devtools.panels.create(title,
                iconPath,
                pagePath,
                (panel) => {
                    resolve(panel);
                }
            );
        }
        catch (ex) {
            console.error(ex);
            reject();
        }
    });
};