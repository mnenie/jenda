export default {
  sidebar: {
    badge: '免费',
    input: '搜索',
    section: '工作区',
    projects: '项目',
    boards: '看板',
    notes: '笔记',
    templates: '模板',
    workflows: '工作流',
    members: '成员',
    settings: '设置',
    integrations: '集成',
    help: {
      title: '帮助',
      items: '支持开发者 | 键盘快捷键 | 加入我们',
    },
    notifications: {
      btn: '通知',
    },
    boards_section: {
      title: '看板',
      empty: '没有看板',
    },
    plan: {
      btn: '了解更多',
      title: '高级计划',
      description: '剩余看板',
      tooltip: '1/3 免费工作区',
    },
    soon: '敬请期待',
  },
  header: {
    navigator: {
      question: '快捷键',
      messages: '消息',
    },
    user: {
      welcome: '前往欢迎页面',
      logout: '登出',
    },
    share: '分享',
  },
  boards: {
    create: '添加看板 | 添加新看板',
    routeCreate: '添加看板',
    remove: '删除',
    filters: {
      sort: {
        title: '排序依据',
        name: '名称',
        tasks: '任务',
        date: '创建日期',
        default: '默认',
      },
      advanced: {
        title: '高级筛选',
        empty: '没有这样的筛选器 :/',
        statuses: {
          title: '状态',
          arr: [
            {
              value: 'active',
              label: '活跃',
            },
            {
              value: 'archived',
              label: '已归档',
            },
          ],
        },
        labels: {
          title: '标签',
        },
      },
      search: '搜索看板...',
    },
    forms: {
      creating: {
        title: '创建看板',
        description: '您可以创建一个新的看板来管理任务',
        name: {
          label: '名称',
          placeholder: '请输入看板的名称',
        },
        labels: {
          label: '标签',
          placeholder: '输入标签',
          description: '开始输入标签并按 \'Enter\' 键，将其保存到现有标签中',
          alert: '📝 如何更改标签颜色？| 请参阅我们的文档以获取更多详细信息。',
        },
        btns: '取消 | 创建',
      },
    },
    empty: {
      title: '没有看板',
      description: '创建您的第一个看板并开始工作',
    },
    card: {
      date_updated: '更新时间',
    },
    chart: {
      title_boards: '创建的看板',
      description_boards: '在 Jenda 上创建、分享、工作，然后分析你的活动',
      title_tasks: '你的任务',
      description_tasks: '解决并完成你开始的任务',
    },
    columns: ['看板名称', '标签', '参与者', '任务', '估算', '创建日期'],
  },
  board: {
    remove: {
      title: '删除看板',
      description: '您确定要删除此看板吗？所有相关数据都将被删除。',
    },
    menu: {
      background: '更换背景',
      labels: '标签',
      edit: '编辑',
      delete: '删除',
    },
  },
  notes: {
    create: '添加笔记 | 添加新笔记',
    remove: '删除',
    filters: {
      sort: {
        title: '排序方式',
        date: '更新日期',
        default: '默认',
      },
      search: '搜索笔记...',
    },
    empty: {
      title: '没有笔记',
      description: '创建您的第一条笔记并分享您的想法',
    },
    columns: ['笔记标题', '内容', '创建者', '参与者', '更新日期'],
  },
  note: {
    lastModified: '修改',
    actions: '代码检查 | 删除笔记',
    editor: {
      placeholder: '输入一些内容，输入 \'/\' 查看命令…',
      menu: {
        bold: '加粗',
        italic: '倾斜',
        underline: '下划线',
        strike: '删除线',
        code: '代码块',
      },
      nodes: {
        heading1: {
          title: '标题 1',
          description: '大节标题。',
        },
        heading2: {
          title: '标题 2',
          description: '中节标题。',
        },
        heading3: {
          title: '标题 3',
          description: '小节标题。',
        },
        paragraph: {
          title: '段落',
          description: '直接输入普通文本。',
        },
        bulletList: {
          title: '项目符号列表',
          description: '创建项目符号列表。',
        },
        orderedList: {
          title: '有序列表',
          description: '创建有序列表。',
        },
        taskList: {
          title: '任务列表',
          description: '创建任务列表。',
        },
        blockquote: {
          title: '引用',
          description: '添加引用。',
        },
        alignLeft: {
          title: '左对齐',
          description: '将文本左对齐。',
        },
        alignCenter: {
          title: '居中对齐',
          description: '将文本居中对齐。',
        },
        alignRight: {
          title: '右对齐',
          description: '将文本右对齐。',
        },
      },
    },
  },
  picker: {
    placeholder: '自定义颜色',
    tabs: '纯色 | 渐变',
  },
  common: {
    remove: {
      warning: '此操作无法撤销。',
      btns: '取消 | 删除 | 删除',
    },
    create: {
      btns: '取消 | 创建',
    },
  },
  workflows: {
    create: '添加流程 | 添加新流程',
    remove: '删除',
    filters: {
      sort: {
        title: '排序方式',
        date: '更新时间',
        default: '默认',
      },
      search: '查找流程...',
    },
    forms: {
      creating: {
        title: '创建流程',
        description_main: '创建一个新流程以优化您的工作',
        name: {
          label: '名称',
          placeholder: '输入流程名称',
        },
        description: {
          label: '描述',
          placeholder: '描述您的新流程',
        },
        alert: '流程在创建时将处于 | 要使其完全准备好，必须将流程移至',
        btns: '取消 | 继续',
      },
    },
    section: {
      all: '所有流程',
      recent: '最近的',
    },
    status: {
      draft: '草稿',
      production: '生产',
    },
    runs: '{n} 运行',
    empty: {
      title: '暂无流程',
      description: '创建您的第一个流程并自动化任务',
    },
    columns: ['流程名称', '描述', '创建者', '运行次数', '状态', '更新时间'],
  },
  workflow: {
    alert: {
      status: '此流程的状态为',
      btn: '开始生产',
    },
    remove: {
      title: '删除流程',
      description: '您确定要删除此流程吗？所有相关数据都将被删除。',
    },
    handlers: {
      hand: '手',
      move: '移动',
      lock: '锁定',
      layout: 'AI 助力: 布局',
    },
    actions: '日志 | 运行',
    panel: {
      open: '打开面板',
      close: '关闭面板',
    },
    empty: '将元素拖到此区域',
    nodes: {
      title: '所有节点',
      description: '在这里您可以选择任何节点。',
      main: '主要',
      effects: '效果',
      links: '有用的链接',
      docs: {
        title: '文档',
        description: '了解如何管理系统中的节点。',
      },
      items: [
        {
          title: '触发器',
          description: '流程的开始',
        },
        {
          title: '操作',
          description: '在流程中执行操作',
        },
        {
          title: '通知',
          description: '发送消息',
        },
        {
          title: '条件',
          description: '检查条件是否满足',
        },
        {
          title: '延迟',
          description: '暂停执行指定时间',
        },
        {
          title: '彩带',
          description: '创建节日彩带效果',
        },
      ],
      alert: '设置操作',
    },
  },
  templates: {
    title: '模板',
    description: '选择一个可用模板来创建您的项目',
    import: '点击或拖拽文件导入。支持文件',
    community: '社区模板',
    create: '创建模板',
    user: '创建者',
    items: [
      {
        title: '基础看板',
        tag: '推荐',
        description: '使用 "基础看板" 模板创建一个基本项目',
        date: '2024年6月12日',
      },
      {
        title: '路线图',
        tag: '新',
        description: '基于我们的 "路线图" 模板创建一个项目',
        date: '2024年6月18日',
      },
      {
        title: '网页开发',
        tag: '新',
        description: '使用 "网页开发" 模板创建一个基本项目',
        date: '2024年7月16日',
      },
    ],
  },
  members: {
    title: '工作区参与者',
    description: '成员可以查看和加入工作区的白板，并在该空间中创建新的白板。',
    content: {
      all: {
        title: '邀请用户',
        description:
          '任何拥有邀请链接的人都可以加入这个免费的工作区。链接可以在任何时候被禁用和重新创建。待处理的邀请计入10名参与者的限制。',
        btn: '所有参与者',
      },
      guests: {
        title: '访客',
        description: '访客只能查看和编辑他们被添加的板。',
        btn: '访客',
      },
    },
    role: {
      member: '成员',
      admin: '管理员',
    },
    btns: {
      leave: '离开',
      view: '查看白板',
    },
  },
  settings: {
    title: '设置',
    description: '管理您的帐户设置和设定一些偏好。',
    lang: {
      label: '语言',
      about: '这是将在仪表板中使用的语言。',
    },
    theme: {
      label: '主题',
      about: '选择仪表板的主题。',
      variants: {
        light: '浅色',
        dark: '深色',
        auto: '系统',
      },
      btn: '更新偏好设置',
    },
  },
  sheet: {
    title: '创建看板',
    description: '新看板将允许你创建任务以进行解决。',
    form: {
      name: {
        label: '看板名称',
        placeholder: '例如 “Jenda”',
      },
      description: {
        label: '看板描述',
        placeholder: '例如 我们公司的开发看板',
      },
      submit: '创建看板',
    },
  },
  authentication: {
    login: {
      title: '欢迎回来',
      description: '请输入下面的信息以登录您的帐户',
      btn: '用电子邮件登录',
      proposal: '还没有帐户？',
      route: '立即登录',
    },
    registration: {
      title: '开始使用',
      description: '请输入下面的信息以创建您的帐户',
      btn: '继续',
      proposal: '已有帐户？',
      route: '立即登录',
    },
    confirm: {
      title: '确认您的邮箱',
      description: '请输入发送到您邮箱的验证码',
      btn: '确认',
      alert: '我们重视您的安全，您可以放心信任我们！',
      proposal: '没有收到验证码？',
      route: '重新发送',
    },
    workspace: {
      creating: {
        title: '创建工作区',
        logo: {
          label: '为您的工作区选择一个标志',
          btn: '选择图片 | 删除',
          description: '文件 *.png, *.jpeg，最大 10MB，尺寸至少为 400x400 像素',
        },
        alert: '请记住，如果您未选择标志，Jenda 将自动为您生成一个',
        form: {
          name: {
            label: '名称',
            placeholder: '输入您的工作区名称',
          },
          url: {
            label: '自定义链接',
          },
        },
      },
      choosing: {
        title: '选择工作空间',
        description: '您的团队使用 Jenda 越积极，您的工作空间就会越高效。| Jenda 改变了在共享工作空间中的协作方式——从项目组织和任务管理到集中讨论和创建高效工作流程。',
        label: '可用的工作空间',
      },
      route: '立即登录',
    },
    form: {
      email: '电子邮件',
      password: '密码',
      otp: '您应输入一串单个数字的值。',
    },
    line: '或继续使用',
    privacy: ['点击继续即表示您同意我们的', '点击登录即表示您同意我们的', '服务条款', '和', '隐私政策。'],
    back: '回到首页',
    auth_alert: '通过 google 的授权将在 2025 年 02 月 28 日后被 gitlab 替代',
  },
  kanban: {
    sorting: {
      all: '所有任务',
      activity: '按活动排序',
      workload: '按工作量排序',
    },
    view: {
      kanban: '看板',
      timeline: '时间轴',
    },
    menu: ['更改背景', '标签', '编辑', '删除'],
    export: '导出看板',
    active: '活跃',
    archived: '已归档',
    alert: '该看板已被归档，无法再编辑。',
    column: {
      new: '添加新列',
      tooltips: {
        actions: '列的操作',
      },
      menu: {
        edit: '编辑',
        delete: '删除',
        limit: '设置限制',
      },
      tasks: {
        new: '添加任务',
        forms: {
          creating: {
            dialogTitle: '创建任务',
            dialogDescription: '您可以为此列创建一个新任务。',
            title: {
              label: '标题',
              placeholder: '输入任务标题',
            },
            timeLimit: {
              creationDate: '创建日期',
              label: '时间限制',
              placeholder: '选择日期',
              error: '不能选择过去的时间',
            },
            users: {
              label: '执行者',
              placeholder: '添加执行者',
              commandHeading: '可用执行者',
              commandEmpty: '未找到 :/',
              commandSearch: '搜索...',
            },
            labels: {
              label: '标签',
              placeholder: '添加标签',
              commandHeading: '可用标签',
              commandEmpty: '未找到 :/',
              commandSearch: '搜索...',
            },
            btns: '取消 | 创建',
          },
        },
      },
    },
    cards: {
      add: '添加卡片',
    },
    sheet: {
      column: {
        title: '添加新列',
        description: '创建新列时，您可以创建卡片并使用看板。',
        form: {
          label: '列名称',
          placeholder: '输入列名称',
          submit: '创建列',
        },
      },
    },
    configuration: {
      title: '配置您的看板',
      description: '自定义您的看板以方便使用',
      name: '项目的名称和颜色指示器"',
      users: '參與者',
      status: '选择您的项目状态',
      clear: '清空看板',
      update: '应用更改',
    },
  },
  welcome: {
    header: {
      links: ['关于', '看板', '协作', '活动', '成员', '聊天'],
      login: '登录',
      reg: '注册',
    },
    about: {
      tagline: '通往完美的道路',
      description:
        'Jenda 是一款基于云的程序，用于高效协作和个人项目与任务管理。',
      badge: '核心功能：任务板、实时跟踪',
      badge_mobile: '核心功能：任务板、实时跟踪',
      btn: '注册',
    },
    marketing: {
      heading: '所有便利都在一个地方',
      cards: [
        {
          title: '看板 🧑‍💻',
          description:
            '使用我们直观的看板来组织和可视化您的项目。轻松提升生产力。',
        },
        {
          title: '协作 👥',
          description: '提升你的团队合作！',
        },
        {
          title: '成员 🌐',
          description: '邀请新成员参与您的项目。一起享受开发的乐趣！',
        },
        {
          title: '活动 👔',
          description: '分析您的活动，迈步向前。',
        },
        {
          title: '聊天 💬',
          description: '交流、分享、讨论。我们为您提供便利 😉',
        },
      ],
    },
    marquee: [
      '我们知道',
      '你享受',
      '👑 俄罗斯最好的替代品',
      '开源',
      '👻 我们更简单',
      '无广告',
      '完美就在眼前 🤟',
    ],
    kanban: {
      name: '使用Kanban',
      heading: '你知道我们的Kanban吗？👀',
      about:
        'Kanban 是一种简单高效的项目、任务和时间管理方式。通过在看板上可视化您的任务，您可以轻松跟踪进度，了解接下来需要做什么。',
      writer: '尝试使用我们的Kanban，尽情征服世界',
      review: {
        name: '亚历克斯·佩什科夫',
        status: '前端开发者，开源爱好者',
        comment: '我每天都在使用看板，强烈建议大家尝试。这真是太棒了！',
      },
    },
    collaborative: {
      name: '一起更轻松',
      heading: '每个任务都是通向 🤝 共同成功的一步！',
      about:
        '我们的服务是为那些通过协作追求成功的团队而创建的。借助它，每个参与者都可以轻松跟踪任务，分享想法，并与同事共同朝着共同目标迈进。',
      writer: '加入我们，齐心协力迈向成功！',
      review: {
        name: '巴高丁诺夫·艾拉特',
        status: '后端开发人员',
        comment: '合作是很棒的！Jenda提供了如此美好的机会。',
      },
    },
    activity: {
      heading: '进行中的进展',
      about:
        '您可以查看已完成任务和开放看板的统计信息。这使您能够跟踪团队的进展，查看已完成的任务，以及管理当前的任务和项目。',
    },
    members: {
      name: '团队成员',
      heading: '与友好的 😉 开发者团队一起工作',
      about:
        '我们的服务让您可以创建和管理团队，添加成员，分享任务并实时获取反馈。',
      writer: '加入并成为焦点！',
      review: {
        name: '亚历山大·佩什科夫',
        status: '前端开发者，开源爱好者',
        comment:
          '这是一个很棒的协作工具。界面方便，功能实用！ 👍 和朋友们一起工作',
      },
    },
    chats: {
      name: '沟通的轻松',
      heading: '您与团队沟通的频率有多高？🤔',
      about: `我们的聊天功能让您可以轻松地交换消息、分享想法，与团队保持同步。保持联系，更高效地工作！`,
      writer: '在我们便捷的聊天中分享您的想法和创意！',
      review: {
        name: '艾尔拉特·巴高特丁诺夫',
        status: '后端开发者',
        comment: '这里的聊天功能真的很方便！与团队轻松交换想法，快速解决问题。',
      },
    },
    footer: '基于云的任务管理程序。源代码可在',
    mobile: {
      section_blocks: [
        {
          title: '关于我们',
          description: '了解 Jenda',
        },
        {
          title: '看板',
          description: '使用看板管理项目',
        },
        {
          title: '协作',
          description: '提高你的团队合作！',
        },
        {
          title: '成员',
          description: '邀请成员加入项目',
        },
        {
          title: '活动',
          description: '分析您的活动',
        },
        {
          title: '聊天',
          description: '沟通、分享、讨论',
        },
      ],
      links: [
        {
          title: '产品',
        },
        {
          title: '通过 Telegram 联系我们',
        },
      ],
    },
  },
  not_found: {
    title: '未找到',
    description: '找不到您要查找的页面',
    btn: '返回首页',
  },
  dialogs: {
    share: {
      title: '分享链接',
      description: '任何拥有此链接的人都可以加入',
      close: '取消',
    },
    hotkeys: {
      title: '快捷键',
      badges: '打开工作区搜索 | 转到主页 | 退出服务',
      alert: '你会在下面频繁看到 { badge }。它表示 Mac 上的 Command 键，Windows 和 Linux 上的 Control 键。',
    },
  },
  validations: {
    email: '邮箱',
    password: '密码',
    pin: '确认码',
    name: '名称',
    url: '自定义链接',
  },
  search: {
    placeholder: '输入内容进行搜索...',
    empty: '未找到结果',
    recently: '最近',
    links: '链接',
    select: '选择',
    open: '打开',
    close: '关闭',
  },
  workspace: {
    popover: {
      members: '{n} 成员',
      section: '管理',
      pay: '套餐与付款',
      invite: '邀请加入项目',
      team: '团队',
      settings: '更改信息',
      active: '活跃',
      archive: '已归档',
    },
  },
  table: {
    row_from_all: '从',
    row_selected: '行已选择',
    rows_on_page: '每页行数',
    page: '页面',
    empty: '表格为空',
  },
}
