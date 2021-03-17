'use strict';

const utility = require('../utility');

describe('custom markup', () => {
  before(() => {
    const testHTML = document.querySelectorAll('#custom-markup .hljs');

    this.blocks = [...testHTML].map(x => x.innerHTML);
  });

  it('should keep custom markup', () => {
    const filename = utility.buildPath('fixtures', 'expect',
                                       'custommarkup.txt'),
          actual   = this.blocks[0];

    return utility.expectedFile(filename, 'utf-8', actual);
  });

  it('should keep the same amount of void elements (<br>, <hr>, ...)', () => {
    const filename = utility.buildPath('fixtures', 'expect', 'brInPre.txt'),
          actual   = this.blocks[1];

    return utility.expectedFile(filename, 'utf-8', actual);
  });
});
