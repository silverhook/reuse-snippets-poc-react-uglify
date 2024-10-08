/*!
 * SPDX-SnippetBegin
 * SPDX-SnippetCopyrightText: 2021 Lady Hacker
 * SPDX-License-Identifier: BSD-3-Clause
 */

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

//! SPDX-SnippetEnd
