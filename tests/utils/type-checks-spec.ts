import { DefaultEditorId, PanelId } from '../../src/interfaces';
import {
  isEditorBackup,
  isEditorId,
  isPanelId,
} from '../../src/utils/type-checks';

describe('Type checks', () => {
  describe('isEditorId()', () => {
    it('works', () => {
      expect(isEditorId(DefaultEditorId.html, [])).toBe(true);
      expect(isEditorId(PanelId.docsDemo, [])).toBe(false);
    });
  });

  describe('isPanelId()', () => {
    it('works', () => {
      expect(isPanelId(DefaultEditorId.html)).toBe(false);
      expect(isPanelId(PanelId.docsDemo)).toBe(true);
    });
  });

  describe('isEditorBackup()', () => {
    it('works', () => {
      expect(isEditorBackup(true)).toBe(false);
      expect(isEditorBackup({} as any)).toBe(true);
    });
  });
});
