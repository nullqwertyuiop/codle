import { SyntaxNode } from 'web-tree-sitter';
import { TreeOption } from 'naive-ui';

export type CorrectStatus = 'correct' | 'misplaced' | 'wrong';

export interface TreeOptionEx extends TreeOption {
  node: SyntaxNode,
  correctChildCount: number,
  correct: CorrectStatus,
  correctText?: string,
  allCorrect: boolean,
  children: TreeOptionEx[],
  depth: number,
  minWrongDepth: number,
  correctCount: number,
}

// it's actually useless and provides only minimum (inadequate) check as a type guard
export function isTreeOptionEx(option: TreeOption): option is TreeOptionEx {
  return option.node !== null && typeof option.node === 'object';
}
