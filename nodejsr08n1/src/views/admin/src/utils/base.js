const base = {
    get() {
        return {
            url : "http://localhost:8080/nodejsr08n1/",
            name: "nodejsr08n1",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/nodejsr08n1/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生社团管理系统"
        } 
    }
}
export default base
