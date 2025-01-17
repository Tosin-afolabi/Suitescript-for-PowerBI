/**
 * @NApiVersion 2.1
 * @NScriptType Portlet
 */
define(['N/runtime'],

     (runtime) => {

        const render = (params) => {
            params.portlet.title = runtime.getCurrentScript().getParameter({ name: "custscript_cdg_powerbi_portlet_title" });
            params.portlet.html = _getPortletContent();
        }
        
        const _getPortletContent = () => {
            const url = runtime.getCurrentScript().getParameter({ name: "custscript_cdg_powerbi_url" }),
                height = runtime.getCurrentScript().getParameter({ name: "custscript_cdg_powerbi_height" });
            return '<iframe width="100%" height="' +
                (height || 500) + '" frameborder="0" scrolling="no" src="' +
                url + '"></iframe>';
        }

        return {render}

    });