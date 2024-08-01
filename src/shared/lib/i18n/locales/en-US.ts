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
    name: 'Test Workspace',
    user: {
      welcome: 'Go to Welcome',
      logout: 'Log out'
    }
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
  members: {
    title: 'Workspace participants',
    description:
      'Members can view and join whiteboards for the workspace, as well as create new whiteboards in that space.',
    content: {
      all: {
        title: 'Invite users',
        description:
          'Anyone who has an invitation link can join this free workspace. The link can be disabled and recreated at any time. Pending invitations count towards a limit of 10 participants.',
        btn: 'All participants'
      },
      guests: {
        title: 'Guests',
        description: 'Guests can only view and edit the boards they have been added to.',
        btn: 'Guests'
      }
    },
    role: {
      member: 'member',
      admin: 'admin'
    },
    btns: {
      leave: 'Leave',
      view: 'View the boards'
    }
  },
  settings: {
    title: 'Settings',
    description: 'Manage your account settings and set some preferences.',
    lang: {
      label: 'Language',
      about: 'This is the language that will be used in the dashboard.'
    },
    theme: {
      label: 'Theme',
      about: 'Select the theme for the dashboard.',
      variants: {
        light: 'Light',
        dark: 'Dark',
        auto: 'System'
      },
      btn: 'Update preferences'
    }
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
  },
  authentication: {
    login: {
      title: 'Welcome back',
      description: 'Enter your info below to sign in your account',
      btn: 'Sign In with Email',
      proposal: "Don't have an account?",
      route: 'Sign Up Now'
    },
    registration: {
      title: 'Get started',
      description: 'Enter your info below to create your account',
      btn: 'Sign Up with Email',
      proposal: 'Have an account?',
      route: 'Sign In Now'
    },
    form: {
      email: 'Email',
      password: 'Password'
    },
    line: 'Or continue with',
    privacy: ['By clicking continue, you agree to our', 'Terms of Service', 'and', 'Privacy Policy.']
  },
  kanban: {
    sorting: {
      activity: 'By activity',
      workload: 'Sort by workload'
    },
    statuses: ['work', 'archive', 'closed'],
    new: 'Add new column',
    cards: {
      add: 'Add card'
    },
    sheet: {
      column: {
        title: 'Add new column',
        description: 'When creating a new column, you can create cards and use the kanban board.',
        form: {
          label: 'Column name',
          placeholder: 'Enter the column name',
          submit: 'Create column'
        }
      }
    }
  }
};
