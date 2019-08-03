// 请求API：主题请求
export default {
    get:{
        首页:'/topics',
        未读取消息数:'/message/count'
    },
    post:{
        收藏主题:'/topic_collect/collect',
        取消主题:'/topic_collect/de_collect'
    }
}
