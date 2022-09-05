import AbstractView from"./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("To Do List");
    }

    async getHtml() {
        return `
        <div class="container__toDoList">
        <div id="newtask">
            <input type="text" placeholder="Add a task...">
            <button id="push" data-execute="addFunction">Add</buttom>
        </div>
        <div id="tasks">
            
        </div>
    </div>
    `;
    }
}