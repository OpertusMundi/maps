/**
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
    setConfigProp,
    setLocalConfigurationFile
} from '@mapstore/utils/ConfigUtils';
/**
 * Add custom (overriding) translations with:
 *
 * setConfigProp('translationsPath', ['./MapStore2/web/client/translations', './translations']);
 */
setConfigProp('translationsPath', './js/translations');
setConfigProp('themePrefix', 'topiomaps');

/**
 * Use a custom plugins configuration file with:
 *
 * setLocalConfigurationFile('localConfig.json');
 */
setLocalConfigurationFile('localConfig.json');

import('@mapstore/product/embedded');
