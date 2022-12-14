module.exports = {
  title: "智慧营销平台",
  description: "智慧营销平台开放平台",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "../dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "Api文档", link: "/api/" }
    ],
    sidebar: {
      '/api/': genSidebarConfig('Api文档')

    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {

  return [
    {
      title,
      collapsable: true,
      children: [
        '',
        '客户管理',
        '客户身份管理',
        '客户元数据管理' ,
        '客户事件管理',
        '标签管理',
        '群组管理',
        '会员管理',
        '自定义对象管理',
        '在用商品管理',
        '订单管理',
        'Webhook管理'
      ]
    }
  ]
}

