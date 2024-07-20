export default {
  sidebar: {
    badge: 'free',
    input: 'Search',
    section: 'workspace',
    boards: 'Boards',
    templates: 'Templates',
    members: 'Members',
    settings: 'Settings',
    plan: 'Upgrade your plan'
  },
  header: {
    upgrade: 'Upgrade "Pro"',
    collaboration: 'Invite members',
    name: 'Test Workspace'
  },
  boards: {
    title: 'Boards in this team',
    description: 'All your active boards are located here, which you can switch to and work on',
    create: 'Create new board',
    filter: {
      input: 'Filter boards...',
      popularity: 'By popularity',
      tooltips: {
        first_sort: 'Sort boards by popularity',
        second_sort: 'Show recent boards'
      }
    },
    card: {
      date_updated: 'Updated'
    },
    chart: {
      title_boards: 'Сreated boards',
      description_boards: 'Create, share, work, and then analyze your activity on Jenda',
      title_tasks: 'Your tasks',
      description_tasks: 'Solve and complete the tasks you started'
    }
  },
  templates: {
    title: 'Templates',
    description: 'Choose one of the available templates to create your project',
    user: 'creator',
    items: [
      {
        title: 'Base Kanban',
        tag: 'Recommended',
        description: 'Create a basic project with "Base Kanban" template',
        date: 'June 12, 2024'
      },
      {
        title: 'Roadmap',
        tag: 'New',
        description: 'Create a project based on our "Roadmap" template',
        date: 'June 18, 2024'
      },
      {
        title: 'Web Development',
        tag: 'New',
        description: 'Create a basic project with "Web Development" template',
        date: 'July 16, 2024'
      }
    ]
  },
  sheet: {
    title: 'Create board',
    description: 'The new board will allow you to create tasks for solving them.',
    form: {
      name: {
        label: 'Board name',
        placeholder: 'e.g. "Jenda"'
      },
      description: {
        label: 'Board description',
        placeholder: 'e.g. development board for our company'
      },
      submit: 'Create board'
    }
  }
};
