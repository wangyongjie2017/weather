new Vue({
	el:'#app',
	//保存天气数据
	data:{
		//可有可无
		location:'BeiJing',
		weatherArr:[],
		time:'时间错误',
		name:'城市获取错误',
		country:'国家获取错误',
		longitude:'经度获取错误',
		Latitude:'纬度获取错误',
		// one:'',
		// two:'',
		// three:'',
		up:{
			width:'500px',
			margin:'20px auto',
		},
		seek:{
			width:'400px',
			height:'50px',
			padding:'10px',
			'font-size':'20px',
			'text-align':'center',
			// 'border-radius':'4px 0 0 4px',
			'border-radius':'4px',
			border:'1px solid #F17C67',
			outline:'none'
		},
		btn:{
			width:'80px',
			height:'50px',
			'border-radius':'4px',
			border:'1px solid #F17C67',
			background:'#F17C67',
			'font-size':'20px',
			color:'#fff',
			'vertical-align':'bottom',
			// outline:'none'
		},
		table:{
			'text-align':'center',
			width:'100%',
			height:'400px',
			border:'4px solid',
			background:'#3A87CC',
			color:'#fff'
		}
	},

	//请求天气数据
	methods:{
		//定义请求数据的方法
		getDate:function(){
			//这个位置赋值解决下面this指向全局的问题
			var that = this;
			// axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Beijing&appid=7c5219469d1d3aa869d2599559d26fc1&lang=zh_cn')    //老师提供的api
			axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${that.location}&appid=2eb794db191d0befe1f0ac7d4a0108ed&lang=zh_cn&cnt=7`)      //修改密钥
			// axios.get('"http://api.openweathermap.org/data/2.5/forecast/daily?q=" + that.location + "appid=2eb794db191d0befe1f0ac7d4a0108ed&lang=zh_cn&cnt=7"')  
			// axios.get('http://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=2eb794db191d0befe1f0ac7d4a0108ed&lang=zh_cn')
				.then(function(response){
					console.log(response);
					that.weatherArr = response.data.list;  //把数据中的list数据文件返回到新建的数组中
					that.name = response.data.city.name;  //城市名称
					that.longitude = response.data.city.coord.lat;  //经纬度
					that.Latitude = response.data.city.coord.lon;  //经纬度
					that.country = response.data.city.country;  //国家
					console.log(that.weatherArr)
				})
				.catch(function(error){
					console.log(error)
				});
		},
		changeLocation : function (){
				this.getDate()
		},
		times:function(){
			var time = new Date()
			this.year = time.getFullYear();
			this.month = time.getMonth()+1;
			this.day = time.getDate()
			console.log(time)
			this.one = time.getMonth()+1;
			this.one = time.getDate()
		}
	},
	created(){
		// 创建完成进行调用
		this.getDate()
		this.times()
	}
	
})

















