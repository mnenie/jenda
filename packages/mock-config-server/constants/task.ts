export const task_data = {
  title: 'test title',
  description: {
    content: undefined,
    updatedBy: {
      _id: '1',
      email: 'mnenie',
      photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
    },
    status: 'created',
  },
  timer: 75,
  executing: false,
  users: [
    {
      _id: '2',
      email: 'egor@test.com',
      photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
      role: 'member',
    },
  ],
  commentsGroup: [
    {
      date: new Date(2025, 3, 8),
      comments: [
        {
          _id: '1',
          message: '<p><mark data-color="#b197fc55" style="background-color: #b197fc55; color: inherit">Чтобы </mark><span style="color: inherit"><mark data-color="#b197fc55" style="background-color: #b197fc55; color: inherit">стилизовать</mark></span> текст <s>так</s>, <strong>как</strong> <u>тебе</u> <em>хочется</em>, выдели текст и в появившемся меню выбери нужное форматирование</p><p>Настрой приватность и роли участников в документах. Подробнее в <a target="_blank" rel="noopener noreferrer nofollow" class="link-entity" href="https://app.weeek.net/ws/759997/kb/3">Настройки приватности</a></p>',
          user: {
            _id: '1',
            email: 'alex@test.com',
            photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
            role: 'admin',
          },
          reactions: [
            {
              type: 'fire',
              symbol: 'noto:fire',
              count: 2,
              users: [
                '2',
                '3',
              ],
            },
          ],
          replies: 3,
        },
        {
          _id: '2',
          message: '<p>This problem was also reported in #4465, I want to fix it later. My idea is to dynamically sense whether the application preset is <code>wind3</code> or <code>wind4</code> in the preset, so as to switch the theme key.</p>',
          user: {
            _id: '2',
            email: 'egor@test.com',
            photoUrl: 'https://avatars.githubusercontent.com/u/84976745?s=130&v=4',
            role: 'member',
          },
          from: {
            _id: '1',
            user: {
              _id: '1',
              email: 'alex@mail.ru',
              photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
              role: 'admin',
            },
            message: '<p><mark data-color="#b197fc55" style="background-color: #b197fc55; color: inherit">Чтобы </mark><span style="color: inherit"><mark data-color="#b197fc55" style="background-color: #b197fc55; color: inherit">стилизовать</mark></span> текст <s>так</s>, <strong>как</strong> <u>тебе</u> <em>хочется</em>, выдели текст и в появившемся меню выбери нужное форматирование</p><p>Настрой приватность и роли участников в документах. Подробнее в <a target="_blank" rel="noopener noreferrer nofollow" class="link-entity" href="https://app.weeek.net/ws/759997/kb/3">Настройки приватности</a></p>',
          },
        },
        {
          _id: '3',
          message: '<p><strong>База знаний </strong>— это один из сервисов WEEEK, в котором можно создать хранилище для разной информации: документов, регламентов, рекомендаций или конспектов. Своего рода библиотека знаний твоей команды или компании</p><p></p><br><img src="https://storage.weeek.net/storage/Fw/cWBtkSsc8K1GAxHA.png">',
          user: {
            _id: '2',
            email: 'egor@test.com',
            photoUrl: 'https://avatars.githubusercontent.com/u/84976745?s=130&v=4',
            role: 'member',
          },
        },
        {
          _id: '4',
          message: 'ok thats coll for now. submit 💯',
          user: {
            _id: '1',
            email: 'alex@test.com',
            photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
            role: 'admin',
          },
          replies: 1,
        },
      ],
    },
    {
      date: new Date(2025, 3, 9),
      comments: [
        {
          _id: '5',
          message: '<p><code>Публичная ссылка</code> на документ доступна всем пользователям интернета без необходимости регистрации в WEEEK. Чтобы поделиться документом, нажми <strong>«Поделиться»</strong> в правой части <mark data-color="#b197fc55" style="background-color: #b197fc55; color: inherit">экрана</mark></p>',
          user: {
            _id: '3',
            email: 'nick12312434@gmail.com',
            photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
            role: 'member',
          },
          replies: 0,
        },
      ],
    },
  ],
  attachments: [],
  creator: {
    _id: '1',
    email: 'alex@test.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
  },
}
