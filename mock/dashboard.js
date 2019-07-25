import { Mock, Constant } from './_utils'

const { ApiPrefix, Color } = Constant

const Dashboard = Mock.mock({
  sales: [
    { name: 2008, Clothes: 488, Food: 277, Electronics: 323 },
    { name: 2009, Clothes: 253, Food: 327, Electronics: 423 },
    { name: 2010, Clothes: 376, Food: 304, Electronics: 429 },
    { name: 2011, Clothes: 372, Food: 189, Electronics: 352 },
    { name: 2012, Clothes: 306, Food: 384, Electronics: 317 },
    { name: 2013, Clothes: 491, Food: 211, Electronics: 496 },
    { name: 2014, Clothes: 346, Food: 268, Electronics: 366 },
    { name: 2015, Clothes: 283, Food: 279, Electronics: 372 },
  ],
  cpu: {
    'usage|50-600': 1,
    space: 825,
    'cpu|40-90': 1,
    'data|20': [
      {
        'cpu|20-80': 1,
      },
    ],
  },
  browser: [
    {
      name: 'Google Chrome',
      percent: 43.3,
      status: 1,
    },
    {
      name: 'Mozilla Firefox',
      percent: 33.4,
      status: 2,
    },
    {
      name: 'Apple Safari',
      percent: 34.6,
      status: 3,
    },
    {
      name: 'Internet Explorer',
      percent: 12.3,
      status: 4,
    },
    {
      name: 'Opera Mini',
      percent: 3.3,
      status: 1,
    },
    {
      name: 'Chromium',
      percent: 2.53,
      status: 1,
    },
  ],
  user: {
    name: 'github',
    sales: 3241,
    sold: 3556,
  },
  'completed|12': [
    {
      'name|+1': 2008,
      'Task complete|200-1000': 1,
      'Cards Complete|200-1000': 1,
    },
  ],
  'comments|5': [
    {
      name: '@last',
      'status|1-3': 1,
      content: '@sentence',
      avatar() {
        return Mock.Random.image(
          '48x48',
          Mock.Random.color(),
          '#757575',
          'png',
          this.name.substr(0, 1)
        )
      },
      date() {
        return `2016-${Mock.Random.date('MM-dd')} ${Mock.Random.time(
          'HH:mm:ss'
        )}`
      },
    },
  ],
  'recentSales|36': [
    {
      'id|+1': 1,
      name: '@last',
      'status|1-4': 1,
      date() {
        return `${Mock.Random.integer(2015, 2016)}-${Mock.Random.date(
          'MM-dd'
        )} ${Mock.Random.time('HH:mm:ss')}`
      },
      'price|10-200.1-2': 1,
    },
  ],
  quote: {
    name: 'Joho Doe',
    title: 'Graphic Designer',
    content:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    avatar:
      'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
  },
  numbers: [
    {
      icon: 'pay-circle-o',
      color: Color.green,
      title: '总支出',
      number: 2781,
    },
    // {
    //   icon: 'step-backward',
    //   color: Color.green,
    //   title: '总支出',
    //   number: 2781,
    // },
    // {
    //   icon: 'ellipsis',
    //   color: Color.blue,
    //   title: '食物',
    //   number: 3241,
    // },
    // {
    //   icon: 'message',
    //   color: Color.purple,
    //   title: '商品',
    //   number: 253,
    // },
    // {
    //   icon: 'shopping-cart',
    //   color: Color.red,
    //   title: '衣服',
    //   number: 4324,
    // },
  ],
})

module.exports = {
  [`GET ${ApiPrefix}/dashboard`](req, res) {
    res.json(Dashboard)
  },
}

var data = {
  sales: [
    { name: 2008, Clothes: 488, Food: 277, Electronics: 323 },
    { name: 2009, Clothes: 253, Food: 327, Electronics: 423 },
    { name: 2010, Clothes: 376, Food: 304, Electronics: 429 },
    { name: 2011, Clothes: 372, Food: 189, Electronics: 352 },
    { name: 2012, Clothes: 306, Food: 384, Electronics: 317 },
    { name: 2013, Clothes: 491, Food: 211, Electronics: 496 },
    { name: 2014, Clothes: 346, Food: 268, Electronics: 366 },
    { name: 2015, Clothes: 283, Food: 279, Electronics: 372 },
  ],
  cpu: {
    usage: 329,
    space: 825,
    cpu: 82,
    data: [
      { cpu: 30 },
      { cpu: 21 },
      { cpu: 21 },
      { cpu: 20 },
      { cpu: 70 },
      { cpu: 76 },
      { cpu: 44 },
      { cpu: 50 },
      { cpu: 24 },
      { cpu: 46 },
      { cpu: 51 },
      { cpu: 32 },
      { cpu: 78 },
      { cpu: 73 },
      { cpu: 60 },
      { cpu: 56 },
      { cpu: 41 },
      { cpu: 76 },
      { cpu: 21 },
      { cpu: 34 },
    ],
  },
  browser: [
    { name: 'Google Chrome', percent: 43.3, status: 1 },
    { name: 'Mozilla Firefox', percent: 33.4, status: 2 },
    { name: 'Apple Safari', percent: 34.6, status: 3 },
    { name: 'Internet Explorer', percent: 12.3, status: 4 },
    { name: 'Opera Mini', percent: 3.3, status: 1 },
    { name: 'Chromium', percent: 2.53, status: 1 },
  ],
  user: { name: 'github', sales: 3241, sold: 3556 },
  completed: [
    { name: 2008, 'Task complete': 821, 'Cards Complete': 631 },
    { name: 2009, 'Task complete': 959, 'Cards Complete': 912 },
    { name: 2010, 'Task complete': 944, 'Cards Complete': 812 },
    { name: 2011, 'Task complete': 264, 'Cards Complete': 345 },
    { name: 2012, 'Task complete': 361, 'Cards Complete': 326 },
    { name: 2013, 'Task complete': 565, 'Cards Complete': 325 },
    { name: 2014, 'Task complete': 706, 'Cards Complete': 572 },
    { name: 2015, 'Task complete': 756, 'Cards Complete': 964 },
    { name: 2016, 'Task complete': 372, 'Cards Complete': 873 },
    { name: 2017, 'Task complete': 557, 'Cards Complete': 762 },
    { name: 2018, 'Task complete': 235, 'Cards Complete': 232 },
    { name: 2019, 'Task complete': 866, 'Cards Complete': 489 },
  ],
  comments: [
    {
      name: 'Johnson',
      status: 1,
      content:
        'Vowbxk vrmrqxqwm rxsvakmiys tquatv dhhpfvd magjoklsu cicdfhnjxj qlh jvxayihw wvgj dwmg qbx cwxqchm plzlxppky kcswihlee.',
      avatar: 'http://dummyimage.com/48x48/b479f2/757575.png&text=J',
      date: '2016-04-30 19:53:00',
    },
    {
      name: 'Jackson',
      status: 2,
      content:
        'Wkickrm lncfvhntoy kcqirrw evectowfg ksfrbrmki gghsoniq afmro uzefuuyd mmhfhxd coz krvgg uymi mjxv utk srrigbtpko kxvqpcfdy.',
      avatar: 'http://dummyimage.com/48x48/79f291/757575.png&text=J',
      date: '2016-03-15 03:46:53',
    },
    {
      name: 'Williams',
      status: 1,
      content:
        'Dulwrq bxtjp cssr kvbjuylv evybsxpxdw utlvkkju jwrt vkwga sfunllsq fghyjxvdb pbolsspj rutxcc spsempo gxyykzjfuo lfytdvc idfwtjjg kmdf.',
      avatar: 'http://dummyimage.com/48x48/f27984/757575.png&text=W',
      date: '2016-03-04 01:01:24',
    },
    {
      name: 'Williams',
      status: 2,
      content:
        'Ccuajf oditamgew xtsbhy ixghlbtm dldhhtbgfv dscsx hqskw hgbsh qgwyssjqb djyu yiexuw geqv iks.',
      avatar: 'http://dummyimage.com/48x48/79a7f2/757575.png&text=W',
      date: '2016-12-24 14:38:33',
    },
    {
      name: 'Jackson',
      status: 1,
      content:
        'Cbixotuwe hwtsunlhm muohvgp vkndfxr pjmwfyn rjpco hvotzgdgo yiqxb bbqvlt enxir kazntrph soflryrr lickijp.',
      avatar: 'http://dummyimage.com/48x48/cbf279/757575.png&text=J',
      date: '2016-11-09 13:14:35',
    },
  ],
  recentSales: [
    {
      id: 1,
      name: 'Miller',
      status: 4,
      price: 121.7,
      date: '2015-01-29 11:23:13',
    },
    {
      id: 2,
      name: 'Davis',
      status: 3,
      price: 132.5,
      date: '2016-02-21 00:38:50',
    },
    {
      id: 3,
      name: 'Hernandez',
      status: 1,
      price: 57.54,
      date: '2015-07-01 00:00:53',
    },
    {
      id: 4,
      name: 'Jackson',
      status: 1,
      price: 53.32,
      date: '2015-04-26 20:40:18',
    },
    {
      id: 5,
      name: 'Thompson',
      status: 2,
      price: 17.2,
      date: '2015-04-25 13:08:28',
    },
    {
      id: 6,
      name: 'Harris',
      status: 3,
      price: 144.1,
      date: '2016-07-24 16:16:01',
    },
    {
      id: 7,
      name: 'Johnson',
      status: 4,
      price: 73.68,
      date: '2015-03-21 23:46:59',
    },
    {
      id: 8,
      name: 'Taylor',
      status: 2,
      price: 100.5,
      date: '2016-12-25 15:36:14',
    },
    {
      id: 9,
      name: 'Walker',
      status: 1,
      price: 69.86,
      date: '2015-08-31 03:24:39',
    },
    {
      id: 10,
      name: 'Jones',
      status: 1,
      price: 197.2,
      date: '2016-12-05 23:12:32',
    },
    {
      id: 11,
      name: 'Lee',
      status: 3,
      price: 43.8,
      date: '2016-11-12 20:38:25',
    },
    {
      id: 12,
      name: 'Martin',
      status: 2,
      price: 77.83,
      date: '2016-11-06 22:36:14',
    },
    {
      id: 13,
      name: 'Jackson',
      status: 3,
      price: 138.3,
      date: '2015-10-15 22:54:33',
    },
    {
      id: 14,
      name: 'Moore',
      status: 3,
      price: 135.84,
      date: '2016-02-06 21:41:08',
    },
    {
      id: 15,
      name: 'Hernandez',
      status: 2,
      price: 92.3,
      date: '2016-05-03 01:03:50',
    },
    {
      id: 16,
      name: 'Thompson',
      status: 2,
      price: 79.6,
      date: '2016-08-05 17:24:27',
    },
    {
      id: 17,
      name: 'Davis',
      status: 4,
      price: 48.19,
      date: '2016-05-25 07:45:13',
    },
    {
      id: 18,
      name: 'Williams',
      status: 3,
      price: 198.9,
      date: '2016-01-23 21:25:20',
    },
    {
      id: 19,
      name: 'Jackson',
      status: 2,
      price: 146.8,
      date: '2015-06-18 07:49:46',
    },
    {
      id: 20,
      name: 'Lopez',
      status: 2,
      price: 78.5,
      date: '2015-04-16 03:01:32',
    },
    {
      id: 21,
      name: 'Miller',
      status: 3,
      price: 20.3,
      date: '2015-02-18 05:20:34',
    },
    {
      id: 22,
      name: 'Brown',
      status: 3,
      price: 145.3,
      date: '2016-09-28 23:38:20',
    },
    {
      id: 23,
      name: 'Walker',
      status: 1,
      price: 167.82,
      date: '2016-11-07 01:38:18',
    },
    {
      id: 24,
      name: 'White',
      status: 3,
      price: 174.9,
      date: '2016-02-08 19:51:15',
    },
    {
      id: 25,
      name: 'Martin',
      status: 4,
      price: 85.22,
      date: '2015-02-17 14:28:33',
    },
    {
      id: 26,
      name: 'Robinson',
      status: 4,
      price: 138.44,
      date: '2016-01-08 15:08:29',
    },
    {
      id: 27,
      name: 'Rodriguez',
      status: 2,
      price: 185.85,
      date: '2015-03-14 13:14:08',
    },
    {
      id: 28,
      name: 'Robinson',
      status: 4,
      price: 85.4,
      date: '2016-12-03 23:21:13',
    },
    {
      id: 29,
      name: 'Jones',
      status: 2,
      price: 112.43,
      date: '2015-12-27 17:01:00',
    },
    {
      id: 30,
      name: 'Jackson',
      status: 1,
      price: 121.83,
      date: '2015-03-29 02:47:30',
    },
    {
      id: 31,
      name: 'Thomas',
      status: 3,
      price: 142.86,
      date: '2015-03-22 03:15:23',
    },
    {
      id: 32,
      name: 'Wilson',
      status: 4,
      price: 19.8,
      date: '2016-02-09 16:41:16',
    },
    {
      id: 33,
      name: 'Brown',
      status: 2,
      price: 69.42,
      date: '2016-07-07 22:26:51',
    },
    {
      id: 34,
      name: 'Perez',
      status: 1,
      price: 76.7,
      date: '2015-04-02 03:47:52',
    },
    {
      id: 35,
      name: 'Wilson',
      status: 2,
      price: 148.2,
      date: '2016-11-28 08:02:38',
    },
    {
      id: 36,
      name: 'Gonzalez',
      status: 3,
      price: 23.85,
      date: '2016-07-06 04:24:04',
    },
  ],
  quote: {
    name: 'Joho Doe',
    title: 'Graphic Designer',
    content:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    avatar:
      'http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236',
  },
  numbers: [
    { icon: 'pay-circle-o', color: '#64ea91', title: '总支出', number: 2781 },
  ],
}
