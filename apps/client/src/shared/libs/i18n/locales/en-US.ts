export default {
  sidebar: {
    badge: 'free',
    input: 'Search',
    section: 'workspace',
    projects: 'projects',
    boards: 'All boards',
    notes: 'Notes',
    templates: 'Templates',
    workflows: 'Workflows',
    members: 'Members',
    settings: 'Settings',
    integrations: 'Integraions',
    help: {
      title: 'Help',
      items: 'Support developers | Keyboard shortcuts | Join us',
    },
    notifications: {
      btn: 'Notifications',
    },
    boards_section: {
      title: 'Boards',
      empty: 'No boards',
    },
    plan: {
      btn: 'Learn more',
      title: 'Premium Plan',
      description:
        'boards left',
      tooltip: '1/3 free workspaces',
    },
    soon: 'soon',
  },
  header: {
    navigator: {
      question: 'Hotkeys',
      messages: 'Messages',
    },
    user: {
      welcome: 'Go to Welcome',
      logout: 'Log out',
    },
    share: 'Share link',
  },
  boards: {
    create: 'Add board | Add new board',
    remove: 'Delete',
    routeCreate: 'Add board',
    filters: {
      sort: {
        title: 'Sort by',
        name: 'Name',
        tasks: 'Tasks',
        date: 'Creation date',
        default: 'Default',
      },
      advanced: {
        title: 'Advanced filter',
        empty: 'No such filters available :/',
        statuses: {
          title: 'Statuses',
          arr: [
            {
              value: 'active',
              label: 'Active',
            },
            {
              value: 'archived',
              label: 'Archived',
            },
          ],
        },
        labels: {
          title: 'Manage labelsLabels',
        },
      },
      search: 'Find a board...',
    },
    forms: {
      creating: {
        title: 'Creating a board',
        description: 'You can create a new board to manage tasks',
        name: {
          label: 'Name',
          placeholder: 'Enter the name of the board',
        },
        labels: {
          label: 'Labels',
          placeholder: 'Enter a label',
          description: 'Start typing a label and press \'Enter\' to save it to your existing labels',
          alert: '📝 How to change the label color? | See more details in our documentation.',
        },
        btns: 'Cancel | Create',
      },
    },
    empty: {
      title: 'No board',
      description: 'Create your first board and start working',
    },
    card: {
      date_updated: 'Updated',
    },
    chart: {
      title_boards: 'Сreated boards',
      description_boards:
        'Create, share, work, and then analyze your activity on Jenda',
      title_tasks: 'Your tasks',
      description_tasks: 'Solve and complete the tasks you started',
    },
    columns: ['Board name', 'Labels', 'Participants', 'Tasks', 'Estimate', 'Creation date'],
  },
  board: {
    remove: {
      title: 'Delete board',
      description: 'Are you sure you want to delete this board? All associated data will be removed.',
    },
    menu: {
      background: 'Change background',
      labels: 'Manage labels',
      edit: 'Edit board',
      delete: 'Delete board',
    },
    forms: {
      edit: {
        title: 'Edit Board',
        description: 'You can change the board name, color, and its visibility.',
        name: {
          label: 'Name',
          placeholder: 'Enter a name for the board',
        },
        visibility: {
          label: 'Visibility',
          tabs: 'Private | Shared',
          alert: 'By switching from private to shared, your board will become accessible to other users in your workspace.',
        },
        btns: 'Cancel | Apply',
      },
    },
  },
  notes: {
    create: 'Add note | Add new note',
    remove: 'Delete',
    filters: {
      sort: {
        title: 'Sorted by',
        date: 'Date updated',
        default: 'Default',
      },
      search: 'Search note...',
    },
    empty: {
      title: 'No notes',
      description: 'Create your first note and share your thoughts',
    },
    columns: ['Note title', 'Content', 'Creator', 'Participants', 'Date updated'],
  },
  note: {
    lastModified: 'Modified',
    actions: 'Linter | Delete note',
    editor: {
      placeholder: 'Write something, \'/\' for commands…',
      menu: {
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        strike: 'Strike',
        code: 'Code',
      },
      nodes: {
        heading1: {
          title: 'Heading 1',
          description: 'Big section heading.',
        },
        heading2: {
          title: 'Heading 2',
          description: 'Medium section heading.',
        },
        heading3: {
          title: 'Heading 3',
          description: 'Small section heading.',
        },
        paragraph: {
          title: 'Paragraph',
          description: 'Just start typing with plain text.',
        },
        bulletList: {
          title: 'Bullet List',
          description: 'Create a bullet list.',
        },
        orderedList: {
          title: 'Ordered List',
          description: 'Create an ordered list.',
        },
        taskList: {
          title: 'Task List',
          description: 'Create a task list.',
        },
        blockquote: {
          title: 'Blockquote',
          description: 'Add a blockquote.',
        },
        alignLeft: {
          title: 'Align left',
          description: 'Align text to the left.',
        },
        alignCenter: {
          title: 'Align center',
          description: 'Align text to the center.',
        },
        alignRight: {
          title: 'Align right',
          description: 'Align text to the right.',
        },
      },
    },
  },
  picker: {
    placeholder: 'Custom color',
    tabs: 'Solid | Gradients',
  },
  common: {
    remove: {
      warning: 'This action is irreversible.',
      btns: 'Cancel | Delete | Deleting',
    },
  },
  workflows: {
    create: 'Add workflow | Add a new workflow',
    remove: 'Delete',
    filters: {
      sort: {
        title: 'Sorted by',
        date: 'Update date',
        default: 'Default',
      },
      search: 'Find a workflow...',
    },
    forms: {
      creating: {
        title: 'Creating a workflow',
        description_main: 'Create a new workflow to optimize your work',
        name: {
          label: 'Name',
          placeholder: 'Enter the workflow name',
        },
        description: {
          label: 'Description',
          placeholder: 'Describe your new workflow',
        },
        alert: 'The workflow will be in | To make it fully production ready, the workflow must be moved to',
        btns: 'Cancel | Continue',
      },
    },
    section: {
      all: 'All workflows',
      recent: 'Recent',
    },
    status: {
      draft: 'Draft',
      production: 'Production',
    },
    runs: '{n} runs | {n} run',
    empty: {
      title: 'No workflows',
      description: 'Create your first workflow and automate tasks',
    },
    columns: ['Workflow name', 'Description', 'Creator', 'Runs', 'Status', 'Date updated'],
  },
  workflow: {
    alert: {
      status: 'This process is in status',
      btn: 'Make production',
    },
    remove: {
      title: 'Process deletion',
      description: 'Are you sure you want to delete this process? All associated data will be removed.',
    },
    handlers: {
      hand: 'Hand',
      move: 'Move',
      lock: 'Lock',
      layout: 'AI power: Layout',
    },
    actions: 'Logs | Run',
    panel: {
      open: 'Open panel',
      close: 'Close panel',
    },
    empty: 'Drag elements to this area',
    nodes: {
      title: 'All Nodes',
      description: 'Here you can select any of the nodes.',
      main: 'Main',
      effects: 'Effects',
      links: 'Useful Links',
      docs: {
        title: 'Documentation',
        description: 'Learn how to manage nodes in the system.',
      },
      items: [
        {
          title: 'Trigger',
          description: 'Start of the process',
        },
        {
          title: 'Action',
          description: 'Performs an operation in the process',
        },
        {
          title: 'Notification',
          description: 'Sends a message',
        },
        {
          title: 'Condition',
          description: 'Checks if conditions are met',
        },
        {
          title: 'Delay',
          description: 'Pauses an execution',
        },
        {
          title: 'Confetti',
          description: 'Creates a confetti effect',
        },
      ],
      alert: 'Set actions',
    },
  },
  templates: {
    title: 'Templates',
    description: 'Choose one of the available templates to create your project',
    import: 'Click or drag files to import. Supports files',
    community: 'Comunity templates',
    create: 'Create new template',
    user: 'creator',
    items: [
      {
        title: 'Base Kanban',
        tag: 'Recommended',
        description: 'Create a basic project with "Base Kanban" template',
        date: 'June 12, 2024',
      },
      {
        title: 'Roadmap',
        tag: 'New',
        description: 'Create a project based on our "Roadmap" special template',
        date: 'June 18, 2024',
      },
      {
        title: 'Web Development',
        tag: 'New',
        description: 'Create a basic project with "Web Development" template',
        date: 'July 16, 2024',
      },
    ],
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
        btn: 'All participants',
      },
      guests: {
        title: 'Guests',
        description:
          'Guests can only view and edit the boards they have been added to.',
        btn: 'Guests',
      },
    },
    role: {
      member: 'member',
      admin: 'admin',
    },
    btns: {
      leave: 'Leave',
      view: 'View the boards',
    },
  },
  settings: {
    title: 'Settings',
    description: 'Manage your account settings and set some preferences.',
    lang: {
      label: 'Language',
      about: 'This is the language that will be used in the dashboard.',
    },
    theme: {
      label: 'Theme',
      about: 'Select the theme for the dashboard.',
      variants: {
        light: 'Light',
        dark: 'Dark',
        auto: 'System',
      },
      btn: 'Update preferences',
    },
  },
  sheet: {
    title: 'Create board',
    description:
      'The new board will allow you to create tasks for solving them.',
    form: {
      name: {
        label: 'Board name',
        placeholder: 'e.g. "Jenda"',
      },
      description: {
        label: 'Board description',
        placeholder: 'e.g. development board for our company',
      },
      submit: 'Create board',
    },
  },
  authentication: {
    login: {
      title: 'Welcome back',
      description: 'Enter your info below to sign in your account',
      btn: 'Continue',
      proposal: 'Don\'t have an account?',
      route: 'Sign Up Now',
    },
    registration: {
      title: 'Get started',
      description: 'Enter your info below to create your account',
      btn: 'Continue',
      proposal: 'Have an account?',
      route: 'Sign In Now',
    },
    confirm: {
      title: 'Confirm your email',
      description: 'Enter the confirmation code sent to your email',
      btn: 'Confirm',
      alert: 'We care about your security. You can trust us to keep your information safe and secure!',
      proposal: 'Didn\'t receive the code?',
      route: 'Resend',
    },
    workspace: {
      creating: {
        title: 'Create your workspace',
        logo: {
          label: 'Choose a logo for your workspace',
          btn: 'Choose image | Delete',
          description: '*.png, *.jpeg files up to 10MB at least 400px by 400px',
        },
        alert: 'Remember, if you don’t choose a logo, jenda will automatically generate one for you',
        form: {
          name: {
            label: 'Name',
            placeholder: 'Enter your workspace name',
          },
          url: {
            label: 'Custom link',
          },
        },
      },
      choosing: {
        title: 'Choose a workspace',
        description: 'The more your team engages with Jenda, the more dynamic your workspaces become. | Jenda transforms collaboration in shared workspaces—from organizing projects and managing tasks to centralizing discussions and building efficient workflows.',
        label: 'Available workspaces',
      },
      route: 'Continue',
    },
    form: {
      email: 'Email',
      password: 'Password',
      otp: 'You need to enter a sequence of single-digit numerical values.',
    },
    line: 'Or continue with',
    privacy: [
      'By clicking continue, you agree to our',
      'By clicking sign in, you agree to our',
      'Terms of Service',
      'and',
      'Privacy Policy.',
    ],
    back: 'To Home',
    auth_alert:
      'authorization via google will be replaced with gitlab after 28.02.2025',
  },
  kanban: {
    sorting: {
      all: 'All Tasks',
      activity: 'By activity',
      workload: 'By workload',
    },
    view: {
      kanban: 'Kanban',
      timeline: 'Timeline',
    },
    menu: ['Change background', 'Manage labels', 'Edit board', 'Delete board'],
    export: 'Export board',
    active: 'active',
    archived: 'archived',
    alert: 'The board has been archived and is no longer editable.',
    column: {
      new: 'Add new column',
      tooltips: {
        actions: 'Actions for the column',
      },
      menu: {
        edit: 'Edit',
        delete: 'Delete',
        limit: 'Set limit',
      },
      tasks: {
        new: 'Add a task',
      },
    },
    cards: {
      add: 'Add card',
    },
    sheet: {
      column: {
        title: 'Add new column',
        description:
          'When creating a new column, you can create cards and use the kanban board.',
        form: {
          label: 'Column name',
          placeholder: 'Enter the column name',
          submit: 'Create column',
        },
      },
    },
    configuration: {
      title: 'Configure your board',
      description: 'Customize the board for your convenience',
      name: 'Here the name and the color indicator of your project',
      users: 'Participants',
      status: 'Select the status of your project',
      clear: 'Clear the board',
      update: 'Apply changes',
    },
  },
  welcome: {
    header: {
      links: [
        'About',
        'Kanban',
        'Collaborative',
        'Activity',
        'Members',
        'Chats',
      ],
      login: 'Log In',
      reg: 'Get started',
    },
    about: {
      tagline: 'Your path to perfection',
      description:
        'Jenda is a cloud-based program for efficient collaborative and individual project and task management.',
      badge: 'Core: Task Boards, Real-Time Tracking',
      badge_mobile: 'Core: Boards, Real-Time and etc.',
      btn: 'Get started',
    },
    marketing: {
      heading: 'All convenience in one place',
      cards: [
        {
          title: 'Kanban 🧑‍💻',
          description:
            'Organize and visualize your projects with our intuitive Kanban board. Enhance productivity with ease.',
        },
        {
          title: 'Collaborative 👥',
          description: 'Improve your teamwork!',
        },
        {
          title: 'Members 🌐',
          description:
            'Invite new participants to your projects. Enjoy the development together!',
        },
        {
          title: 'Activity 👔',
          description: 'Analyze your activity and move forward.',
        },
        {
          title: 'Chats 💬',
          description:
            'Communicate, share, discuss. Our convenience for you 😉',
        },
      ],
    },
    marquee: [
      'We know',
      'You enjoy',
      '👑 The best alternative in Russia',
      'Open source',
      '👻 It\'s easier with us',
      'No ads',
      'Perfection is close 🤟',
    ],
    kanban: {
      name: 'Use Kanban',
      heading: 'What do you know about our Kanban? 👀',
      about:
        'Kanban is a simple and effective way to manage projects, tasks, and time. By visualizing your tasks on a board, you can easily track progress and see what needs to be done next.',
      writer: 'Try to conquer the world fully with our Kanban',
      review: {
        name: 'Alex Peshkov',
        status: 'Frontend Developer, Open Source Enthusiast',
        comment:
          'I enjoy kanban every day and I advise everyone to try it. This is amazing!',
      },
    },
    collaborative: {
      name: 'Easier Together',
      heading: 'Every task is a step towards 🤝 collective success!',
      about:
        'Our service is designed for teams striving for success through collaboration. With it, every participant can easily track tasks, share ideas, and move towards a common goal together with colleagues.',
      writer: 'Join us and move towards success as a team!',
      review: {
        name: 'Bagaudtinov Airat',
        status: 'Backend Developer',
        comment:
          'Working together is great! Jenda provides such a wonderful opportunity.',
      },
    },
    activity: {
      heading: 'Progress in action',
      about:
        'You can view statistics on completed tasks and open boards. This allows you to track team progress, see completed tasks, and manage current tasks and projects.',
    },
    members: {
      name: 'Team of participants',
      heading: 'Work with a friendly 😉 team of developers',
      about:
        'Our service allows you to create and manage teams, add participants, share tasks, and receive real-time feedback.',
      writer: 'Join and be in the spotlight!',
      review: {
        name: 'Alex Peshkov',
        status: 'Frontend Developer, Open Source Enthusiast',
        comment:
          'A great tool for collaboration. Convenient interface and useful features! 👍 Working with friends',
      },
    },
    chats: {
      name: 'Ease of communication',
      heading: 'How often do you communicate with your team? 🤔',
      about: `Our chats allow you to easily exchange messages, share ideas, and stay in sync with your team. Stay connected and work more efficiently!`,
      writer: 'Share your thoughts and ideas in our convenient chats!',
      review: {
        name: 'Ayrat Bagaoutdinov',
        status: 'Backend Developer',
        comment:
          'The chats here are really convenient! It\'s easy to exchange ideas and quickly resolve issues with the team.',
      },
    },
    footer:
      'cloud-based program for task management. The source code is available on',
    mobile: {
      section_blocks: [
        {
          title: 'About Us',
          description: 'Get to know Jenda',
        },
        {
          title: 'Kanban',
          description: 'Organize projects with Kanban',
        },
        {
          title: 'Collaboration',
          description: 'Improve your teamwork!',
        },
        {
          title: 'Members',
          description: 'Invite members to projects',
        },
        {
          title: 'Activity',
          description: 'Analyze your activity',
        },
        {
          title: 'Chats',
          description: 'Communicate, share, discuss',
        },
      ],
      links: [
        {
          title: 'product',
        },
        {
          title: 'contact us on Telegram',
        },
      ],
    },
  },
  not_found: {
    title: 'Not Found',
    description: 'The page you were looking for can\'t be found',
    btn: 'Go to Home',
  },
  dialogs: {
    share: {
      title: 'Share Link',
      description: 'Anyone who has this link will be able to join',
      close: 'Cancel',
    },
    hotkeys: {
      title: 'Hotkeys',
      badges: 'Open a search in the workspace | Go to the main page | Log out',
      alert: 'You\'ll see { badge } used a lot below. This indicates command on Mac and control on Windows and Linux.',
    },
  },
  validations: {
    email: 'Email',
    password: 'Password',
    pin: 'Confirmation code',
    name: 'Name',
    url: 'URL handle',
  },
  search: {
    placeholder: 'Type smth for search...',
    empty: 'No results found',
    recently: 'Recently',
    links: 'Links',
    select: 'Select',
    open: 'Open',
    close: 'Close',
  },
  workspace: {
    popover: {
      members: '{n} members',
      section: 'Management',
      pay: 'Plans and Billing',
      invite: 'Invite to Project',
      team: 'Team',
      settings: 'Change Information',
      active: 'Active',
      archive: 'Archived',
    },
  },
  table: {
    row_from_all: 'from',
    row_selected: 'rows selected',
    rows_on_page: 'Rows per page',
    page: 'Page',
    empty: 'The table is empty',
  },
}
