// 订阅记录数据
const subscriptions = [
  { name: 'Netflix',   amount: 58,  type: '影音' },
  { name: 'Spotify',   amount: 28,  type: '音乐' },
  { name: 'iCloud',    amount: 21,  type: '存储' },
  { name: 'ChatGPT',   amount: 150, type: '工具' },
  { name: '京东PLUS',  amount: -50, type: '购物' },
  { name: 'Notion',    amount: 0,   type: '工具' },
  { name: 'B站大会员', amount: 88,  type: '影音' }
];

// 清洗：只保留金额大于0的订阅
const cleanSubs = (list) => list.filter(s => s.amount > 0);

// 总支出
const totalAmount = (list) => list.reduce((sum, s) => sum + s.amount, 0);

// 超预算的订阅名称
const overBudget = (list, budget) =>
  list.filter(s => s.amount > budget).map(s => s.name);
