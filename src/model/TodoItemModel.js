let todoIdx = 0;

export class TodoItemModel {
  /*
  @param {string} title Todoアイテムのタイトル
  @param {boolean} completed Todoアイテムが完了済みならばtrue, そうでなければfalse
  */
 constructor({ title, completed }) {
   // idは自動的に連番となりそれぞれのインスタンスごとに異なるものとする
   this.id = todoIdx++;
   this.title = title;
   this.completed = completed;
 }
}
