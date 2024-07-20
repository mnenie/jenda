export default {
  sidebar: {
    badge: '免费',
    input: '搜索',
    section: '工作区',
    boards: '看板',
    templates: '模板',
    members: '成员',
    settings: '设置',
    plan: '升级你的计划'
  },
  header: {
    upgrade: '升级到“专业版”',
    collaboration: '邀请成员',
    name: '测试工作区'
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
  }
};
