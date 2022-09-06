import AbstractView from"./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("To Do List");
    }

    async getHtml() {
        return `
        <form class="container__toDoList" action="/addTask" method="post">
        <div id="newtask">
            <input name="add__button"  id="add__button" type="text" placeholder="Add a task..."></input>
            <button id="push" type="submit">Add</buttom>
        </div>
        <div id="tasks">
            
        </div>
    </div>
    `;
    }
}