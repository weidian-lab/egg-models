'use strict';

const mock = require('egg-mock');

describe('test/models.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/models-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, models')
      .expect(200);
  });
});
