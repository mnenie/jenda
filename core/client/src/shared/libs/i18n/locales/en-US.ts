export default {
  sidebar: {
    badge: 'free',
    input: 'Search',
    section: 'workspace',
    projects: 'projects',
    boards: 'Boards',
    tasks: 'Tasks',
    templates: 'Templates',
    analytics: 'Analytics',
    members: 'Members',
    settings: 'Settings',
    integrations: 'Integraions',
    help: {
      title: 'Help',
      items: 'Support developers | Keyboard shortcuts | Join us',
    },
    plan: {
      btn: 'Buy a subscription',
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
    title: 'Boards in this team',
    description:
      'All your active boards are located here, which you can switch to and work on',
    create: 'Create new board',
    filter: {
      input: 'Filter boards...',
      popularity: 'By popularity',
      tooltips: {
        first_sort: 'Sort boards by popularity',
        second_sort: 'Show recent boards',
      },
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
  },
  templates: {
    title: 'Templates',
    description: 'Choose one of the available templates to create your project',
    import: 'Click or drag files to import. Supports files',
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
  analytics: {
    title: 'Workspace Analytics',
    description: 'View and analyze your activity on Jenda',
    charts: {
      users: {
        name: 'Total users',
        description: 'Number of users in the workspace',
      },
      online: {
        name: 'Workspace activity',
      },
      tasks: {
        name: 'Total tasks',
        dataset: {
          names: ['Uncompleted', 'Completed'],
        },
      },
      boards: {
        name: 'Total boards',
      },
    },
    badges: ['Convenient', 'Informative', 'Anytime'],
    share: {
      btn: 'Share',
      description: 'you can easily take a screenshot and send it to anyone',
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
      btn: 'Sign In with Email',
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
        link: {
          label: 'Custom link',
        },
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
      'authorization via google will be replaced with gitlab after 28.12.2024',
  },
  kanban: {
    sorting: {
      all: 'All Tasks',
      activity: 'By activity',
      workload: 'By workload',
    },
    statuses: ['work', 'archive', 'closed'],
    new: 'Add new column',
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
}
