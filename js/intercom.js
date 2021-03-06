var myChart;  
        var eCharts;  
  
         
  
        //创建ECharts图表方法  closed="true"
        function DrawEChart(ec) {  
            eCharts = ec;  
            myChart = eCharts.init(document.getElementById('main'));  
            myChart.showLoading({  
                text : "图表数据正在努力加载..."  
            });  
            //定义图表options  
           var options = {
              title : {
		//text: '活跃用户情况',	
               // subtext: '（％）'	
	    },
	    tooltip : {
		trigger: 'axis'
	    },
	    legend: {
		data:['IOS对讲次数','Android对讲次数','电话对讲次数']
	    },
	    toolbox: {
		show : false,
		feature : {
		    mark : {show: true},
		    dataView : {show: true, readOnly: false},
		    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
		    restore : {show: true},
		    saveAsImage : {show: true}
		}
	    },
	    calculable : true,
	    xAxis : [
		{
		    type : 'category',
		    boundaryGap : false,
		    data : ['2016/08/01','2016/08/02','2016/08/03','2016/08/04','2016/08/05','2016/08/06','2016/08/07','2016/08/08','2016/08/09','2016/08/10']
		}
	    ],
	    yAxis : [
		{
		    type : 'value'
		}
	    ],
	    series : [
		{
		    name:'IOS对讲次数',
		    type:'line',
		    smooth:true,
		    itemStyle: {normal: {areaStyle: {type: 'default'}}},
		    data:[800, 850, 1000, 1100, 1050, 900, 700,850,800,600]
		},
                {
		    name:'Android对讲次数',
		    type:'line',
		    smooth:true,
		    itemStyle: {normal: {areaStyle: {type: 'default'}}},
		    data:[500, 550, 600, 800, 700, 750, 600,500,450,400]
		},
                {
		    name:'电话对讲次数',
		    type:'line',
		    smooth:true,
		    itemStyle: {normal: {areaStyle: {type: 'default'}}},
		    data:[50, 80, 100, 90, 60, 40, 75,85,95,60]
		}
　　　　　　　　　　　　　　　　
	    ]
           }; 
            myChart.setOption(options); //先把可选项注入myChart中  
            myChart.hideLoading();  
          //  getChartData();//aja后台交互   9/07/2016 - 09/14/2016
        }  
        

$(document).ready(function(){  
        var data = $.parseJSON(jsonstr);    
        $('.easyui-datagrid').datagrid('loadData', data); 
	  // 路径配置
        require.config({
            packages: [{
                name: 'echarts',
                location: 'echarts',
                main: 'echarts'
            }]
        });
  
        require(  
            [ 'echarts',   
              'echarts/chart/line'  
            ], DrawEChart //异步加载的回调函数绘制图表  
        ); 
      var input1 = $('<input>').appendTo($('#dateFrame')).attr('id', 'dd').attr('type','text').attr('value','');

      easyloader.locale = "zh_CN";
      easyloader.base = "easyui/";
      using('daterangebox', function(){
        $('#dd').daterangebox();
      });

   
	  $("#areaLi input").each(function(){
		  $(this).click(function(){               
              if($(this).is(':checked'))
			  {
                 $("#area_seat").append("<span class=\"sel-box w80\" name=\""+$(this).parent().find('label').text()+"\">"+$(this).parent().find('label').text()+"<a class=\"close\" href=\"javascript:\" onclick=\"$.removeSel(this,&quot;SWZ&quot;,2)\"></a></span>");
			  }
			  else
			  {
                 $("#area_seat").find("span[name='"+$(this).parent().find('label').text()+"']").remove();
			  }
			  
		  });
	  });

         $("#villageLi input").each(function(){
		  $(this).click(function(){               
              if($(this).is(':checked'))
			  {
                 $("#village_seat").append("<span class=\"sel-box w80\" name=\""+$(this).parent().find('label').text()+"\">"+$(this).parent().find('label').text()+"<a class=\"close\" href=\"javascript:\" onclick=\"$.removeSel(this,&quot;SWZ&quot;,2)\"></a></span>");
			  }
			  else
			  {
                 $("#village_seat").find("span[name='"+$(this).parent().find('label').text()+"']").remove();
			  }
			  
		  });
	  });

$('#w').window({
    		collapsible:false,
    		minimizable:false,
    		maximizable:false
    	});
$('#w1').window({
    		collapsible:false,
    		minimizable:false,
    		maximizable:false
    	});
	

    });

function openWin()
        {
            var offset =$("#areaButton").offset();
            
            $('#w').window({left:offset.left+"px", top:offset.top+$("#areaButton").height()+"px"});
            $('#w').window('open');
        }       

       

        function openWin1()
        {
            var offset =$("#villageButton").offset();
            
            $('#w1').window({left:offset.left+"px", top:offset.top+$("#villageButton").height()+"px"});
            $('#w1').window('open');
        } 
