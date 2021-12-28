export const questions = [
  { text: '问君能有几多愁题', type: 0, options: [{ text: '恰是', mark: 'A' }, { text: '一江', mark: 'B' }, { text: '春水', mark: 'C' }, { text: '向东流', mark: 'D' }] },
  { text: '这货不是题目', type: 1, options: [{ text: '你猜', mark: 'A' }, { text: '这', mark: 'B' }, { text: '是不是', mark: 'C' }, { text: '题目', mark: 'D' }] },
  { text: '答题者拟定很帅/漂亮', type: 2, options: [{ text: '正确', mark: true }, { text: '错误', mark: false }] },
  { text: '问君能有几多愁题', type: 0, options: [{ text: '恰是', mark: 'A' }, { text: '一江', mark: 'B' }, { text: '春水', mark: 'C' }, { text: '向东流', mark: 'D' }] },
  { text: '这货不是题目', type: 1, options: [{ text: '你猜', mark: 'A' }, { text: '这', mark: 'B' }, { text: '是不是', mark: 'C' }, { text: '题目', mark: 'D' }] },
  { text: '答题者拟定很帅/漂亮', type: 2, options: [{ text: '正确', mark: true }, { text: '错误', mark: false }] },
  { text: '问君能有几多愁题', type: 0, options: [{ text: '恰是', mark: 'A' }, { text: '一江', mark: 'B' }, { text: '春水', mark: 'C' }, { text: '向东流', mark: 'D' }] },
  { text: '这货不是题目', type: 1, options: [{ text: '你猜', mark: 'A' }, { text: '这', mark: 'B' }, { text: '是不是', mark: 'C' }, { text: '题目', mark: 'D' }] },
  { text: '答题者拟定很帅/漂亮', type: 2, options: [{ text: '正确', mark: true }, { text: '错误', mark: false }] },
]

export function validateSelected(item, type) {
  switch (type) {
    case 0:
      if (!item) return false
      break
    case 1:
      if (!item || item.length <= 0) return false
      break
    case 2:
      if (item == null) return false
      break
    default: return false
  }
  return true
}
