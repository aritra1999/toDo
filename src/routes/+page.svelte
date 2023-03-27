<script>
    import ToDoForm from "../components/ToDoForm.svelte";
    import ToDo from "../components/ToDo.svelte";
    import { toDos } from "../store/toDoStore";
</script>

<main class="w-2/4 mx-auto">
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">My ToDos</h1>
    <ToDoForm/> 
    <ul class="mt-6 text-gray-900 divide-y divide-slate-200 ">
        {#each $toDos as toDo}
            <ToDo toDo={toDo} index={toDo.id} />
        {/each}
    </ul>
</main>
  