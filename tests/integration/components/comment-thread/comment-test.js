import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | comment-thread/comment', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });

        await render(hbs`<CommentThread::Comment />`);

        assert.dom().hasText('');

        // Template block usage:
        await render(hbs`
      <CommentThread::Comment>
        template block text
      </CommentThread::Comment>
    `);

        assert.dom().hasText('template block text');
    });
});
