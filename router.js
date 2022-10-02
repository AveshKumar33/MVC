const homeController=require('./controllers/homeController')


module.exports=function(app){
        app.get('/',homeController.home)
        app.route('/employee').get(homeController.employee)
        app.route('/aboutus').get(homeController.aboutus);
}