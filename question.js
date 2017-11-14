'use strict';

class Question {
  constructor (content, id) {
    this.content = content;
    this.id = id;

    this.save();
  }

  save() {
    return this.constructor._All.push(this);
  }
  static All() {
    return this._All;
  }

  static Find(array, id){
  return this._All[id-1];
}

}

//private class variable for array of class
Question._All = [];
