import { Plugins } from 'inline-style-linter';
import Radium from 'radium';
import lintStyles from 'radium-plugin-linter';
import validityPseudosPlugin from 'radium-plugin-validity-pseudos';

function ConfiguredRadium( component ) {
    return Radium( {
        plugins: [
            Radium.Plugins.mergeStyleArray,
            Radium.Plugins.resolveMediaQueries,
            Radium.Plugins.resolveInteractionStyles,
            lintStyles,
            validityPseudosPlugin,
            Radium.Plugins.prefix,
            Radium.Plugins.checkProps
        ],
        linter: {
            plugins: [
                Plugins.preferNumber,
                Plugins.shorthandLonghand
            ]
        }
    } )( component );
}

export default ConfiguredRadium;
