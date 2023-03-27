<script lang="ts">

    import { deleteToDos, toDoCompleted } from "../store/toDoStore";
    export let toDo: {text: string, completed: boolean, id: number };

</script>

<li class="py-2 w-full">
    <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center">
            <div class="w-6">
                {#if toDo.completed}
                    <button on:click={() => toDoCompleted(toDo.id)}>
                        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </button>
                {:else}
                    <input type="checkbox" checked={toDo.completed} on:change={() => toDoCompleted(toDo.id)} />
                {/if}
            </div>
            <span class={`flex ${toDo.completed ? 'line-through': ''}`}>{toDo.text}</span>
        </div>
        <button on:click={() => deleteToDos(toDo.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 hover:text-red-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </button>
    </div>
</li>
