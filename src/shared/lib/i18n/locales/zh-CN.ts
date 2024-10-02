export default {
  sidebar: {
    badge: '免费',
    input: '搜索',
    section: '工作区',
    projects: '项目',
    boards: '看板',
    templates: '模板',
    members: '成员',
    settings: '设置',
    plan: '升级你的计划'
  },
  header: {
    upgrade: '升级到“专业版”',
    collaboration: '邀请成员',
    name: '测试工作区',
    user: {
      welcome: '前往欢迎页面',
      logout: '登出'
    }
  },
  boards: {
    title: '此团队的看板',
    description: '所有活动中的看板都在这里，你可以切换并进行操作',
    create: '创建新看板',
    filter: {
      input: '筛选看板...',
      popularity: '按热门排序',
      tooltips: {
        first_sort: '按热门排序看板',
        second_sort: '显示最近的看板'
      }
    },
    card: {
      date_updated: '更新时间'
    },
    chart: {
      title_boards: '创建的看板',
      description_boards: '在 Jenda 上创建、分享、工作，然后分析你的活动',
      title_tasks: '你的任务',
      description_tasks: '解决并完成你开始的任务'
    }
  },
  templates: {
    title: '模板',
    description: '选择一个可用模板来创建您的项目',
    user: '创建者',
    items: [
      {
        title: '基础看板',
        tag: '推荐',
        description: '使用 "基础看板" 模板创建一个基本项目',
        date: '2024年6月12日'
      },
      {
        title: '路线图',
        tag: '新',
        description: '基于我们的 "路线图" 模板创建一个项目',
        date: '2024年6月18日'
      },
      {
        title: '网页开发',
        tag: '新',
        description: '使用 "网页开发" 模板创建一个基本项目',
        date: '2024年7月16日'
      }
    ]
  },
  members: {
    title: '工作区参与者',
    description: '成员可以查看和加入工作区的白板，并在该空间中创建新的白板。',
    content: {
      all: {
        title: '邀请用户',
        description:
          '任何拥有邀请链接的人都可以加入这个免费的工作区。链接可以在任何时候被禁用和重新创建。待处理的邀请计入10名参与者的限制。',
        btn: '所有参与者'
      },
      guests: {
        title: '访客',
        description: '访客只能查看和编辑他们被添加的板。',
        btn: '访客'
      }
    },
    role: {
      member: '成员',
      admin: '管理员'
    },
    btns: {
      leave: '离开',
      view: '查看白板'
    }
  },
  settings: {
    title: '设置',
    description: '管理您的帐户设置和设定一些偏好。',
    lang: {
      label: '语言',
      about: '这是将在仪表板中使用的语言。'
    },
    theme: {
      label: '主题',
      about: '选择仪表板的主题。',
      variants: {
        light: '浅色',
        dark: '深色',
        auto: '系统'
      },
      btn: '更新偏好设置'
    }
  },
  sheet: {
    title: '创建看板',
    description: '新看板将允许你创建任务以进行解决。',
    form: {
      name: {
        label: '看板名称',
        placeholder: '例如 “Jenda”'
      },
      description: {
        label: '看板描述',
        placeholder: '例如 我们公司的开发看板'
      },
      submit: '创建看板'
    }
  },
  authentication: {
    login: {
      title: '欢迎回来',
      description: '请输入下面的信息以登录您的帐户',
      btn: '用电子邮件登录',
      proposal: '还没有帐户？',
      route: '立即注册'
    },
    registration: {
      title: '开始使用',
      description: '请输入下面的信息以创建您的帐户',
      btn: '用电子邮件注册',
      proposal: '已有帐户？',
      route: '立即登录'
    },
    form: {
      email: '电子邮件',
      password: '密码'
    },
    line: '或继续使用',
    privacy: ['点击继续即表示您同意我们的', '服务条款', '和', '隐私政策。']
  },
  kanban: {
    sorting: {
      all: '所有任务',
      activity: '按活动排序',
      workload: '按工作量排序'
    },
    statuses: ['工作', '归档', '关闭'],
    new: '添加新列',
    cards: {
      add: '添加卡片'
    },
    sheet: {
      column: {
        title: '添加新列',
        description: '创建新列时，您可以创建卡片并使用看板。',
        form: {
          label: '列名称',
          placeholder: '输入列名称',
          submit: '创建列'
        }
      }
    },
    configuration: {
      title: '配置您的看板',
      description: '自定义您的看板以方便使用',
      name: '项目的名称和颜色指示器"',
      users: '參與者',
      status: '选择您的项目状态',
      clear: '清空看板',
      update: '应用更改'
    }
  },
  welcome: {
    header: {
      links: ['关于', '看板', '协作', '活动', '成员', '聊天'],
      login: '登录',
      reg: '注册'
    },
    about: {
      tagline: '通往完美的道路',
      description: 'Jenda 是一款基于云的程序，用于高效协作和个人项目与任务管理。',
      badge: '核心功能：任务板、实时跟踪',
      btn: '注册'
    },
    marketing: {
      heading: '所有便利都在一个地方',
      cards: [
        {
          title: '看板 🧑‍💻',
          description: '使用我们直观的看板来组织和可视化您的项目。轻松提升生产力。'
        },
        {
          title: '协作 👥',
          description: '提升你的团队合作！'
        },
        {
          title: '成员 🌐',
          description: '邀请新成员参与您的项目。一起享受开发的乐趣！'
        },
        {
          title: '活动 👔',
          description: '分析您的活动，迈步向前。'
        },
        {
          title: '聊天 💬',
          description: '交流、分享、讨论。我们为您提供便利 😉'
        }
      ]
    },
    marquee: [
      '我们知道',
      '你享受',
      '👑 俄罗斯最好的替代品',
      '开源',
      '👻 我们更简单',
      '无广告',
      '完美就在眼前 🤟'
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
        comment: '我每天都在使用看板，强烈建议大家尝试。这真是太棒了！'
      }
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
        comment: '合作是很棒的！Jenda提供了如此美好的机会。'
      }
    },
    activity: {
      heading: '进行中的进展',
      about:
        '您可以查看已完成任务和开放看板的统计信息。这使您能够跟踪团队的进展，查看已完成的任务，以及管理当前的任务和项目。'
    },
    members: {
      name: '团队成员',
      heading: '与友好的 😉 开发者团队一起工作',
      about: '我们的服务让您可以创建和管理团队，添加成员，分享任务并实时获取反馈。',
      writer: '加入并成为焦点！',
      review: {
        name: '亚历山大·佩什科夫',
        status: '前端开发者，开源爱好者',
        comment: '这是一个很棒的协作工具。界面方便，功能实用！ 👍 和朋友们一起工作'
      }
    },
    chats: {
      name: '沟通的轻松',
      heading: '您与团队沟通的频率有多高？🤔',
      about: `我们的聊天功能让您可以轻松地交换消息、分享想法，与团队保持同步。保持联系，更高效地工作！`,
      writer: '在我们便捷的聊天中分享您的想法和创意！',
      review: {
        name: '艾尔拉特·巴高特丁诺夫',
        status: '后端开发者',
        comment: '这里的聊天功能真的很方便！与团队轻松交换想法，快速解决问题。'
      }
    },
    footer: '基于云的任务管理程序。源代码可在'
  },
  not_found: {
    title: '未找到',
    description: '找不到您要查找的页面',
    btn: '返回首页'
  }
};
