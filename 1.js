var  routeIndex1 = {
         view: '#conter2',
         router: {
             '/home/index1': {
                 templateUrl: 'html/2.html'
               
               
             },
             '/home/index2': {
                 templateUrl: 'html/3.html'
              	
             },
       
             'defaults': 'home' //默认路由
         }
    };
	vipspa.start(routeIndex1);