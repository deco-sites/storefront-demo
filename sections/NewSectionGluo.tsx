import { ImageWidget } from 'apps/admin/widgets.ts';

interface Task {
  title: string;
  description: string;
  responsible: string;
  color: string;
}

interface Column {
  title: string;
  tasks: Task[];
}

interface Props {
  /**
   * @format rich-text
   */
  boardTitle?: string;
  /**
   * @format textarea
   */
  boardDescription?: string;
  toDoTasks?: Task[];
  doingTasks?: Task[];
  doneTasks?: Task[];
  responsiblePersonImage?: ImageWidget;
}

export default function KanbanBoard({
  boardTitle = "Project Kanban Board",
  boardDescription = "Track your project progress with this Kanban board",
  toDoTasks = [
    { title: "Task 1", description: "Description for Task 1", responsible: "John Doe", color: "bg-red-200" },
    { title: "Task 2", description: "Description for Task 2", responsible: "Jane Smith", color: "bg-blue-200" },
  ],
  doingTasks = [
    { title: "Task 3", description: "Description for Task 3", responsible: "Alice Johnson", color: "bg-green-200" },
  ],
  doneTasks = [
    { title: "Task 4", description: "Description for Task 4", responsible: "Bob Brown", color: "bg-yellow-200" },
  ],
  responsiblePersonImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
}: Props) {
  const columns: Column[] = [
    { title: "To Do", tasks: toDoTasks },
    { title: "Doing", tasks: doingTasks },
    { title: "Done", tasks: doneTasks },
  ];

  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-4">{boardTitle}</h1>
      <p class="mb-8">{boardDescription}</p>
      <div class="flex flex-wrap -mx-4">
        {columns.map((column) => (
          <div key={column.title} class="w-full md:w-1/3 px-4 mb-8">
            <div class="bg-gray-100 rounded-lg p-4">
              <h2 class="text-xl font-semibold mb-4">{column.title}</h2>
              {column.tasks.map((task, index) => (
                <div key={index} class={`${task.color} rounded-lg p-4 mb-4 shadow`}>
                  <h3 class="font-bold mb-2">{task.title}</h3>
                  <p class="text-sm mb-4">{task.description}</p>
                  <div class="flex items-center">
                    <img src={responsiblePersonImage} alt={task.responsible} class="w-8 h-8 rounded-full mr-2" />
                    <span class="text-sm">{task.responsible}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}