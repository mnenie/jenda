export default {
  invalidTypeReceivedUndefined: '此字段为必填项',
  invalidString: {
    email: '{validation} 必须是有效的',
    url: '{validation} 必须是有效的',
  },
  tooSmall: {
    string: {
      exact: '长度必须至少为 {minimum} 个字符',
      inclusive: '长度必须至少为 {minimum} 个字符',
    },
    array: {
      exact: '长度必须至少为 {minimum} 个字符',
      inclusive: '长度必须至少为 {minimum} 个字符',
    },
  },
  tooBig: {
    string: {
      exact: '长度不得超过 {maximum} 个字符',
      inclusive: '长度不得超过 {maximum} 个字符',
    },
  },
}
