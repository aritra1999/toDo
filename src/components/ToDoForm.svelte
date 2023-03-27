<script>
    import { addToDos } from "../store/toDoStore";

    let todo = '';

    const handelToDo = () => {
        addToDos(todo);
        console.log(`Added todo ${todo}`); 
        todo = '';
    }
</script>

<form on:submit|preventDefault={handelToDo}>   
    <label for="todo" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">ToDoS</label>
    <div class="relative">
        <input type="text" bind:value={todo} name="todo" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Enter ToDo" required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Add ToDo</button>
    </div>
</form>